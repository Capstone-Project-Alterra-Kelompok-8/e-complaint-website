import React, { useState } from "react";
import "flowbite";

const Content = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    "https://images.unsplash.com/photo-1494783367193-149034c05e8f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1511497584788-876760111969?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  const handleChange = (index) => {
    setCurrentImage(index);
  };

  return (
    <>
      <div className="lg:w-[500px] h-[500px] md:w-full bg-[#E6E0E9] p-2 rounded-lg drop-shadow-lg flex flex-col">
        <div className="flex-1 mb-2 overflow-hidden rounded-lg">
          <img
            className="object-cover w-full h-full"
            src={images[currentImage]}
            alt={`Gambar ${currentImage + 1}`}
          />
        </div>

        <div className="relative w-full" data-carousel="static">
          <div className="relative h-32 overflow-hidden rounded-lg">
            {images.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 duration-700 ease-in-out transform ${
                  index === currentImage ? "translate-x-0" : "translate-x-full"
                }`}
                data-carousel-item
              >
                <img
                  src={image}
                  className="block w-full h-full object-contain"
                  alt={`Gambar ${index + 1}`}
                  onClick={() => handleChange(index)}
                />
              </div>
            ))}
          </div>

          <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-3 left-1/2">
            {images.map((_, index) => (
              <button
                key={index}
                type="button"
                className={`w-3 h-3 rounded-full ${
                  index === currentImage ? "bg-blue-500" : "bg-gray-300"
                }`}
                aria-current={index === currentImage ? "true" : "false"}
                aria-label={`Slide ${index + 1}`}
                data-carousel-slide-to={index}
                onClick={() => handleChange(index)}
              />
            ))}
          </div>

          <button
            type="button"
            className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-prev
            onClick={() =>
              handleChange(
                currentImage === 0 ? images.length - 1 : currentImage - 1
              )
            }
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg
                className="w-4 h-4 text-white dark:text-gray-800"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 1 1 5l4 4"
                />
              </svg>
              <span className="sr-only">Previous</span>
            </span>
          </button>
          <button
            type="button"
            className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-next
            onClick={() => handleChange((currentImage + 1) % images.length)}
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg
                className="w-4 h-4 text-white dark:text-gray-800"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <span className="sr-only">Next</span>
            </span>
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-2 w-full h-auto lg:w-[80%] lg:h-[500px]">
        <section className="bg-[#E6E0E9] py-1 px-4 rounded-t-lg">
          <h6>Pengadu</h6>
          <p>Anonymous</p>
        </section>
        <section className="w-full">
          <div className="w-full flex flex-col lg:flex-row gap-2">
            <section className="bg-[#E6E0E9] py-1 px-4 rounded-t-lg w-full">
              <h6>Tanggal Aduan</h6>
              <p>G5102</p>
            </section>
            <section className="bg-[#E6E0E9] py-1 px-4 rounded-t-lg w-full">
              <h6>Lokasi</h6>
              <p>Kab Banten</p>
            </section>
          </div>
        </section>
        <section className="bg-[#E6E0E9] py-1 px-4 rounded-t-lg w-full">
          <h6>Alamat</h6>
          <p>Detail Aduan</p>
        </section>
        <section className="bg-[#E6E0E9] py-1 px-4 rounded-t-lg w-full h-full">
          <h6>Aduan</h6>
          <p>Detail Aduan</p>
        </section>
      </div>
    </>
  );
};

export default Content;
