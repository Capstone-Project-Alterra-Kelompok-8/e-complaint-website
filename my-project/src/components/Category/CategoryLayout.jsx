import { useState, useEffect } from "react"
import { PlusIcon, TrashIcon, PencilSquareIcon } from '@heroicons/react/24/outline';
import Swal from 'sweetalert2';

function CategoryLayout() {
    const [category, setCategory] = useState([]);

    useEffect(() => {
        fetchCategory();
    }, []);


    const fetchCategory = async () => {
        try {
            const token = sessionStorage.getItem('token');
            const response = await fetch('https://capstone-dev.mdrizki.my.id/api/v1/categories', {
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
            setCategory(data.data);
        } catch (error) {
            console.error('Error fetching category: ', error);
        }
    };

    const deleteCategory = async (categoryId) => {
        try {
            const token = sessionStorage.getItem('token');
            const confirmed = await confirmDelete();
            
            if (!confirmed) return;

            const response = await fetch(`https://capstone-dev.mdrizki.my.id/api/v1/complaint-categories/${categoryId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            setCategory(prevcategory => prevcategory.filter(category => category.id !== categoryId))
        } catch (error) {
            console.error('Error deleting category: ', error)
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
                text: 'Your category has been deleted',
                icon: 'success',
                confirmButtonColor: '#DC2626'
            });
            return true;
        } else if (result.dismiss === Swal.DismissReason.cancel) {
            await Swal.fire({
                title: 'Cancelled',
                text: 'Your category is safe :)',
                icon: 'error',
                confirmButtonColor: '#2563EB'
            });
            return false;
        }
    };

    return (
        <main>
            <section>
                <button
                    type="button"
                    className="flex bg-main-color py-2 pl-4 pr-6 rounded-md mb-4 hover:bg-main-darker"
                // onClick={() => setIsAdding(true)} // Menampilkan form tambah akun baru
                >
                    <PlusIcon className="size-6 text-black" />
                    <p className="font-medium text-black font-montserrat">Add Category</p>
                </button>
            </section>
            <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-8 gap-2 md:gap-3 lg:gap-4">
                {category.map((category, index) => (
                    <div className="bg-white shadow-lg col-auto md:col-span-2 lg:col-span-2 rounded-lg" key={index}>
                        <p className="text-main-color">{category.Name}</p>
                        <p>{category.Description}</p>
                        <div className="flex">
                            <button>
                                <PencilSquareIcon className="size-6 text-blue-500" />
                            </button>
                            <button onClick={() => deleteCategory(category.id)}>
                                <TrashIcon className="size-6 text-red-500" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </main>

    )
}

export default CategoryLayout;