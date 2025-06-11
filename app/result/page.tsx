import Footer from "../components/Footer";
import HeaderDeteksi from "../components/HeaderDeteksi";
import NavbarLoggedin from "../components/NavbarLoggedin";
import Result from "../components/Result";
import { Suspense } from "react";

const ResultPage = () => {
    return (
        <div>
            <NavbarLoggedin />
            <HeaderDeteksi />
            
            <Suspense fallback={<p className="p-10">Memuat hasil analisis...</p>}>
                <Result />
            </Suspense>
            
            <Footer />
        </div>
    )
}

export default ResultPage;
