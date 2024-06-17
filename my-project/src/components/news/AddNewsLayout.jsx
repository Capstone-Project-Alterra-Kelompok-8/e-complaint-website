import { Link } from 'react-router-dom';
import HeaderLayout from '../Header/HeaderLayout'
import SidebarLayout from '../Header/SidebarLayout';

const AddNewsLayout = () => {
    return (
        <section className="flex w-full flex-col">
            <HeaderLayout />
            <SidebarLayout />
            <div className="lg:ml-80 py-3 px-2 min-h-[80dvh] overflow-y-auto">
                <main>
                    {/* Start Content in create news */}
                    <div>
                        <div>
                            {/* This upload file */}
                            <div>
                                <input type="file" name="" id="" />
                            </div>
                            {/* End upload file */}


                            <div>
                                <div>
                                    <input type="text" placeholder='Judul' />
                                </div>

                                <div>
                                    <select name="" id="">
                                        <option value="">Kategory</option>
                                    </select>
                                </div>
                            </div>
                        </div>


                        <div>
                            <textarea name="" id="" cols="30" rows="10"></textarea>
                        </div>

                    </div>
                    {/* End Content in create news */}



                    {/* Start This is Button in create news */}
                    <div className='flex justify-between'>
                        <section>
                            <button className='bg-dark-3 text-white'>Preview</button>
                        </section>
                        <section>
                            <Link to='/news' className='border border-black'>Kembali ke Kelola Berita</Link>
                            <button className='bg-green-600 text-white'>Simpan</button>
                        </section>
                    </div>
                    {/* End This is Button in create news */}
                </main>
            </div>
        </section >
    )
}

export default AddNewsLayout