import Footer from "../components/Footer";
import HeaderDeteksi from "../components/HeaderDeteksi";
import NavbarLoggedin from "../components/NavbarLoggedin";
import Result from "../components/Result";

const ResultPage = () => {
    return (
        <div>
            <NavbarLoggedin />
            <HeaderDeteksi />
            <Result />
            <Footer />
        </div>
    )
}

export default ResultPage;