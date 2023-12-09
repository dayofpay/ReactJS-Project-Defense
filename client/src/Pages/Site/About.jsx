import WhyUs from "../../components/site/Features/WhyChooseUs";
import AboutHeader from "../../components/site/Header/About";
import AboutComponent from "../../components/site/About/About";
import Topbar from "../../components/site/Topbar/Topbar";
import Navbar from "../../components/site/Navigations/Navbar";
import Footer from "../../components/site/Footer/Footer";
export default function About(){
    return (
        <>
      <Topbar />
      <Navbar />
        <AboutHeader/>
        <AboutComponent/>
        <WhyUs />
        <Footer/>
        </>
    
    )
}