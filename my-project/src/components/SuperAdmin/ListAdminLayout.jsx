import { useState, useEffect } from 'react';
import { PlusIcon, PencilSquareIcon, TrashIcon, EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import Swal from 'sweetalert2';
import SuperAdminPanel from './SuperAdminPanel'
import Header from '../Header/HeaderLayout'

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
            <Header />
            <SuperAdminPanel />
            <main className="w-full lg:ml-[290px] bg-[#E2E2E2] min-h-[100dvh] py-3 px-2">
                <section>
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
                            {admins.map((admin, index) => (
                                <tr key={admin.id} className='text-black bg-transparent text-center border-b border-black first:pt-4 last:pb-4'>
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
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                        <div className="bg-white p-4 rounded-md">
                            <h2 className="text-xl mb-4">Edit Admin</h2>
                            <form onSubmit={handleEditSubmit}>
                                <div className="mb-4">
                                    <label className="block text-gray-700">Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={currentAdmin.name}
                                        onChange={handleInputChange}
                                        className="mt-1 block w-full"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={currentAdmin.email}
                                        onChange={handleInputChange}
                                        className="mt-1 block w-full"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700">Phone Number</label>
                                    <input
                                        type="text"
                                        name="telephone_number"
                                        value={currentAdmin.telephone_number}
                                        onChange={handleInputChange}
                                        className="mt-1 block w-full"
                                    />
                                </div>
                                <div className="mb-4 relative">
                                    <label className="block text-gray-700">Password</label>
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        name="password"
                                        value={currentAdmin.password}
                                        onChange={handleInputChange}
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
                                        onClick={() => setIsEditing(false)}
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
                {isAdding && ( // Form tambah akun baru
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                        <div className="bg-white p-4 rounded-md">
                            <h2 className="text-xl mb-4">Add New Admin</h2>
                            <form onSubmit={handleNewAdminSubmit}>
                                <div className="mb-4">
                                    <label className="block text-gray-700">Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={newAdmin.name}
                                        onChange={handleNewAdminInputChange}
                                        className="mt-1 block w-full"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={newAdmin.email}
                                        onChange={handleNewAdminInputChange}
                                        className="mt-1 block w-full"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700">Phone Number</label>
                                    <input
                                        type="text"
                                        name="telephone_number"
                                        value={newAdmin.telephone_number}
                                        onChange={handleNewAdminInputChange}
                                        className="mt-1 block w-full"
                                    />
                                </div>
                                <div className="mb-4 relative">
                                    <label className="block text-gray-700">Password</label>
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        name="password"
                                        value={newAdmin.password}
                                        onChange={handleNewAdminInputChange}
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
        </section>
    );
}

export default ListAdminLayout;
