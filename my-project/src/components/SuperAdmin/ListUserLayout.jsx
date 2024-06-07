import { useState, useEffect } from 'react';
import { PlusIcon, PencilSquareIcon, TrashIcon, EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import Swal from 'sweetalert2';

function ListUserLayout() {
    const [users, setUsers] = useState([]);
    const [isAdding, setIsAdding] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [isEditingPassword, setIsEditingPassword] = useState(false);
    const [currentUser, setCurrentUser] = useState(null);
    const [currentPassword, setCurrentPassword] = useState({
        old_password: '',
        new_password: ''
    });
    const [newUser, setNewUser] = useState({
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
            confirmButtonColor: '#DC2626',
            cancelButtonColor: '#2563EB',
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
            setNewUser({
                name: '',
                email: '',
                telephone_number: '',
                password: ''
            });
            fetchUsers();
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

    const handleEditUser = (user) => {
        setCurrentUser(user);
        setIsEditing(true);
    };

    const handleEditPassword = (user) => {
        setCurrentUser(user);
        setIsEditingPassword(true);
    };

    const handleEditUserInputChange = (e) => {
        const { name, value } = e.target;
        setCurrentUser({ ...currentUser, [name]: value });
    };

    const handleEditPasswordInputChange = (e) => {
        const { name, value } = e.target;
        setCurrentPassword({ ...currentPassword, [name]: value });
    };

    const handleEditUserSubmit = async (e) => {
        e.preventDefault();

        try {
            const token = sessionStorage.getItem('token');
            const response = await fetch(`https://capstone-dev.mdrizki.my.id/api/v1/users/${currentUser.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({
                    name: currentUser.name,
                    email: currentUser.email,
                    telephone_number: currentUser.telephone_number
                })
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            setIsEditing(false);
            setCurrentUser(null);
            fetchUsers();
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your changes are saved",
                showConfirmButton: false,
                timer: 1500
            });
        } catch (error) {
            console.error('Error updating user:', error);
        }
    };

    const handleEditPasswordSubmit = async (e) => {
        e.preventDefault();

        try {
            const token = sessionStorage.getItem('token');
            const response = await fetch(`https://capstone-dev.mdrizki.my.id/api/v1/users/${currentUser.id}/change-password`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(currentPassword)
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            setIsEditingPassword(false);
            setCurrentPassword({
                old_password: '',
                new_password: ''
            });
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Password changed successfully",
                showConfirmButton: false,
                timer: 1500
            });
        } catch (error) {
            console.error('Error updating password:', error);
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
                    onClick={() => setIsAdding(true)}
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
                                <td className='py-2'>
                                    <button onClick={() => handleEditUser(user)} className="text-blue-500 hover:text-blue-700">
                                        <PencilSquareIcon className="h-5 w-5" />
                                    </button>
                                    <button onClick={() => deleteUser(user.id)} className="text-red-500 hover:text-red-700 ml-2">
                                        <TrashIcon className="h-5 w-5" />
                                    </button>
                                    <button onClick={() => handleEditPassword(user)} className="text-green-500 hover:text-green-700 ml-2">
                                        <PencilSquareIcon className="h-5 w-5" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {isAdding && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <form onSubmit={handleNewUserSubmit} className="bg-white p-8 rounded shadow-md w-full max-w-md">
                        <h2 className="text-2xl mb-4 font-bold">Add New User</h2>
                        <div className="mb-4">
                            <label className="block mb-2 font-bold" htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={newUser.name}
                                onChange={handleNewUserInputChange}
                                className="w-full p-2 border border-gray-300 rounded"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-2 font-bold" htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={newUser.email}
                                onChange={handleNewUserInputChange}
                                className="w-full p-2 border border-gray-300 rounded"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-2 font-bold" htmlFor="telephone_number">Phone Number</label>
                            <input
                                type="text"
                                id="telephone_number"
                                name="telephone_number"
                                value={newUser.telephone_number}
                                onChange={handleNewUserInputChange}
                                className="w-full p-2 border border-gray-300 rounded"
                                required
                            />
                        </div>
                        <div className="mb-4 relative">
                            <label className="block mb-2 font-bold" htmlFor="password">Password</label>
                            <input
                                type={showPassword ? "text" : "password"}
                                id="password"
                                name="password"
                                value={newUser.password}
                                onChange={handleNewUserInputChange}
                                className="w-full p-2 border border-gray-300 rounded"
                                required
                            />
                            <button type="button" onClick={togglePasswordVisibility} className="absolute right-2 top-2">
                                {showPassword ? <EyeIcon className="h-5 w-5" /> : <EyeSlashIcon className="h-5 w-5" />}
                            </button>
                        </div>
                        <div className="flex justify-end">
                            <button type="button" onClick={() => setIsAdding(false)} className="mr-4 px-4 py-2 text-gray-600">Cancel</button>
                            <button type="submit" className="px-4 py-2 bg-main-color text-white rounded">Save</button>
                        </div>
                    </form>
                </div>
            )}

            {isEditing && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <form onSubmit={handleEditUserSubmit} className="bg-white p-8 rounded shadow-md w-full max-w-md">
                        <h2 className="text-2xl mb-4 font-bold">Edit User</h2>
                        <div className="mb-4">
                            <label className="block mb-2 font-bold" htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={currentUser.name}
                                onChange={handleEditUserInputChange}
                                className="w-full p-2 border border-gray-300 rounded"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-2 font-bold" htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={currentUser.email}
                                onChange={handleEditUserInputChange}
                                className="w-full p-2 border border-gray-300 rounded"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-2 font-bold" htmlFor="telephone_number">Phone Number</label>
                            <input
                                type="text"
                                id="telephone_number"
                                name="telephone_number"
                                value={currentUser.telephone_number}
                                onChange={handleEditUserInputChange}
                                className="w-full p-2 border border-gray-300 rounded"
                                required
                            />
                        </div>
                        <div className="flex justify-end">
                            <button type="button" onClick={() => setIsEditing(false)} className="mr-4 px-4 py-2 text-gray-600">Cancel</button>
                            <button type="submit" className="px-4 py-2 bg-main-color text-white rounded">Save</button>
                        </div>
                    </form>
                </div>
            )}

            {isEditingPassword && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <form onSubmit={handleEditPasswordSubmit} className="bg-white p-8 rounded shadow-md w-full max-w-md">
                        <h2 className="text-2xl mb-4 font-bold">Edit Password</h2>
                        <div className="mb-4">
                            <label className="block mb-2 font-bold" htmlFor="old_password">Old Password</label>
                            <input
                                type="password"
                                id="old_password"
                                name="old_password"
                                value={currentPassword.old_password}
                                onChange={handleEditPasswordInputChange}
                                className="w-full p-2 border border-gray-300 rounded"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-2 font-bold" htmlFor="new_password">New Password</label>
                            <input
                                type="password"
                                id="new_password"
                                name="new_password"
                                value={currentPassword.new_password}
                                onChange={handleEditPasswordInputChange}
                                className="w-full p-2 border border-gray-300 rounded"
                                required
                            />
                        </div>
                        <div className="flex justify-end">
                            <button type="button" onClick={() => setIsEditingPassword(false)} className="mr-4 px-4 py-2 text-gray-600">Cancel</button>
                            <button type="submit" className="px-4 py-2 bg-main-color text-white rounded">Save</button>
                        </div>
                    </form>
                </div>
            )}
        </main>
    );
}

export default ListUserLayout;
