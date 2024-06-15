import { useState, useEffect } from 'react';
import { PlusIcon, PencilSquareIcon, TrashIcon, EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import Swal from 'sweetalert2';
import SuperAdminPanel from './SuperAdminPanel'
import HeaderLayout from '../Header/HeaderLayout'
import SidebarLayout from '../Header/SidebarLayout';

function ListAdminLayout() {
    const [admins, setAdmins] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const [isAdding, setIsAdding] = useState(false); // State untuk form tambah akun baru
    const [currentAdmin, setCurrentAdmin] = useState({
        id: '',
        name: '',
        email: '',
        telephone_number: '',
        password: ''
    });
    const [newAdmin, setNewAdmin] = useState({ // State untuk akun baru
        name: '',
        email: '',
        telephone_number: '',
        password: ''
    });
    const [showPassword, setShowPassword] = useState(false);

    useEffect(() => {
        fetchAdmins();
    }, []);

    const fetchAdmins = async () => {
        try {
            const token = sessionStorage.getItem('token');
            const response = await fetch('https://capstone-dev.mdrizki.my.id/api/v1/admins', {
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
            setAdmins(data.data);
        } catch (error) {
            console.error('Error fetching admins:', error);
        }
    };

    const deleteAdmin = async (adminId) => {
        try {
            const token = sessionStorage.getItem('token');
            const confirmed = await confirmDelete();

            if (!confirmed) return;

            const response = await fetch(`https://capstone-dev.mdrizki.my.id/api/v1/admins/${adminId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            setAdmins(prevAdmins => prevAdmins.filter(admin => admin.id !== adminId));
        } catch (error) {
            console.error('Error deleting admin:', error);
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

    const handleEditClick = (admin) => {
        setCurrentAdmin(admin);
        setIsEditing(true);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCurrentAdmin({ ...currentAdmin, [name]: value });
    };

    const handleNewAdminInputChange = (e) => { // Fungsi untuk menangani input pada form tambah akun baru
        const { name, value } = e.target;
        setNewAdmin({ ...newAdmin, [name]: value });
    };

    const handleEditSubmit = async (e) => {
        e.preventDefault();

        try {
            const token = sessionStorage.getItem('token');
            const response = await fetch(`https://capstone-dev.mdrizki.my.id/api/v1/admins/${currentAdmin.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(currentAdmin)
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            setIsEditing(false);
            fetchAdmins(); // Refresh the admin list

            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your changes are saved",
                showConfirmButton: false,
                timer: 1500
            });
        } catch (error) {
            console.error('Error updating admin:', error);
        }
    };


    const handleNewAdminSubmit = async (e) => { // Fungsi untuk submit form tambah akun baru
        e.preventDefault();

        try {
            const token = sessionStorage.getItem('token');
            const response = await fetch('https://capstone-dev.mdrizki.my.id/api/v1/admins', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(newAdmin)
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            setIsAdding(false);
            fetchAdmins(); // Refresh the admin list
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Successfully added new account",
                showConfirmButton: false,
                timer: 1500
            });
        } catch (error) {
            console.error('Error creating new admin:', error);
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <section className="flex w-full flex-col">
            <HeaderLayout />
            <SidebarLayout />
            <SuperAdminPanel />
            <div className="lg:ml-80 py-3 px-2 min-h-[80dvh] overflow-y-auto">
                <main className="bg-[#E2E2E2] lg:max-w-[99%] py-4 px-4 rounded-md lg:min-h-[70dvh] overflow-y-auto">
                    <section className="pl-4">
                        <button
                            type="button"
                            className="flex bg-main-color py-2 pl-4 pr-6 rounded-md mb-4 hover:bg-main-darker"
                            onClick={() => setIsAdding(true)} // Menampilkan form tambah akun baru
                        >
                            <PlusIcon className="size-6 text-black" />
                            <p className="font-medium text-black font-montserrat">Add/Create</p>
                        </button>
                    </section>
                    <div className='w-full overflow-x-auto overflow-y-auto h-96'>
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
                                {admins.map((admin, index) => (
                                    <tr key={admin.id} className='text-black bg-white text-center border-b border-black first:pt-4 last:pb-4'>
                                        <td className='py-2 font-bold'>{index + 1}</td>
                                        <td className='py-2'>{admin.name}</td>
                                        <td className='py-2'>{admin.email}</td>
                                        <td className='py-2'>{admin.telephone_number}</td>
                                        <td className='py-2'>••••••••</td>
                                        <td className='flex gap-2 justify-center py-2'>
                                            {!admin.is_super_admin && (
                                                <>
                                                    <button onClick={() => handleEditClick(admin)}>
                                                        <PencilSquareIcon className="size-6 text-blue-500" />
                                                    </button>
                                                    <button onClick={() => deleteAdmin(admin.id)}>
                                                        <TrashIcon className="size-6 text-red-500" />
                                                    </button>
                                                </>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    {isEditing && (
                        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                            <form onSubmit={handleEditSubmit} className="bg-white p-8 rounded shadow-md w-full max-w-md">
                                <h2 className="text-2xl mb-4 font-bold">Edit Admin</h2>
                                <div className="mb-4">
                                    <label className="block mb-2 font-bold" htmlFor="name">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={currentAdmin.name}
                                        onChange={handleInputChange}
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
                                        value={currentAdmin.email}
                                        onChange={handleInputChange}
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
                                        value={currentAdmin.telephone_number}
                                        onChange={handleInputChange}
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
                                        value={currentAdmin.password}
                                        onChange={handleInputChange}
                                        className="w-full p-2 border border-gray-300 rounded pr-10"
                                        required
                                    />
                                    <button
                                        type="button"
                                        onClick={togglePasswordVisibility}
                                        className="absolute inset-y-0 right-0 pr-3 flex mt-1 justify-center top-7 items-center text-gray-500"
                                    >
                                        {showPassword ? (
                                            <EyeSlashIcon className="h-5 w-5" />
                                        ) : (
                                            <EyeIcon className="h-5 w-5" />
                                        )}
                                    </button>
                                </div>
                                <div className="flex justify-end">
                                    <button type="button" onClick={() => setIsEditing(false)} className="mr-4 px-4 py-2 text-gray-600">Cancel</button>
                                    <button type="submit" className="px-4 py-2 bg-main-color hover:bg-main-darker text-white rounded">Save</button>
                                </div>
                            </form>
                        </div>
                    )}
                    {isAdding && (
                        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                            <form onSubmit={handleNewAdminSubmit} className="bg-white p-8 rounded shadow-md w-full max-w-md">
                                <h2 className="text-2xl mb-4 font-bold">Tambah Akun</h2>
                                <div className="mb-4">
                                    <label className="block mb-2 font-bold" htmlFor="name">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={newAdmin.name}
                                        onChange={handleNewAdminInputChange}
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
                                        value={newAdmin.email}
                                        onChange={handleNewAdminInputChange}
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
                                        value={newAdmin.telephone_number}
                                        onChange={handleNewAdminInputChange}
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
                                        value={newAdmin.password}
                                        onChange={handleNewAdminInputChange}
                                        className="w-full p-2 border border-gray-300 rounded pr-10"
                                        required
                                    />
                                    <button
                                        type="button"
                                        onClick={togglePasswordVisibility}
                                        className="absolute inset-y-0 right-0 pr-3 mt-1 flex justify-center top-7 items-center text-gray-500"
                                    >
                                        {showPassword ? (
                                            <EyeSlashIcon className="h-5 w-5" />
                                        ) : (
                                            <EyeIcon className="h-5 w-5" />
                                        )}
                                    </button>
                                </div>
                                <div className="flex justify-end">
                                    <button type="button" onClick={() => setIsAdding(false)} className="mr-4 px-4 py-2 text-gray-600">Cancel</button>
                                    <button type="submit" className="px-4 py-2 bg-main-color hover:bg-main-darker text-white rounded">Save</button>
                                </div>
                            </form>
                        </div>
                    )}
                </main>
            </div>
        </section>
    );
}

export default ListAdminLayout;
