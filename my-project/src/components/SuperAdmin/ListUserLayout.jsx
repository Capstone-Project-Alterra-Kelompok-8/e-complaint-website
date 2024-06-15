import { useState, useEffect } from 'react';
import { PencilSquareIcon, TrashIcon } from '@heroicons/react/24/outline';
import Swal from 'sweetalert2';
import SuperAdminPanel from './SuperAdminPanel'
import HeaderLayout from '../Header/HeaderLayout'
import SidebarLayout from '../Header/SidebarLayout';

function ListUserLayout() {
    const [users, setUsers] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const [currentUser, setCurrentUser] = useState(null);

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

    const handleEditUser = (user) => {
        setCurrentUser(user);
        setIsEditing(true);
    };

    const handleEditUserInputChange = (e) => {
        const { name, value } = e.target;
        setCurrentUser({ ...currentUser, [name]: value });
    };

    console.log("edit current user ", currentUser)
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

            console.log("edit user ", currentUser)
            setCurrentUser(null);
            setIsEditing(false);
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

    return (
        <section className="flex w-full flex-col">
            <HeaderLayout />
            <SidebarLayout />
            <SuperAdminPanel />
            <div className="lg:ml-80 py-3 px-2 min-h-[80dvh] overflow-y-auto">
                <main className="bg-[#E2E2E2] lg:max-w-[99%] py-4 px-4 rounded-md lg:min-h-[70dvh] lg:overflow-y-auto">
                    <div className='w-full overflow-x-auto'>
                        <table className='table-auto w-full font-poppins'>
                            <thead className='w-full'>
                                <tr className='bg-main-color text-black'>
                                    <th className='py-1.5'>No</th>
                                    <th className='py-1.5'>Name</th>
                                    <th className='py-1.5'>Email</th>
                                    <th className='py-1.5'>Phone Number</th>
                                    <th className='py-1.5'>Password</th>
                                    <th className='py-1.5'>Action</th>
                                </tr>
                            </thead>
                            <tbody className='py-4 w-full'>
                                {users.map((user, index) => (
                                    <tr key={user.id} className='text-black bg-white text-center border-b border-black first:pt-4 last:pb-4'>
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
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

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
                                    <button type="button" onClick={() => setIsEditing(false)} className="mr-4 px-4 py-2 text-gray-600">Batal</button>
                                    <button type="submit" className="px-4 py-2 bg-main-color hover:bg-main-darker text-white rounded">Simpan</button>
                                </div>
                            </form>
                        </div>
                    )}
                </main>
            </div>
        </section>
    );
}

export default ListUserLayout;
