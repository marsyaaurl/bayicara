import { Mail, Phone, MapPin, Instagram, Facebook, Youtube } from "lucide-react";
import Link from 'next/link';
import { Krona_One } from 'next/font/google';

const kronaOne = Krona_One({
  subsets: ['latin'],
  weight: '400',
  display: 'swap', // Opsi untuk performa font
});

export default function Footer() {
  return (
    <footer className="bg-primary text-white items-center justify-center px-10">
      <div className="container px-4 py-12 bg-transparent">
        <div className="flex flex-col md:flex-row lg:grid-cols-4 gap-x-96 bg-transparent items-start justify-center">
          
          <div className="space-y-4 bg-transparent">
            <Link 
                href="/" 
                className={`${kronaOne.className} bg-transparent text-background text-2xl tracking-wider`}
            >
                bay<span className='text-3xl bg-transparent'>i</span>cara
            </Link>
            <p className="text-sm text-gray-200 leading-relaxed bg-transparent max-w-sm">
              Membantu perkembangan bicara si kecil dengan stimulasi yang tepat dan deteksi dini keterlambatan bicara.
            </p>
            <div className="space-y-2 text-sm bg-transparent">
              <div className="flex items-center space-x-2 bg-transparent">
                <MapPin className="w-4 h-4 bg-transparent" />
                <span className="bg-transparent">Jakarta, Indonesia</span>
              </div>
            </div>
          </div>

          <div className="bg-transparent">
            <div className="space-y-4 bg-transparent">
                <h4 className="text-lg font-semibold bg-transparent">Hubungi Kami</h4>
                <div className="space-y-3 text-sm bg-transparent">
                <div className="flex items-center space-x-2 bg-transparent">
                    <Mail className="w-4 h-4 bg-transparent" />
                    <span className="bg-transparent">info@bayicara.com</span>
                </div>
                <div className="flex items-center space-x-2 bg-transparent">
                    <Phone className="w-4 h-4 bg-transparent" />
                    <span className="bg-transparent">+62 812-3456-7890</span>
                </div>
                </div>
                
                <div className="space-y-2 bg-transparent">
                <p className="text-sm font-medium bg-transparent">Ikuti Kami</p>
                <div className="flex space-x-3 bg-transparent">
                    <a href="#" className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-colors">
                    <Instagram className="w-4 h-4 bg-transparent" />
                    </a>
                    <a href="#" className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-colors">
                    <Facebook className="w-4 h-4 bg-transparent" />
                    </a>
                    <a href="#" className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-colors">
                    <Youtube className="w-4 h-4 bg-transparent" />
                    </a>
                </div>
                </div>

                <div className="text-xs text-gray-200 bg-transparent">
                <p className="font-medium bg-transparent">Jam Operasional:</p>
                <p className="bg-transparent">Senin - Jumat: 09.00 - 17.00 WIB</p>
                <p className="bg-transparent">Sabtu: 09.00 - 14.00 WIB</p>
                </div>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}