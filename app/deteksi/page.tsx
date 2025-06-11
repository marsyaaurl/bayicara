import Footer from "../components/Footer";
import HeaderDeteksi from "../components/HeaderDeteksi";
import NavbarLoggedin from "../components/NavbarLoggedin";
import SurveyDeteksi from "../components/SurveyDeteksi";

const DeteksiPage = () => {
    return (
        <div>
            <NavbarLoggedin />
            <HeaderDeteksi />
            <SurveyDeteksi />
            <Footer />
        </div>
    )
}

export default DeteksiPage;