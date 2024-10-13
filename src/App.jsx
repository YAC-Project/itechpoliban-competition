import petikAwal from "./assets/images/petik-awal.png";
import petikAkhir from "./assets/images/petik-akhir.png";
import bgSection2 from "./assets/images/bg-section-2.png";

function App() {
  return (
    <div>
      <header className="fixed top-0 w-full">
        <ul className="hidden sm:flex w-[650px] mx-auto rounded-b-lg justify-center items-center gap-6 sm:gap-12 min-h-[68px] bg-white/10 backdrop-blur-sm backdrop-opacity-70">
          <li className="relative after:content-[''] after:w-full after:h-0.5 after:bg-white after:absolute after:-bottom-1 after:left-0 after:transition-all after:duration-300 after:ease-in-out after:transform after:scale-x-[.6]">
            <a href="#beranda" className="font-medium">
              Beranda
            </a>
          </li>
          <li>
            <a
              href="#tentang"
              className="font-light relative after:content-[''] after:w-full after:h-0.5 after:bg-white after:absolute after:-bottom-1 after:left-0 after:transition-all after:duration-300 after:ease-in-out after:transform after:scale-x-0 after:hover:scale-x-[.6]"
            >
              Tentang
            </a>
          </li>
          <li>
            <a
              href="#kategori"
              className="font-light relative after:content-[''] after:w-full after:h-0.5 after:bg-white after:absolute after:-bottom-1 after:left-0 after:transition-all after:duration-300 after:ease-in-out after:transform after:scale-x-0 after:hover:scale-x-[.6]"
            >
              Kategori
            </a>
          </li>
          <li>
            <a
              href="#timeline"
              className="font-light relative after:content-[''] after:w-full after:h-0.5 after:bg-white after:absolute after:-bottom-1 after:left-0 after:transition-all after:duration-300 after:ease-in-out after:transform after:scale-x-0 after:hover:scale-x-[.6]"
            >
              Timeline
            </a>
          </li>
          <li>
            <a
              href="#kontak"
              className="font-light relative after:content-[''] after:w-full after:h-0.5 after:bg-white after:absolute after:-bottom-1 after:left-0 after:transition-all after:duration-300 after:ease-in-out after:transform after:scale-x-0 after:hover:scale-x-[.6]"
            >
              Kontak
            </a>
          </li>
        </ul>
      </header>
      {/* section 1 */}
      <section>
        <div className="pt-[115px] pb-[74px] bg-[#111524] flex flex-col items-center justify-center">
          <div className="flex gap-[6px]">
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
          <h1 className="font-bold font-Tommorow text-[64px] text-center">
            ITECH POLIBAN <br /> COMPETITION 2024
          </h1>
        </div>
      </section>
      {/* section 2 */}
      <section>
        <div
          className="bg-cover bg-center h-screen"
          style={{ backgroundImage: `url(${bgSection2})` }}
        >
          <div className="pt-10">
            <img
              src={petikAwal}
              className="absolute left-[305px] top-[476px] font-bold text-[32px] text-black"
              alt=""
            />
            <h2 className="font-Merriweather font-light italic text-[32px] text-white text-center">
              Peran Pemuda dalam Menjaga Keberagaman <br />
              Budaya di
              <span className="font-bold"> Era Kecerdasan Buatan</span>
            </h2>
            <img
              src={petikAkhir}
              className="absolute right-[386px] top-[562px] font-bold text-[32px] text-black"
              alt=""
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
