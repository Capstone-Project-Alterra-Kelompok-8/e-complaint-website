import menara from '../../assets/menara.png'
import logo from '../../assets/logo.png'
export default function Login() {
    return (
        <div className="h-svh flex flex-row">
            <div className="w-6/12 bg-main-color justify-between flex flex-col">
                <img src={logo} alt="logo" className='mt-16 mx-auto' />
                <img src={menara} alt="menara image" className='mb-0 w-96 h-96' />
            </div>
            <div className="flex flex-col w-6/12 justify-center gap-14 px-28">
                <h2 className="text-center text-main-color text-4xl font-bold font-['Poppins'] leading-10">Selamat datang Admin</h2>
                <h3 className="text-center text-gray-500 text-xl font-bold font-['Poppins'] leading-relaxed">Silahkan login terlebih dahulu.</h3>
                <form>
                    <div className='flex flex-col gap-2.5 mb-2.5'>
                        <label htmlFor="email" className="text-zinc-900 text-base font-medium font-['Poppins'] leading-tight">Email</label>
                        <input type="email" id='email' className="px-5 py-3 border border-main-color rounded-md w-full text-gray-400 text-base font-normal font-['Poppins'] leading-normal" placeholder='Masukkan email'/>
                    </div>
                    <div className='flex flex-col gap-2.5 mb-2.5'>
                        <label htmlFor="password" className="text-zinc-900 text-base font-medium font-['Poppins'] leading-tight">Password</label>
                        <input type="password" id='password' className="px-5 py-3 border border-main-color rounded-md w-full text-gray-400 text-base font-normal font-['Poppins'] leading-normal" placeholder='Masukkan password'/>
                    </div>
                </form>
                <button className=" bg-main-color px-6 py-2.5 justify-center items-center inline-flex rounded-md shadow-lg hover:bg-main-lighter ">
                    <span className="text-center text-zinc-900 text-sm font-medium font-['Poppins']">Login</span>
                </button>
            </div>
        </div>
    )
}