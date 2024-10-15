import petikAwal from "./assets/images/petik-awal.png";
import petikAkhir from "./assets/images/petik-akhir.png";
import bgSection2 from "./assets/images/bg-teset1.png";
import ppl from "./assets/images/software 1.png";
import ui from "./assets/images/ui-design 1.png";
import poster from "./assets/images/web-design 1.png";
import kti from "./assets/images/paper 1.png";
import dummy from "./assets/images/dummy.jpeg";
import itech1 from "./assets/images/foto-web-1.png";
import { useEffect } from "react";
import { useState } from "react";
import bgHero from "./assets/images/bg-hero.png";

function App() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Set the target date for the countdown
    const targetDate = new Date("2024-10-20 00:00:00").getTime(); // Example: December 1st, 2024

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      // Calculate time remaining
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Update the state
      setTimeLeft({
        days,
        hours,
        minutes,
        seconds,
      });

      // If the countdown is over, stop the timer
      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
      }
    }, 1000);

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);
  return (
    <div>
      <header className="fixed top-0 w-full z-10">
        <ul className="hidden sm:flex w-[650px] mx-auto rounded-b-lg justify-center items-center gap-6 sm:gap-12 min-h-[68px] bg-white/10 backdrop-blur-sm backdrop-opacity-70">
          <li className="relative after:content-[''] after:w-full after:h-0.5 after:bg-white after:absolute after:-bottom-1 after:left-0 after:transition-all after:duration-300 after:ease-in-out after:transform after:scale-x-[.6]">
            <a href="#beranda" className="font-medium text-white">
              Beranda
            </a>
          </li>
          <li>
            <a
              href="#tentang"
              className="font-light relative after:content-[''] after:w-full after:h-0.5 after:bg-white after:absolute after:-bottom-1 after:left-0 after:transition-all after:duration-300 after:ease-in-out after:transform after:scale-x-0 after:hover:scale-x-[.6] text-white"
            >
              Tentang
            </a>
          </li>
          <li>
            <a
              href="#kategori"
              className="font-light relative after:content-[''] after:w-full after:h-0.5 after:bg-white after:absolute after:-bottom-1 after:left-0 after:transition-all after:duration-300 after:ease-in-out after:transform after:scale-x-0 after:hover:scale-x-[.6] text-white"
            >
              Kategori
            </a>
          </li>
          <li>
            <a
              href="#timeline"
              className="font-light relative after:content-[''] after:w-full after:h-0.5 after:bg-white after:absolute after:-bottom-1 after:left-0 after:transition-all after:duration-300 after:ease-in-out after:transform after:scale-x-0 after:hover:scale-x-[.6] text-white"
            >
              Timeline
            </a>
          </li>
          <li>
            <a
              href="#kontak"
              className="font-light relative after:content-[''] after:w-full after:h-0.5 after:bg-white after:absolute after:-bottom-1 after:left-0 after:transition-all after:duration-300 after:ease-in-out after:transform after:scale-x-0 after:hover:scale-x-[.6] text-white"
            >
              Kontak
            </a>
          </li>
        </ul>

        <div className="flex sm:hidden items-center justify-between min-h-[68px] bg-white/10 backdrop-blur-sm backdrop-opacity-70">
          <h1 className="sm:hidden font-bold text-white text-lg ml-6 font-Sarabun">
            ITECH POLIBAN COMPETITION
          </h1>
          <div className="sm:hidden z-10 mr-6">
            <input type="checkbox" id="menu-toggle" className="hidden" />
            <label
              for="menu-toggle"
              id="menu-toggle"
              className="btn btn-square btn-ghost cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
            <div
              id="menu"
              className="dropdown-content absolute right-0 mt-3 p-2 shadow bg-base-100 rounded-box w-full hidden z-10"
            >
              <ul className="flex flex-col items-center gap-6 py-2 z-10">
                <li>
                  <a
                    href="/"
                    className="relative text-xl after:content-[''] after:w-full after:h-0.5 after:bg-white after:absolute after:-bottom-2 after:left-0 after:transition-all after:duration-300 after:ease-in-out after:transform after:scale-x-75 z-30"
                  >
                    Beranda
                  </a>
                </li>
                <li>
                  <a
                    href="#tentang"
                    className="relative text-xl after:content-[''] after:w-full after:h-0.5 after:bg-white after:absolute after:-bottom-2 after:left-0 after:transition-all after:duration-300 after:ease-in-out after:transform after:scale-x-0 after:hover:scale-x-75  z-30"
                  >
                    Tentang
                  </a>
                </li>
                <li>
                  <a
                    href="#kategori"
                    className="relative text-xl after:content-[''] after:w-full after:h-0.5 after:bg-white after:absolute after:-bottom-2 after:left-0 after:transition-all after:duration-300 after:ease-in-out after:transform after:scale-x-0 after:hover:scale-x-75"
                  >
                    Kategori
                  </a>
                </li>
                <li>
                  <a
                    href="#timeline"
                    className="relative text-xl after:content-[''] after:w-full after:h-0.5 after:bg-white after:absolute after:-bottom-2 after:left-0 after:transition-all after:duration-300 after:ease-in-out after:transform after:scale-x-0 after:hover:scale-x-75"
                  >
                    Timeline
                  </a>
                </li>
                <li>
                  <a
                    href="#kontak"
                    className="relative text-xl after:content-[''] after:w-full after:h-0.5 after:bg-white after:absolute after:-bottom-2 after:left-0 after:transition-all after:duration-300 after:ease-in-out after:transform after:scale-x-0 after:hover:scale-x-75"
                  >
                    Kontak
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      <section className="relative">
        <div className="absolute w-full h-full z-0">
          <img
            src={bgHero}
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="absolute bg-black/100 w-full h-full z-0 inset-0 bg-gradient-to-l from-black/80 via-[#8ac6ffa1] to-black/80   opacity-90"></div>
        <div className="pt-[115px] pb-[74px] bg-[#111524] flex flex-col items-center justify-center">
          <div className="flex gap-[6px] z-0">
            <img
              src="src/assets/images/svg/logo-poliban.svg"
              alt="Logo Poliban"
              className="w-16 h-16"
            />
            <img
              src="src/assets/images/svg/logo-itech.svg"
              alt="Logo iTechPoliban"
              className="w-16 h-16"
            />
          </div>
          <div className="relative">
            <h1
              className="font-bold font-Tommorow text-[40px] sm:text-[64px] text-center px-2"
              id="heading-hero-stroke"
            >
              ITECH POLIBAN <br /> COMPETITION 2024
            </h1>
            <h1
              className="font-bold font-Tommorow text-[40px] sm:text-[64px] text-center absolute top-[5px] left-[9px] text-white"
              id="heading-hero"
            >
              ITECH POLIBAN COMPETITION 2024
            </h1>
          </div>
          <p className="font-Sarabun text-lg sm:text-xl text-center text-white mt-1 z-0">
            Ayo, tunjukkan kreativitas dan inovasimu! <br />{" "}
            <span className="font-bold">
              Daftarkan tim atau dirimu sekarang
            </span>{" "}
            dan buktikan bahwa kalian <br /> bisa membuat perubahan!
          </p>
          <div className="flex gap-[14px] mt-6 z-20">
            <div className="flex flex-col items-center justify-center gap-2  font-Sarabun">
              <span className="text-[#4B6C8C] font-medium text-[24px] sm:text-[32px] bg-white p-4 rounded-xl countdown">
                <span style={{ "--value": timeLeft.days }}></span>
              </span>
              <span className="font-medium text-[13px] text-white">Hari</span>
            </div>
            <div className="mt-5">
              <svg
                width="10"
                height="28"
                viewBox="0 0 10 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="5" cy="5" r="5" fill="white" />
                <circle cx="5" cy="23" r="5" fill="white" />
              </svg>
            </div>
            <div className="flex flex-col items-center justify-center gap-2  font-Sarabun">
              <span className="countdown text-[#4B6C8C] font-medium text-[24px] sm:text-[32px] bg-white p-4 rounded-xl">
                <span style={{ "--value": timeLeft.hours }}></span>
              </span>
              <span className="font-medium text-[13px] text-white">Jam</span>
            </div>
            <div className="mt-5">
              <svg
                width="10"
                height="28"
                viewBox="0 0 10 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="5" cy="5" r="5" fill="white" />
                <circle cx="5" cy="23" r="5" fill="white" />
              </svg>
            </div>
            <div className="flex flex-col items-center justify-center gap-2  font-Sarabun">
              <span className="countdown text-[#4B6C8C] font-medium text-[24px] sm:text-[32px] bg-white p-4 rounded-xl">
                <span style={{ "--value": timeLeft.minutes }}></span>
              </span>
              <span className="font-medium text-[13px] text-white">Menit</span>
            </div>
            <div className="mt-5">
              <svg
                width="10"
                height="28"
                viewBox="0 0 10 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="5" cy="5" r="5" fill="white" />
                <circle cx="5" cy="23" r="5" fill="white" />
              </svg>
            </div>
            <div className="flex flex-col items-center justify-center gap-2  font-Sarabun">
              <span className="countdown text-[#4B6C8C] font-medium text-[24px] sm:text-[32px] bg-white p-4 rounded-xl">
                <span style={{ "--value": timeLeft.seconds }}></span>
              </span>
              <span className="font-medium text-[13px] text-white">Detik</span>
            </div>
          </div>
          <div className="font-Sarabun mt-[22px] flex gap-[10px] z-20">
            <a
              href="#"
              className="btn px-[14px] py-[10px] bg-[#FFB800] border-none shadow-md hover:bg-[#ffc936] text-white rounded-lg"
            >
              Download Panduan
            </a>
            <a
              href="#"
              className="btn bg-[#8AC7FF] px-[34px] py-[10px] text-white rounded-lg border-none shadow-md hover:bg-[#81c2ff]"
            >
              Mau Daftar
            </a>
          </div>
        </div>
      </section>
      {/* section 2 */}
      <section>
        <div
          className="bg-cover bg-center h-full"
          style={{ backgroundImage: `url(${bgSection2})` }}
        >
          {/* heading tagline */}
          <div className="pt-10 relative">
            <img
              src={petikAwal}
              className="absolute left-[258px] top-[34px] font-bold text-[32px] text-black"
              alt=""
            />
            <h2 className="font-Merriweather font-light italic text-[32px] sm:text-base md:text-base text-white text-center">
              Peran Pemuda dalam Menjaga Keberagaman <br />
              Budaya di
              <span className="font-bold">
                {" "}
                Era Kecerdasan Buatan
              </span>
            </h2>
            <img
              src={petikAkhir}
              className="absolute right-[340px] top-[116px] font-bold text-[32px] text-black"
              alt=""
            />
          </div>

          {/* heading 2 */}
          <div className="mt-24 flex w-full relative justify-center gap-8">
            {/* kiri */}
            <div className="ml-24 w-1/2 flex flex-col gap-y-8">
              <h2 className="font-Sarabun font-semibold text-7xl text-white">
                <span className="bg-gradient-to-r from-[#FFB800] to-[#8AC7FF] bg-clip-text text-transparent opacity-87">
                  ITECH{" "}
                </span>
                Poliban <br /> Competition
              </h2>
              <div>
                <p className="text-white font-Sarabun text-lg">
                  Komunitas ITECH Politeknik Negeri Banjarmasin mengadakan
                  sebuah acara kompetisi bergengsi yang mencakup berbagai
                  kategori lomba, ditujukan khusus bagi siswa dan mahasiswa
                  untuk beradu kreativitas dan inovasi melalui karya-karya
                  terbaik mereka.
                </p>
                <p className="text-white font-Sarabun text-lg">
                  Kompetisi ini bertujuan untuk mendorong generasi muda dalam
                  mengembangkan potensi mereka di bidang teknologi, seni, dan
                  ilmu pengetahuan. Kompetisi ini diharapkan mampu melahirkan
                  ide-ide baru yang dapat memberikan kontribusi positif.
                </p>
              </div>
            </div>
            {/* kanan  */}
            <div className="text-white text-4xl w-1/2">
              <div className="relative">
                <img
                  src={itech1}
                  alt="dummy 1"
                  className="relative z-0 left-10 top-14 -rotate-2 rounded-md"
                />
                <img
                  src={itech1}
                  alt="dummy 2"
                  className="relative z-20 left-72 bottom-[70px] rotate-12 rounded-md"
                />
                <img
                  src={itech1}
                  alt="dummy 3"
                  className="relative z-10 bottom-32 -rotate-6 left-28 rounded-md"
                />
              </div>
            </div>
          </div>

          {/* heading 3 */}
          <div className="container mx-auto py-12">
            <h2 className="text-5xl font-bold font-Sarabun text-white text-center mb-8">
              Kategori Lomba
            </h2>

            <div className="flex justify-center gap-6">
              {/* <!-- Card 1 --> */}
              <div className="w-56 h-64 bg-white flex flex-col items-center justify-center rounded-lg">
                <div className="p-4 flex flex-col gap-y-7 items-center text-center">
                  <img
                    src={ppl}
                    alt="Pengembangan Perangkat Lunak"
                    className="w-24 h-24 mb-4"
                  />
                  <h3 className="font-medium text-xl font-Sarabun text-[#111524]">
                    Pengembangan <br /> Perangkat Lunak
                  </h3>
                </div>
              </div>

              {/* <!-- Card 2 --> */}
              <div className="w-56 h-64 bg-white flex flex-col items-center justify-center rounded-lg">
                <div className="p-4 flex flex-col gap-y-7 items-center text-center">
                  <img src={ui} alt="UI/UX" className="w-24 h-24 mb-4" />
                  <h3 className="font-medium text-xl font-Sarabun text-[#111524]">
                    UI/UX
                  </h3>
                </div>
              </div>

              {/* <!-- Card 3 --> */}
              <div className="w-56 h-64 bg-white flex flex-col items-center justify-center rounded-lg">
                <div className="p-4 flex flex-col gap-y-7 items-center text-center">
                  <img src={poster} alt="Poster" className="w-24 h-24 mb-4" />
                  <h3 className="font-medium text-xl font-Sarabun text-[#111524]d">
                    Poster
                  </h3>
                </div>
              </div>

              {/* <!-- Card 4 --> */}
              <div className="w-56 h-64 bg-white flex flex-col items-center justify-center rounded-lg">
                <div className="p-4 flex flex-col gap-y-7 items-center text-center">
                  <img
                    src={kti}
                    alt="Karya Tulis Ilmiah"
                    className="w-24 h-24 mb-4"
                  />
                  <h3 className="font-medium text-xl font-Sarabun text-[#111524]">
                    Karya Tulis Ilmiah
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
