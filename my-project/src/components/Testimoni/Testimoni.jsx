import testi1 from '../../assets/testimoni1.png';
import testi2 from '../../assets/testimoni2.png';
import testi3 from '../../assets/testimoni3.png';
import slide from '../../assets/slide.png';

export default function Benefit() {
  return (
    <div className="h-[670px] bg-white flex flex-col justify-center items-center pe-20 pl-24 pb-20 relative" id="testimoni">
      {/* Phone Mockups */}
      <div className="z-10 flex  items-center ">
        <button className="btn btn-square pr-20">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M25 10L15 20L25 30" stroke="#262626" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </button>
        <div className="text-zinc-900 text-2xl font-bold font-['Montserrat'] leading-normal ">Apa yang klien kami katakan tentang kami</div>
        <button className="btn btn-square pl-20">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 30L25 20L15 10" stroke="#262626" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      {/* slide */}
      <div className=" pt-8 pl-3">
        <img src={slide} alt="image" />
      </div>
      {/* Testimoni */}

      <div class="grid grid-cols-3 gap-4 pt-5">
        <div>
          <img src={testi1} alt="image" />
        </div>
        <div>
          <img src={testi2} alt="image" />
        </div>
        <div>
          <img src={testi3} alt="image" className="pl-8" />
        </div>
      </div>
    </div>
  );
}
