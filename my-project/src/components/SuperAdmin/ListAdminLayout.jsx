import { useState, useEffect } from 'react';
import { PlusIcon, PencilSquareIcon, TrashIcon } from '@heroicons/react/24/outline';
import Swal from 'sweetalert2';

function ListAdminLayout() {
    const [admins, setAdmins] = useState([]);

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
        } else if (result.dismiss === Swal.DismissReason.cancel) {
            await Swal.fire({
                title: 'Cancelled',
                text: 'Your account is safe :)',
                icon: 'error',
                confirmButtonColor: '#2563EB'
            });
        }
    };
    

    return (
        <main className="w-full bg-[#E2E2E2] min-h-[100dvh] py-3 px-2">
            <section>
                <button type="button" className="flex bg-main-color py-2 pl-4 pr-6 rounded-md mb-4 hover:bg-main-darker">
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
                                            <button>
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
        </main>
    );
}

export default ListAdminLayout;
