import { PlusIcon, PencilSquareIcon, TrashIcon } from '@heroicons/react/24/outline'

function ListAdminLayout() {
    return (
        <main className="w-full bg-[#E2E2E2]">
            <section>
                <button type="button" className="flex bg-main-color py-2 pl-4 pr-6 rounded-md mb-4 hover:bg-main-darker">
                    <PlusIcon className="size-6 text-blue-500" />
                    <p>Add/Create</p>
                </button>
            </section>
            <div className='w-full overflow-x-auto'>
                <table className='table-auto w-full font-poppins'>
                    <thead>
                        <tr className='bg-main-lighter text-black'>
                            <th className='py-1.5'>No</th>
                            <th className='py-1.5'>Name</th>
                            <th className='py-1.5'>Email</th>
                            <th className='py-1.5'>Password</th>
                            <th className='py-1.5'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='text-black bg-transparent text-center'>
                            <td className='py-2 font-bold'>1</td>
                            <td className='py-2'>Ahmad Saputro</td>
                            <td className='py-2'>Ahmad453@gmail.com</td>
                            <td className='py-2'>Abcd342</td>
                            <td className='flex gap-2 justify-center py-2'>
                                <button>
                                    <PencilSquareIcon className="size-6 text-blue-500" />
                                </button>
                                <button>
                                    <TrashIcon className="size-6 text-red-500" />
                                </button>
                            </td>
                        </tr>
                        <tr className='text-black bg-transparent text-center'>
                            <td className='py-2 font-bold'>2</td>
                            <td className='py-2'>Ahmad Saputro</td>
                            <td className='py-2'>Ahmad453@gmail.com</td>
                            <td className='py-2'>Abcd342</td>
                            <td className='flex gap-2 justify-center py-2'>
                                <button>
                                    <PencilSquareIcon className="size-6 text-blue-500" />
                                </button>
                                <button>
                                    <TrashIcon className="size-6 text-red-500" />
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </main>
    )
}

export default ListAdminLayout