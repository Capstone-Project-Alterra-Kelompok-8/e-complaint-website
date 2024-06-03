import { useState, useEffect } from 'react';
import { PlusIcon, PencilSquareIcon, TrashIcon } from '@heroicons/react/24/outline';

function ListUserLayout() {
    const [user, setUser] = useState([]);

    useEffect(() => {
        fetchUser();
    }, []);

    const fetchUser = async () => {
        try {
            const response = await fetch('https://capstone-dev.mdrizki.my.id/api/v1/users', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${import.meta.env.VITE_JWT}`
                }
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            setUser(data.data);
        } catch (error) {
            console.error('Error fetching admins:', error);
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
            <div className='w-full overflow-x-auto'>
                <table className='table-auto w-full font-poppins'>
                    <thead className='w-full'>
                        <tr className='bg-main-lighter text-black'>
                            <th className='py-1.5'>No</th>
                            <th className='py-1.5'>Name</th>
                            <th className='py-1.5'>Email</th>
                            <th className='py-1.5'>Password</th>
                            <th className='py-1.5'>Action</th>
                        </tr>
                    </thead>
                    <tbody className='py-4 border-dashed border-2 border-[#9747FF] w-full'>
                        {user.map((users, index) => (
                            <tr key={users.id} className='text-black bg-transparent text-center border-b border-black first:pt-4 last:pb-4'>
                                <td className='py-2 font-bold'>{index + 1}</td>
                                <td className='py-2'>{users.name}</td>
                                <td className='py-2'>{users.email}</td>
                                <td className='py-2'>••••••••</td>
                                <td className='flex gap-2 justify-center py-2'>
                                    <button>
                                        <PencilSquareIcon className="size-6 text-blue-500" />
                                    </button>
                                    <button>
                                        <TrashIcon className="size-6 text-red-500" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </main>
    );
}

export default ListUserLayout;
