import { PlusIcon } from '@heroicons/react/24/outline'

function ListAdminLayout() {
    return (
        <main className="w-full ">
            <section>
                <button type="button" className="flex bg-main-color py-2 pl-4 pr-6 rounded-md">
                    <PlusIcon className="size-6 text-blue-500" />
                    <p>Add/Create</p>
                </button>
            </section>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr></tr>
                    </tbody>
                </table>
            </div>
        </main>
    )
}

export default ListAdminLayout