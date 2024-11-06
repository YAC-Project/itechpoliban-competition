import petikAwal from "./assets/images/petik-awal.png";
import petikAkhir from "./assets/images/petik-akhir.png";
import bgSection2 from "./assets/images/bg-teset1.png";
import kegiatan1 from "./assets/images/kegiatan.png";
import kegiatan2 from "./assets/images/kegiatan-2.jpeg";
import kegiatan3 from "./assets/images/kegiatan-3.jpg";
import { useEffect } from "react";
import { useState } from "react";
import bgHero from "./assets/images/bg-hero.png";
import poster from "./assets/images/svg/poster.svg";
import ppl from "./assets/images/svg/ppl.svg";
import kti from "./assets/images/svg/kti.svg";
import uiUx from "./assets/images/svg/ui-ux.svg";
import posterBanner from "./assets/images/poster-banner.jpeg";
import logoItech from "./assets/images/svg/logo-itech.svg";
import logoPoliban from "./assets/images/svg/logo-poliban.svg";
import discordIcon from "./assets/images/svg/discord-icon.svg";
import githubIcon from "./assets/images/svg/github-icon.svg";
import instagramIcon from "./assets/images/svg/instagram-icon.svg";
import whatsappIcon from "./assets/images/svg/whatsapp-icon.svg";
import piala from "./assets/images/svg/piala.svg";
import sertifikat from "./assets/images/svg/sertifikat.svg";
import portfolio from "./assets/images/svg/portfolio.svg";
import uangTunai from "./assets/images/svg/uang-tunai.svg";

const kategoris = [
  {
    id: 1,
    name: "Poster",
    image: posterBanner,
    link_daftar: "http://s.id/REG-IPC-2024",
    link_pedoman:
      "https://drive.google.com/drive/folders/1h2RAoEjVZO3TyQ7CIKLo0fxWMcialZsi?usp=drive_link",
  },
  {
    id: 2,
    name: "Pengembangan Perangkat Lunak",
    image: null,
    link_daftar: "http://s.id/REG-IPC-TIM-2024",
    link_pedoman: "http://s.id/REG-IPC-TIM-2024",
  },
  {
    id: 3,
    name: "UI/UX",
    image: null,
    link_daftar: "http://s.id/REG-IPC-TIM-2024",
    link_pedoman: "http://s.id/REG-IPC-TIM-2024",
  },
  {
    id: 4,
    name: "Karya Tulis Ilmiah",
    image: null,
    link_daftar: "http://s.id/REG-IPC-TIM-2024",
    link_pedoman: "http://s.id/REG-IPC-TIM-2024",
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
  const hash = window.location.hash;

  const openModal = (kategori) => {
    setSelectedKategori(kategori);
    document.getElementById("my_modal_3").showModal();
  };

  useEffect(() => {
    // Set the target date for the countdown
    const targetDate = new Date("2024-11-08 23:59:59").getTime();

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
          <li>
            <a
              href="#beranda"
              className="relative after:content-[''] after:w-full after:h-0.5 after:bg-white after:absolute after:-bottom-1 after:left-0 after:transition-all after:duration-300 after:ease-in-out after:transform after:scale-x-[.6] font-medium text-white"
            >
              Beranda
            </a>
          </li>
          <li>
            <a
              href="#tentang"
              className="relative after:content-[''] after:w-full after:h-0.5 after:bg-white after:absolute after:-bottom-1 after:left-0 after:transition-all after:duration-300 after:ease-in-out after:transform after:scale-x-0 after:hover:scale-x-[.6] after:hover:font-medium font-light text-white"
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
              className="dropdown-content absolute right-0 mt-3 p-2 shadow bg-base-100 rounded-b-2xl w-full hidden z-10"
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
      <section id="beranda" className="relative">
        <div className="absolute w-full h-full z-0">
          <img
            src={bgHero}
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="absolute bg-black/100 w-full h-full z-0 inset-0 bg-gradient-to-l from-black/80 via-[#8ac6ffa1] to-black/80  opacity-90"></div>
        <div className="pt-[115px] pb-[74px] bg-[#111524] flex flex-col items-center justify-center mx-4 md:mx-0">
          <div className="flex gap-[6px] z-0">
            <img src={logoPoliban} alt="Logo Poliban" className="w-16 h-16" />
            <img
              src={logoItech}
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
              href="#kategori"
              className="btn px-[14px] py-[10px] bg-[#FFB800] border-none shadow-md hover:bg-[#ffc936] text-white rounded-lg"
            >
              Download Panduan
            </a>
            <a
              href="#kategori"
              className="btn bg-[#8AC7FF] px-[34px] py-[10px] text-white rounded-lg border-none shadow-md hover:bg-[#81c2ff]"
            >
              Mau Daftar
            </a>
          </div>
        </div>
      </section>
      {/* section 2 */}
      <section id="tentang" className="scroll-mt-16">
        <div
          className="bg-cover bg-center h-full relative"
          style={{ backgroundImage: `url(${bgSection2})` }}
        >
          {/* heading tagline */}
          <div className="pt-10 relative">
            <div className="flex justify-center">
              <h2 className="inline-block font-Merriweather font-light italic text-base md:text-2xl lg:text-[32px] text-white text-center relative">
                <img
                  src={petikAwal}
                  className="absolute w-5 h-5 -left-7 -top-2 font-bold text-black"
                  alt=""
                />
                Peran Pemuda dalam Menjaga Keberagaman <br />
                Budaya di
                <span className="font-bold"> Era Kecerdasan Buatan</span>
                <img
                  src={petikAkhir}
                  className="absolute w-5 h-5 right-4 -bottom-2 md:right-8 lg:right-14 font-bold text-black"
                  alt=""
                />
              </h2>
            </div>
          </div>

          {/* heading 2 */}
          <div className="mt-24 flex w-full relative justify-center gap-8">
            {/* kiri */}
            <div className="mx-10 md:lg-0 lg:ml-24 w-full md:w-1/2 flex flex-col gap-y-8">
              <h2 className="font-Sarabun font-semibold text-[40px] lg:text-[64px] text-white">
                <span className="bg-gradient-to-r from-[#FFB800] to-[#8AC7FF] bg-clip-text text-transparent opacity-87">
                  ITECH{" "}
                </span>
                Poliban <br /> Competition
              </h2>
              <div>
                <p className="text-white font-Sarabun text-lg text-justify">
                  Komunitas ITECH Politeknik Negeri Banjarmasin mengadakan
                  sebuah acara kompetisi bergengsi yang mencakup berbagai
                  kategori lomba, ditujukan khusus bagi siswa dan mahasiswa
                  untuk beradu kreativitas dan inovasi melalui karya-karya
                  terbaik mereka.
                </p>
                <p className="text-white font-Sarabun text-lg text-justify">
                  Kompetisi ini bertujuan untuk mendorong generasi muda dalam
                  mengembangkan potensi mereka di bidang teknologi, seni, dan
                  ilmu pengetahuan. Kompetisi ini diharapkan mampu melahirkan
                  ide-ide baru yang dapat memberikan kontribusi positif.
                </p>
              </div>
            </div>
            {/* kanan  */}
            <div className="hidden lg:block text-white text-4xl w-1/2 overflow-hidden">
              <div className="relative">
                <img
                  src={kegiatan1}
                  alt="Kegiatan 1"
                  className="relative z-0 left-10 top-14 -rotate-2 w-[313px] h-[183px] object-cover"
                />
                <img
                  src={kegiatan2}
                  alt="Kegiatan 2"
                  className="relative z-20 left-72 bottom-[70px] rotate-12 w-[313px] h-[183px] object-cover"
                />
                <img
                  src={kegiatan3}
                  alt="Kegiatan 3"
                  className="relative z-10 bottom-32 -rotate-6 left-28 w-[313px] h-[183px] object-cover"
                />
              </div>
            </div>
          </div>
          <section id="kategori" className="z-10 scroll-mt-16">
            <div className="mt-20 md:mt-0 mx-10 md:mx-[105px] md:pb-4">
              <h2 className="font-Sarabun font-semibold text-[32px] sm:text-[46px] md:text-[64px] text-white text-center relative after:content-[''] after:w-full after:h-0.5 after:bg-gradient-to-r after:from-[#FFB800] after:to-[#8AC7FF] after:absolute after:-bottom-3 after:left-0 after:transition-all after:duration-300 after:ease-in-out after:transform after:scale-x-[.12] mb-10 mt-5">
                Kategori Lomba
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-14 my-14">
                <div
                  onClick={() => openModal(kategoris[0])}
                  className="bg-white rounded-lg flex flex-col items-center justify-center gap-4 py-10 transition-all cursor-pointer hover:shadow-[0px_12px_40.6px_-24px_#8AC7FF,0px_12px_40.7px_-18px_#8AC7FF]"
                >
                  <img src={poster} alt="Poster" className="min-h-[110px]" />
                  <p className="font-Sarabun font-medium text-2xl text-[#111524] text-center px-2">
                    Poster
                  </p>
                </div>
                <div
                  onClick={() => openModal(kategoris[1])}
                  className="bg-white rounded-lg flex flex-col items-center justify-center gap-4 py-10 transition-all cursor-pointer hover:shadow-[0px_12px_40.6px_-24px_#8AC7FF,0px_12px_40.7px_-18px_#8AC7FF]"
                >
                  <img src={uiUx} alt="UI/UX" className="min-h-[110px]" />
                  <p className="font-Sarabun font-medium text-2xl text-[#111524] text-center px-2">
                    UI/UX
                  </p>
                </div>
                <div
                  onClick={() => openModal(kategoris[2])}
                  className="bg-white rounded-lg flex flex-col items-center justify-center gap-4 py-10 transition-all cursor-pointer hover:shadow-[0px_12px_40.6px_-24px_#8AC7FF,0px_12px_40.7px_-18px_#8AC7FF]"
                >
                  <img
                    src={ppl}
                    alt="Pengembangan Perangkat Lunak"
                    className="min-h-[110px]"
                  />
                  <p className="font-Sarabun font-medium text-2xl text-[#111524] text-center px-2">
                    Pengembangan Perangkat Lunak
                  </p>
                </div>

                <div
                  onClick={() => openModal(kategoris[3])}
                  className="bg-white rounded-lg flex flex-col items-center justify-center gap-4 py-10 transition-all cursor-pointer hover:shadow-[0px_12px_40.6px_-24px_#8AC7FF,0px_12px_40.7px_-18px_#8AC7FF]"
                >
                  <img
                    src={kti}
                    alt="Karya Tulis Ilmiah"
                    className="min-h-[110px]"
                  />
                  <p className="font-Sarabun font-medium text-2xl text-[#111524] text-center px-2">
                    Karya Tulis Ilmiah
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section id="penghargaan" className="z-10 scroll-mt-16">
            <div className="mt-20 md:mt-0 mx-10 md:mx-[105px] pb-10">
              <h2 className="font-Sarabun font-semibold text-[32px] sm:text-[46px] md:text-[64px] text-white text-center relative after:content-[''] after:w-full after:h-0.5 after:bg-gradient-to-r after:from-[#FFB800] after:to-[#8AC7FF] after:absolute after:-bottom-3 after:left-0 after:transition-all after:duration-300 after:ease-in-out after:transform after:scale-x-[.12] mb-10 mt-5">
                Bentuk Penghargaan
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-14">
                <div className="bg-white rounded-lg flex flex-col items-center justify-center gap-3 py-10 transition-all cursor-pointer hover:shadow-[0px_12px_40.6px_-24px_#8AC7FF,0px_12px_40.7px_-18px_#8AC7FF]">
                  <img src={piala} alt="Piala" className="h-[141px]" />
                  <p className="font-Sarabun font-bold text-3xl text-[#0F1113] text-center px-2">
                    Piala
                  </p>
                  <p className="text-[#0F1113] text-center px-4 md:px-2 text-sm">
                    Bagi Pemenang akan mendapatkan Piala pada masing-masing
                    kategori lomba
                  </p>
                </div>
                <div className="bg-white rounded-lg flex flex-col items-center justify-center gap-3 py-10 transition-all cursor-pointer hover:shadow-[0px_12px_40.6px_-24px_#8AC7FF,0px_12px_40.7px_-18px_#8AC7FF]">
                  <img
                    src={sertifikat}
                    alt="Sertifikat"
                    className="h-[141px]"
                  />
                  <p className="font-Sarabun font-bold text-3xl text-[#0F1113] text-center px-2">
                    Sertifikat
                  </p>
                  <p className="text-[#0F1113] text-center px-4 md:px-2 text-sm">
                    Peserta akan menerima sertifikat sebagai bukti partisipasi
                    dalam lomba.
                  </p>
                </div>
                <div className="bg-white rounded-lg flex flex-col items-center justify-center gap-3 py-10 transition-all cursor-pointer hover:shadow-[0px_12px_40.6px_-24px_#8AC7FF,0px_12px_40.7px_-18px_#8AC7FF]">
                  <img src={uangTunai} alt="Uang Tunai" className="h-[141px]" />
                  <p className="font-Sarabun font-bold text-3xl text-[#0F1113] text-center px-2">
                    Uang Tunai
                  </p>
                  <p className="text-[#0F1113] text-center px-4 md:px-2 text-sm">
                    Bagi Pemenang akan mendapatkan Uang Tunai pada masing-masing
                    kategori lomba
                  </p>
                </div>
                <div className="bg-white rounded-lg flex flex-col items-center justify-center gap-3 py-10 transition-all cursor-pointer hover:shadow-[0px_12px_40.6px_-24px_#8AC7FF,0px_12px_40.7px_-18px_#8AC7FF]">
                  <img src={portfolio} alt="Portofolio" className="h-[141px]" />
                  <p className="font-Sarabun font-bold text-3xl text-[#0F1113] text-center px-2">
                    Portofolio
                  </p>
                  <p className="text-[#0F1113] text-center px-4 md:px-2 text-sm">
                    Tak cuma pengalaman yang didapat, peserta juga bisa
                    menambahkan karyanya menjadi Portofolio
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>

      <section id="timeline" className="scroll-mt-16">
        <div className="mt-10 mx-4 md:mx-0">
          <h2 className="font-Sarabun font-semibold text-[36px] sm:text-[46px] md:text-[64px] text-white text-center relative after:content-[''] after:w-full after:h-0.5 after:bg-gradient-to-r after:from-[#FFB800] after:to-[#8AC7FF] after:absolute after:-bottom-3 after:left-0 after:transition-all after:duration-300 after:ease-in-out after:transform after:scale-x-[.08] mb-10 mt-5">
            Timeline
          </h2>
          <div className="my-10">
            <div>
              <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                <li>
                  <div className="timeline-middle"></div>
                  <div className="timeline-start mb-10 md:text-end"></div>
                  <hr
                    className="rounded-t-[5px] rounded-b-none ml-4 md:ml-0 bg-[#FFB800]"
                    style={{
                      width: "23px",
                      height: "149px",
                    }}
                  />
                </li>
                <li className="font-Sarabun">
                  <hr />
                  <div className="timeline-middle">
                    <div className="w-[58px] h-[58px] bg-[#FFB800] rounded-full -mt-4 animate-kedapKedip"></div>
                  </div>
                  <div className="timeline-end mb-10 -mt-20 ml-4">
                    <h3 className="text-[#FFB800] font-semibold text-[32px]">
                      Pendaftaran
                    </h3>
                    <p className="text-xl text-white font-medium italic">
                      Desain Poster <br />{" "}
                      <span className="font-light not-italic">
                        14 Oktober - 08 November 2024
                      </span>
                    </p>
                  </div>
                  <hr
                    className="rounded-none -mt-2 rounded-b-none bg-[#E4E4E4]"
                    style={{
                      width: "23px",
                      height: "149px",
                      zIndex: -1,
                    }}
                  />
                </li>
                <li className="font-Sarabun">
                  <hr />
                  <div className="timeline-middle">
                    <div className="w-[58px] h-[58px] bg-[#E4E4E4] rounded-full -mt-4"></div>
                  </div>
                  <div className="timeline-start mb-10 -mt-20 mr-4">
                    <h3 className="text-[#FFB800] font-semibold text-[32px] -mt-28 md:-mt-0 ml-3 md:ml-0">
                      Pengumuman Juara
                    </h3>
                    <p className="text-xl text-white font-medium italic ml-3 md:ml-0">
                      Desain Poster <br />{" "}
                      <span className="font-light not-italic">
                        09 November 2024
                      </span>
                    </p>
                  </div>
                  <hr
                    className="rounded-none -mt-2 rounded-b-none bg-[#E4E4E4]"
                    style={{
                      width: "23px",
                      height: "149px",
                      zIndex: -1,
                    }}
                  />
                </li>
                <li className="font-Sarabun">
                  <hr />
                  <div className="timeline-middle">
                    <div className="w-[58px] h-[58px] bg-[#E4E4E4] rounded-full -mt-4"></div>
                  </div>
                  <div className="timeline-end mb-10 -mt-20 ml-4">
                    <h3 className="text-[#FFB800] font-semibold text-[32px]">
                      Pendaftaran
                    </h3>
                    <p className="text-xl text-white font-medium italic">
                      Karya Tulis Ilmiah, UI/UX, PPL <br />{" "}
                      <span className="font-light not-italic">
                        14 Oktober - 10 November 2024
                      </span>
                    </p>
                  </div>
                  <hr
                    className="rounded-none -mt-2 rounded-b-none bg-[#E4E4E4]"
                    style={{
                      width: "23px",
                      height: "149px",
                      zIndex: -1,
                    }}
                  />
                </li>
                <li className="font-Sarabun">
                  <hr />
                  <div className="timeline-middle">
                    <div className="w-[58px] h-[58px] bg-[#E4E4E4] rounded-full -mt-4"></div>
                  </div>
                  <div className="timeline-start mb-10 -mt-20 mr-4">
                    <h3 className="text-[#FFB800] font-semibold text-[32px] -mt-28 ml-3 md:-mt-0 md:ml-0">
                      Pengumuman Finalis
                    </h3>
                    <p className="text-xl text-white font-medium italic ml-3 md:ml-0">
                      Karya Tulis Ilmiah, UI/UX, PPL <br />{" "}
                      <span className="font-light not-italic">
                        17 November 2024
                      </span>
                    </p>
                  </div>
                  <hr
                    className="rounded-none -mt-2 rounded-b-none bg-[#E4E4E4]"
                    style={{
                      width: "23px",
                      height: "149px",
                      zIndex: -1,
                    }}
                  />
                </li>
                <li className="font-Sarabun">
                  <hr />
                  <div className="timeline-middle">
                    <div className="w-[58px] h-[58px] bg-[#E4E4E4] rounded-full -mt-4"></div>
                  </div>
                  <div className="timeline-end mb-12 -mt-10 ml-4">
                    <h3 className="text-[#FFB800] font-semibold text-[32px]">
                      Final Presentasi dan <br /> Penjurian
                    </h3>
                    <p className="text-xl text-white font-medium italic">
                      Karya Tulis Ilmiah, UI/UX, PPL <br />{" "}
                      <span className="font-light not-italic">
                        21 November 2024
                      </span>
                    </p>
                  </div>
                  <hr
                    className="rounded-none -mt-2 rounded-b-none bg-[#E4E4E4]"
                    style={{
                      width: "23px",
                      height: "160px",
                      zIndex: -1,
                    }}
                  />
                </li>
                <li className="font-Sarabun">
                  <hr />
                  <div className="timeline-middle">
                    <div className="w-[58px] h-[58px] bg-[#E4E4E4] rounded-full -mt-4"></div>
                  </div>
                  <div className="timeline-start mb-10 -mt-24 mr-4">
                    <h3 className="text-[#FFB800] font-semibold text-[32px] -mt-28 md:-mt-0 ml-3 md:ml-0">
                      Pengumuman Juara
                    </h3>
                    <p className="text-xl text-white font-medium italic ml-3 md:ml-0">
                      Karya Tulis Ilmiah, UI/UX, PPL <br />{" "}
                      <span className="font-light not-italic">
                        30 November 2024
                      </span>
                    </p>
                  </div>
                  <hr
                    className="rounded-t-none rounded-b-[5px] -mt-2 bg-[#E4E4E4]"
                    style={{
                      width: "23px",
                      height: "149px",
                      zIndex: -1,
                    }}
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white">
        <div className="py-5 mx-10 md:mx-[105px]">
          <h2 className="font-Sarabun font-semibold text-[36px] sm:text-[46px] md:text-[64px] text-black text-center relative after:content-[''] after:w-full after:h-0.5 after:bg-gradient-to-r after:from-[#FFB800] after:to-[#8AC7FF] after:absolute after:-bottom-3 after:left-0 after:transition-all after:duration-300 after:ease-in-out after:transform after:scale-x-[.08] mb-10 mt-5">
            Lokasi Kami
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 place-items-center py-6">
            <div>
              <h4 className="font-medium font-Sarabun text-[#111524] text-[32px]">
                Politeknik Negeri Banjarmasin
              </h4>
              <p className="text-[#767373] mt-4">
                Jl. Brig Jend. Hasan Basri, Pangeran, Kec. Banjarmasin Utara,
                Kota Banjarmasin, Kalimantan Selatan 70124
              </p>
            </div>
            <div className="w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.219719647912!2d114.57935537412587!3d-3.2956938966791793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2de423a80d47ba6b%3A0x8f5abfaddfe5a2d7!2sPoliteknik%20Negeri%20Banjarmasin!5e0!3m2!1sen!2sid!4v1728977577273!5m2!1sen!2sid"
                style={{
                  border: 0,
                }}
                className="w-full h-[330px] rounded-3xl"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#111524]">
        <div className="pt-[62px] pb-[43px] flex flex-col justify-center items-center">
          <img
            src={logoItech}
            alt="Logo iTechPoliban"
            className="w-[60px] h-[60px]"
          />
          <p className="font-Sarabun text-2xl text-white mt-2">
            <span className="bg-gradient-to-r from-[#FFB800] to-[#8AC7FF] bg-clip-text text-transparent opacity-87">
              ITECH
            </span>{" "}
            POLIBAN Competition 2024
          </p>
          <div>
            <div className="flex gap-[13px] mt-5">
              <a
                href="https://www.instagram.com/itechpoliban"
                className="bg-white rounded-full p-1 w-7 h-7 flex items-center justify-center hover:scale-[1.05] transition-all"
              >
                <img
                  src={instagramIcon}
                  alt="instagram icon"
                  width={18}
                  height={18}
                />
              </a>
              <a
                href="#"
                className="bg-white rounded-full p-1 w-7 h-7 flex items-center justify-center hover:scale-[1.05] transition-all"
              >
                <img
                  src={whatsappIcon}
                  alt="whatsapp icon"
                  width={18}
                  height={18}
                />
              </a>
              <a
                href="#"
                className="bg-white rounded-full p-1 w-7 h-7 flex items-center justify-center hover:scale-[1.05] transition-all"
              >
                <img
                  src={discordIcon}
                  alt="discord icon"
                  width={18}
                  height={18}
                />
              </a>
              <a
                href="#"
                className="bg-white rounded-full p-1 w-7 h-7 flex items-center justify-center hover:scale-[1.05] transition-all"
              >
                <img
                  src={githubIcon}
                  alt="github icon"
                  width={18}
                  height={18}
                />
              </a>
            </div>
          </div>
          <div>
            <p className="font-Sarabun text-[#C9C9C9] text-center mt-20">
              Copyright by Komunitas ITECH <br /> Politeknik Negeri Banjarmasin.
            </p>
          </div>
        </div>
      </footer>

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
          {selectedKategori?.image != null && (
            <img src={selectedKategori?.image} alt={selectedKategori?.name} />
          )}
          <a
            href={selectedKategori?.link_pedoman}
            target="_blank"
            class="btn text-white bg-yellow-500 hover:bg-yellow-600 font-medium text-xl w-full mt-4"
          >
            Buku Pedoman
          </a>
          <a
            href={selectedKategori?.link_daftar}
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
