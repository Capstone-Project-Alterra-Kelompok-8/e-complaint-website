import { PlusIcon, PencilSquareIcon, TrashIcon } from '@heroicons/react/24/outline'
import { useEffect, useState } from 'react'
import axios from 'axios'

function ListAdminLayout() {
    const [dataAllAdmin, setDataAllAdmin] = useState([])

    async function FecthDataAllAdmin() {
        const response = await axios.get('https://capstone-dev.mdrizki.my.id/api/v1/admins', {
            method: 'GET',
            headers: {
                Accept: '*/*',
                'Accept-Encoding': 'gzip, deflate, br',
                Connection: 'keep-alive',
                Authorization: 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6InN1cGVyX2FkbWluIiwicm9sZSI6InN1cGVyX2FkbWluIiwiZXhwIjoxNzE3MzIwMTA5fQ.s-1ILIoFHH365vv7o5-PDSLxlPEaMfbZ0NbnLVUI-5k'
            },
        })
        setDataAllAdmin(response.data)
    }

    useEffect(() => {
        FecthDataAllAdmin()
    }, [])


    console.log(dataAllAdmin);

    return (
        <main className="w-full bg-[#E2E2E2]">
            <section>
                <button type="button" className="flex bg-main-color py-2 pl-4 pr-6 rounded-md mb-4 hover:bg-main-darker">
                    <PlusIcon className="size-6 text-blue-500" />
                    <p className="font-medium">Add/Create</p>
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
                        {dataAllAdmin.map((admins, index) => {
                            <tr className='text-black bg-transparent text-center' key={index}>
                                <td className='py-2 font-bold'>{index}</td>
                                <td className='py-2'>{admins.name}</td>
                                <td className='py-2'>{admins.email}</td>
                                <td className='py-2'>{admins.password}</td>
                                <td className='flex gap-2 justify-center py-2'>
                                    <button>
                                        <PencilSquareIcon className="size-6 text-blue-500" />
                                    </button>
                                    <button>
                                        <TrashIcon className="size-6 text-red-500" />
                                    </button>
                                </td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        </main>
    )
}

export default ListAdminLayout