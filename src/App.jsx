import petikAwal from "./assets/images/petik-awal.png";
import petikAkhir from "./assets/images/petik-akhir.png";
import bgSection2 from "./assets/images/bg-section-2.png";
import { useEffect } from "react";
import { useState } from "react";
import bgHero from "./assets/images/bg-hero.png";
import poster from "./assets/images/svg/poster.svg";
import ppl from "./assets/images/svg/ppl.svg";
import kti from "./assets/images/svg/kti.svg";
import uiUx from "./assets/images/svg/ui-ux.svg";
import pplBanner from "./assets/images/ppl-banner.jpg";
import uiUxBanner from "./assets/images/ui-ux-banner.jpg";
import posterBanner from "./assets/images/poster-banner.jpg";
import ktiBanner from "./assets/images/kti-banner.jpg";

const kategoris = [
  {
    id: 1,
    name: "Pengembangan Perangkat Lunak",
    image: pplBanner,
    link: "http://s.id/REG-IPC-2024",
  },
  {
    id: 2,
    name: "UI/UX",
    image: uiUxBanner,
    link: "http://s.id/REG-IPC-2024",
  },
  {
    id: 3,
    name: "Poster",
    image: posterBanner,
    link: "http://s.id/REG-IPC-2024",
  },
  {
    id: 4,
    name: "Karya Tulis Ilmiah",
    image: ktiBanner,
    link: "http://s.id/REG-IPC-2024",
  },
];

function App() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [selectedKategori, setSelectedKategori] = useState(null);

  const openModal = (kategori) => {
    setSelectedKategori(kategori);
    document.getElementById("my_modal_3").showModal();
  };

  useEffect(() => {
    // Set the target date for the countdown
    const targetDate = new Date("2024-11-16 00:00:00").getTime(); // Example: December 1st, 2024

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
          <div class="sm:hidden z-10 mr-6">
            <input type="checkbox" id="menu-toggle" class="hidden" />
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
          className="bg-cover bg-center h-screen"
          style={{ backgroundImage: `url(${bgSection2})` }}
        >
          <div className="pt-10 relative">
            <img
              src={petikAwal}
              className="absolute left-[258px] top-[34px] font-bold text-[32px] text-black"
              alt=""
            />
            <h2 className="font-Merriweather font-light italic text-[32px] text-white text-center">
              Peran Pemuda dalam Menjaga Keberagaman <br />
              Budaya di
              <span className="font-bold"> Era Kecerdasan Buatan</span>
            </h2>
            <img
              src={petikAkhir}
              className="absolute right-[340px] top-[116px] font-bold text-[32px] text-black"
              alt=""
            />
          </div>
        </div>
      </section>
      <section>
        <div className="mx-10 md:mx-[105px]">
          <h2 className="font-Sarabun font-semibold text-[36px] sm:text-[46px] md:text-[64px] text-white text-center relative after:content-[''] after:w-full after:h-0.5 after:bg-gradient-to-r after:from-[#FFB800] after:to-[#8AC7FF] after:absolute after:-bottom-3 after:left-0 after:transition-all after:duration-300 after:ease-in-out after:transform after:scale-x-[.12] mb-10 mt-5">
            Kategori Lomba
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-14 my-14">
            <div
              onClick={() => openModal(kategoris[0])}
              className="bg-white rounded-lg flex flex-col items-center justify-center gap-4 py-10 transition-all cursor-pointer hover:shadow-[0px_12px_40.6px_-24px_#8AC7FF,0px_12px_40.7px_-18px_#8AC7FF]"
            >
              <img src={ppl} alt="" className="min-h-[110px]" />
              <p className="font-Sarabun font-medium text-2xl text-[#111524] text-center px-2">
                Pengembangan Perangkat Lunak
              </p>
            </div>
            <div
              onClick={() => openModal(kategoris[1])}
              className="bg-white rounded-lg flex flex-col items-center justify-center gap-4 py-10 transition-all cursor-pointer hover:shadow-[0px_12px_40.6px_-24px_#8AC7FF,0px_12px_40.7px_-18px_#8AC7FF]"
            >
              <img src={uiUx} alt="" className="min-h-[110px]" />
              <p className="font-Sarabun font-medium text-2xl text-[#111524] text-center px-2">
                UI/UX
              </p>
            </div>
            <div
              onClick={() => openModal(kategoris[2])}
              className="bg-white rounded-lg flex flex-col items-center justify-center gap-4 py-10 transition-all cursor-pointer hover:shadow-[0px_12px_40.6px_-24px_#8AC7FF,0px_12px_40.7px_-18px_#8AC7FF]"
            >
              <img src={poster} alt="" className="min-h-[110px]" />
              <p className="font-Sarabun font-medium text-2xl text-[#111524] text-center px-2">
                Poster
              </p>
            </div>
            <div
              onClick={() => openModal(kategoris[3])}
              className="bg-white rounded-lg flex flex-col items-center justify-center gap-4 py-10 transition-all cursor-pointer hover:shadow-[0px_12px_40.6px_-24px_#8AC7FF,0px_12px_40.7px_-18px_#8AC7FF]"
            >
              <img src={kti} alt="" className="min-h-[110px]" />
              <p className="font-Sarabun font-medium text-2xl text-[#111524] text-center px-2">
                Karya Tulis Ilmiah
              </p>
            </div>
          </div>
        </div>
      </section>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-2xl font-Sarabun mb-4">
            {selectedKategori?.name}
          </h3>
          <img src={selectedKategori?.image} alt="" />
          <a
            href={selectedKategori?.link}
            target="_blank"
            class="btn text-white bg-green-500 hover:bg-green-600 font-medium text-xl w-full mt-4"
          >
            Daftar
          </a>
        </div>
      </dialog>
    </div>
  );
}

export default App;
