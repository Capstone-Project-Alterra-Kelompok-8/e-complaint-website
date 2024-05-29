import logo from '../../assets/logo.png'
export default function HeaderNavigation() {
  return (
    <div className="w-full h-20 bg-white justify-center items-center gap-32 inline-flex">
    <div>
      <a href=""><img className="w-64 h-14" src={logo} /></a>
    </div>
    <div className="h-10 justify-center items-center gap-16 flex">
      <div className="p-2.5 justify-center items-center gap-2.5 flex">
        <a className="text-zinc-900 text-xl font-normal font-['Montserrat'] leading-tight hover:text-darker" href='#'>Home</a>
      </div>
      <div className="p-2.5 justify-center items-center gap-2.5 flex">
      <a className="text-zinc-900 text-xl font-normal font-['Montserrat'] leading-tight hover:text-darker" href='#benefit'>Benefit</a>
      </div>
      <div className="p-2.5 justify-center items-center gap-2.5 flex">
      <a className="text-zinc-900 text-xl font-normal font-['Montserrat'] leading-tight hover:text-darker" href='#features'>Features</a>
      </div>
      <div className="p-2.5 justify-center items-center flex">
      <a className="text-zinc-900 text-xl font-normal font-['Montserrat'] leading-tight hover:text-darker" href='#testimoni'>Testimoni</a>
      </div>
    </div>
    <div className="justify-start items-start gap-3.5 flex">
      <button className="p-2.5 bg-main-color rounded-full justify-center items-center gap-2.5 flex">
        <div className="text-zinc-900 text-xl font-normal font-['Montserrat'] leading-tight">Get The Apps</div>
      </button>
    </div>
  </div>
  )
}

