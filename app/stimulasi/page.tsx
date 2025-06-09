import Footer from "../components/Footer";
import NavbarLoggedin from "../components/NavbarLoggedin";
import Timeline from "../components/timeline";
import HeaderStimulasi from "../components/HeaderStimulasi";

const Stimulasi = () => {
    return (
        <div className="relative min-h-screen bg-white">
            <div className="relative z-50">
                <NavbarLoggedin />
            </div>

            <div>
                <HeaderStimulasi />
            </div>

            <div>
                <Timeline />
            </div>

            <div>
                <Footer />
            </div>
        </div>
    )
}

export default Stimulasi;