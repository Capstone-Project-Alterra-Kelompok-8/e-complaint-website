import { useState, useEffect } from 'react';
import { PlusIcon, PencilSquareIcon, TrashIcon, EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import Swal from 'sweetalert2';

function ListUserLayout() {
    const [users, setUsers] = useState([]);
    const [isAdding, setIsAdding] = useState(false); // State untuk form tambah user baru
    const [newUser, setNewUser] = useState({ // State untuk user baru
        name: '',
        email: '',
        telephone_number: '',
        password: ''
    });
    const [showPassword, setShowPassword] = useState(false);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const token = sessionStorage.getItem('token');
            const response = await fetch('https://capstone-dev.mdrizki.my.id/api/v1/users', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            setUsers(data.data);
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };

    const deleteUser = async (userId) => {
        try {
            const token = sessionStorage.getItem('token');
            const confirmed = await confirmDelete();
            
            if (!confirmed) return;

            const response = await fetch(`https://capstone-dev.mdrizki.my.id/api/v1/users/${userId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            setUsers(prevUsers => prevUsers.filter(user => user.id !== userId));
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    };

    const confirmDelete = async () => {
        const result = await Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
            confirmButtonColor: '#DC2626', // Warna latar belakang untuk tombol "Yes, delete it!"
            cancelButtonColor: '#2563EB', // Warna latar belakang untuk tombol "No, cancel!"
            reverseButtons: true,
        });
    
        if (result.isConfirmed) {
            await Swal.fire({
                title: 'Deleted!',
                text: 'Your account has been deleted',
                icon: 'success',
                confirmButtonColor: '#DC2626'
            });
            return true;
        } else if (result.dismiss === Swal.DismissReason.cancel) {
            await Swal.fire({
                title: 'Cancelled',
                text: 'Your account is safe :)',
                icon: 'error',
                confirmButtonColor: '#2563EB'
            });
            return false;
        }
    };

    const handleNewUserInputChange = (e) => {
        const { name, value } = e.target;
        setNewUser({ ...newUser, [name]: value });
    };

    const handleNewUserSubmit = async (e) => {
        e.preventDefault();

        try {
            const token = sessionStorage.getItem('token');
            const response = await fetch('https://capstone-dev.mdrizki.my.id/api/v1/users/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(newUser)
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            setIsAdding(false);
            fetchUsers(); // Refresh the user list
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Successfully added new account",
                showConfirmButton: false,
                timer: 1500
            });
        } catch (error) {
            console.error('Error creating new user:', error);
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <main className="w-full bg-[#E2E2E2] min-h-[100dvh] py-3 px-2">
            <section>
                <button
                    type="button"
                    className="flex bg-main-color py-2 pl-4 pr-6 rounded-md mb-4 hover:bg-main-darker"
                    onClick={() => setIsAdding(true)} // Menampilkan form tambah user baru
                >
                    <PlusIcon className="size-6 text-black" />
                    <p className="font-medium text-black font-montserrat">Add/Create</p>
                </button>
            </section>
            <div className='w-full overflow-x-auto'>
                <table className='table-auto w-full font-poppins'>
                    <thead className='w-full'>
                        <tr className='bg-main-lighter text-black'>
                            <th className='py-1.5'>No</th>
                            <th className='py-1.5'>Name</th>
                            <th className='py-1.5'>Email</th>
                            <th className='py-1.5'>Phone Number</th>
                            <th className='py-1.5'>Password</th>
                            <th className='py-1.5'>Action</th>
                        </tr>
                    </thead>
                    <tbody className='py-4 border-dashed border-2 border-[#9747FF] w-full'>
                        {users.map((user, index) => (
                            <tr key={user.id} className='text-black bg-transparent text-center border-b border-black first:pt-4 last:pb-4'>
                                <td className='py-2 font-bold'>{index + 1}</td>
                                <td className='py-2'>{user.name}</td>
                                <td className='py-2'>{user.email}</td>
                                <td className='py-2'>{user.telephone_number}</td>
                                <td className='py-2'>••••••••</td>
                                <td className='flex gap-2 justify-center py-2'>
                                    <button>
                                        <PencilSquareIcon className="size-6 text-blue-500" />
                                    </button>
                                    <button onClick={() => deleteUser(user.id)}>
                                        <TrashIcon className="size-6 text-red-500" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {isAdding && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-4 rounded-md">
                        <h2 className="text-xl mb-4">Add New User</h2>
                        <form onSubmit={handleNewUserSubmit}>
                            <div className="mb-4">
                                <label className="block text-gray-700">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={newUser.name}
                                    onChange={handleNewUserInputChange}
                                    className="mt-1 block w-full"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={newUser.email}
                                    onChange={handleNewUserInputChange}
                                    className="mt-1 block w-full"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Phone Number</label>
                                <input
                                    type="text"
                                    name="telephone_number"
                                    value={newUser.telephone_number}
                                    onChange={handleNewUserInputChange}
                                    className="mt-1 block w-full"
                                />
                            </div>
                            <div className="mb-4 relative">
                                <label className="block text-gray-700">Password</label>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    value={newUser.password}
                                    onChange={handleNewUserInputChange}
                                    className="mt-1 block w-full pr-10"
                                />
                                <button
                                    type="button"
                                    onClick={togglePasswordVisibility}
                                    className="absolute inset-y-0 right-0 pr-3 flex justify-center top-7 items-center text-gray-500"
                                >
                                    {showPassword ? (
                                        <EyeSlashIcon className="h-5 w-5" />
                                    ) : (
                                        <EyeIcon className="h-5 w-5" />
                                    )}
                                </button>
                            </div>
                            <div className="flex justify-end">
                                <button
                                    type="button"
                                    onClick={() => setIsAdding(false)}
                                    className="mr-2 bg-gray-500 hover:bg-gray-600 text-white py-1 px-4 rounded"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="bg-success-1 hover:bg-success-2 text-white py-1 px-4 rounded"
                                >
                                    Save
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </main>
    );
}

export default ListUserLayout;
