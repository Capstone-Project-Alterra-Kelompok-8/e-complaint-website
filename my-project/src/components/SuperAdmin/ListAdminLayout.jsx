import { PlusIcon, PencilSquareIcon, TrashIcon } from '@heroicons/react/24/outline'

function ListAdminLayout() {
    return (
        <main className="w-full bg-[#E2E2E2]">
            <section>
                <button type="button" className="flex bg-main-color hover:bg-main-darker py-2 pl-4 pr-6 rounded-md mb-4">
                    <PlusIcon className="size-6 text-black" />
                    <p className="font-medium">Add/Create</p>
                </button>
            </section>
            <div>
                <table>
                    <thead>
                        <tr className='bg-main-lighter text-black'>
                            <th>No</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Password</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='text-black bg-transparent'>
                            <td>1</td>
                            <td>Ahmad Saputro</td>
                            <td>Ahmad453@gmail.com</td>
                            <td>Abcd342</td>
                            <td>
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