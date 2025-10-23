import About from "@/components/About";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const AboutPage = () => { 
    return (
        <div className="min-h-screen">
            <Navbar />
            <div className="pt-16">
                <About />
            </div>
            <Footer />
        </div>
    )
}

export default AboutPage;
