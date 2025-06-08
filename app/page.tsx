import Footer from "../app/components/Footer";
import { HeartHandshake, Puzzle, Search } from "lucide-react";
import Link from "next/link";
import NavbarNonLogin from "./components/NavbarNonLogin";

export default function Home() {
  return (
    <div className="relative">
      
      <div className="relative z-50">
        <NavbarNonLogin />
      </div>

      <div className="flex flex-col items-center justify-center h-[542px] text-center px-4 py-32 text-white bg-[url('/images/GetStartedBackground.png')] bg-cover bg-center">

        <h1 className="text-4xl font-bold mb-4 bg-transparent">
          Ayo, Dukung Perkembangan Bicara Si Kecil!
        </h1>
        <p className="text-lg max-w-2xl bg-transparent">
          Stimulasi sejak dini dapat mencegah keterlambatan bicara, karena masa depan anak dimulai dari kata pertamanya.
        </p>
        <Link href="/Signup" className="bg-transparent"><button className="mt-6 px-4 py-2 font-medium bg-secondary text-white rounded-full hover:bg-primary">
          Ayo Mulai
        </button></Link>
      </div>  
      
      <div className="flex items-center justify-around px-8 py-16 mb-10">
        <div className="text-center w-[27%] shadow-lg rounded-xl px-5 py-8 bg-background">
            <div className="bg-red-300 rounded-full w-16 h-16 text-center flex items-center justify-center mx-auto mb-4">
                <HeartHandshake className="text-background w-10 h-10 bg-transparent"/>
            </div>
            <h2 className="font-bold text-xl">Dampingi</h2>
            <h4 className="text-gray-600">Libatkan diri secara aktif dalam interaksi dan percakapan bersama anak.</h4>
        </div>

        <div className="text-center w-[27%] shadow-lg rounded-xl px-5 py-8 bg-background">
            <div className="bg-yellow-200 rounded-full w-16 h-16 text-center flex items-center justify-center mx-auto mb-4">
                <Puzzle className="text-background w-10 h-10 bg-transparent"/>
            </div>
            <h2 className="font-bold text-xl">Stimulasi</h2>
            <h4 className="text-gray-600">Gunakan aktivitas menarik guna merangsang kemampuan komunikasi dan bahasa anak.</h4>
        </div>

        <div className="text-center w-[27%] shadow-lg rounded-xl px-5 py-8 bg-background">
            <div className="bg-green-300 rounded-full w-16 h-16 text-center flex items-center justify-center mx-auto mb-4">
                <Search className="text-background w-10 h-10 bg-transparent"/>
            </div>
            <h2 className="font-bold text-xl">Deteksi</h2>
            <h4 className="text-gray-600">Kenali tanda-tanda awal keterlambatan bicara untuk langkah penanganan pertama.</h4>
        </div>
      </div>

      <Footer />

    </div>
  );
}