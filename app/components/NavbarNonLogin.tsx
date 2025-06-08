import Link from 'next/link';
// Langkah 1: Impor font dari next/font/google
import { Krona_One } from 'next/font/google';

// Langkah 2: Konfigurasi font
const kronaOne = Krona_One({
  subsets: ['latin'],
  weight: '400',
  display: 'swap', // Opsi untuk performa font
});

const NavbarNonLogin = () => {
  return (
    <nav className="flex items-center justify-between bg-primary h-16 px-8 rounded-b-2xl fixed top-0 w-full z-50">
      
      <Link 
        href="/" 
        className={`${kronaOne.className} bg-transparent text-background text-2xl tracking-wider`}
      >
        bay<span className='text-3xl bg-transparent'>i</span>cara
      </Link>

      <div className="flex items-center gap-x-6 bg-transparent">
        <Link 
          href="/Signup" 
          className="bg-transparent text-sm font-medium text-background hover:text-secondary"
        >
          Daftar
        </Link>
        <Link 
          href="/Login" 
          className="bg-transparent text-sm font-medium text-background hover:text-secondary"
        >
          Masuk
        </Link>
      </div>
    </nav>
  );
};

export default NavbarNonLogin;