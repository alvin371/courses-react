import Navbar from "../components/Navbar";
import EnglishLogo from "../assets/images/English.png";
import { BooksIcon } from "../assets/icons/book";

const Home = () => {
  return (
    <div className="bg-emerald-100 text-stone-800">
      <Navbar />
      <section className="flex flex-row items-center mx-20">
        <div className="container flex flex-col text-left">
          <h1 className="my-2">Going to Kampung Inggris</h1>
          <p className="my-2">
            Membantu kamu untuk menemukan kursus di Kampung Inggris Pare yang
            sesuai dengan preferensimu
          </p>
        </div>
        <div className="">
          <img src={EnglishLogo} alt="Hero-section-logo" />
        </div>
      </section>

      <section className="features flex flex-col mx-20">
        <h1 className="flex justify-center text-center">Features</h1>
        <div className="flex flex-row my-4 justify-evenly">
          <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow ">
            {/* features card */}
            <div className="flex flex-row items-center">
              <BooksIcon />
              <h5 className="mb-2 mx-4 text-2xl font-bold tracking-tight text-gray-900">
                Courses
              </h5>
            </div>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Banyak pilihan kursus yang terpilih untuk menambah pengalaman anda
              di Kampung Inggris
            </p>
            <p className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Baca Selengkapnya
            </p>
          </div>
          <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow ">
            {/* features card */}
            <div className="flex flex-row items-center">
              <BooksIcon />
              <h5 className="mb-2 mx-4 text-2xl font-bold tracking-tight text-gray-900">
                ChatBot AI
              </h5>
            </div>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              ChatBot AI 24/7 siap membantu anda untuk menemukan kursus yang
              sesuai dengan preferensi anda
            </p>
            <p className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Baca Selengkapnya
            </p>
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="partner-container flex flex-col">
          <div className="flex justify-center text-center mx-auto my-2">
            <h1 className="flex justify-center text-center">Our Partner</h1>
          </div>
          <div className="flex flex-row h-[11rem] justify-around my-2">
            <img src="/Access.png" alt="Access" className="w-[325px]" />
            <img src="/brilliant.png" alt="Brilliant" className="w-[180px]" />
            <img src="/globalenglish.png" alt="GE" className="w-[400px]" />
          </div>
        </div>
      </section>

      <section className="FaQs"></section>
    </div>
  );
};

export default Home;
