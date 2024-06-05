import logo from '../../assets/logo2.png';
import logo2 from '../../assets/logo3.png';
import logo3 from '../../assets/logo4.png';
import logo4 from '../../assets/logo5.png';
import iphoneImage from '../../assets/iphone-image2.png';
import iphoneImage2 from '../../assets/iphone-image3.png';

export default function Benefit() {
  return (
    <div className="h-[670px] bg-white flex flex-row justify-between ps-36 pe-20 relative" id="benefit">
      {/* Phone Mockups */}
      <div className="relative mb-0 mt-auto ps-20">
        <img src={iphoneImage} alt="image" />
      </div>

      {/* Content */}
      <div className="relative flex flex-row justify-start  w-[578px] gap-24 pr-20">
        <div className="flex flex-col">
          <div className="text-justify text-zinc-900 text-2xl font-bold font-['Montserrat'] leading-normal pl-5 pt-24">Mengapa harus memilih Aplikasi ini?</div>

          <div class="flex flext-row justify-between pt-24">
            <div class="flex-auto w-80 ...">
              <img src={logo} alt="image" className="w-30 h-16 pl-16 flex flex-row" />
              <div className="text-justify text-zinc-800 text-xl font-semibold font-['Montserrat'] leading-normal "> Kemudahan Akses </div>
              <p className="font-['Montserrat'] text-left text-sm">Kemudahan akses memungkinkan pengguna mengajukan aduan kapan saja dan dari mana saja</p>
            </div>

            <div class="flex-auto w-80 ...">
              <img src={logo2} alt="image" className="w-30 h-16 pl-16 flex flex-row" />
              <div className="text-justify text-zinc-800 text-xl font-semibold font-['Montserrat'] leading-normal "> Penanganan yang Cepat </div>
              <p className="font-['Montserrat'] text-left text-sm">Penanganan cepat meningkatkan respons, efisiensi, dan kepuasan pengguna.</p>
            </div>
          </div>

          <div class="flex flext-row justify-between pt-24">
            <div class="flex-auto w-80 ...">
              <img src={logo3} alt="image" className="w-30 h-16 pl-16 flex flex-row" />
              <div className="text-justify text-zinc-800 text-xl font-semibold font-['Montserrat'] leading-normal "> Keamanan Data </div>
              <p className="font-['Montserrat'] text-left text-sm">Keamanan data melindungi informasi sensitif dari akses, penggunaan, menjaga privasi dan integritas data.</p>
            </div>

            <div class="flex-auto w-80 ...">
              <img src={logo4} alt="image" className="w-30 h-16 pl-16 flex flex-row" />
              <div className="text-justify text-zinc-800 text-xl font-semibold font-['Montserrat'] leading-normal "> Feedback dan Evaluas </div>
              <p className="font-['Montserrat'] text-left text-sm">Feedback dan evaluasi membantu meningkatkan kualitas layanan dan produk dengan mengidentifikasi area yang perlu diperbaiki.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
