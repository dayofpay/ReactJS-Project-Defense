import About from "../../components/site/About/About"
import WhyUs from "../../components/site/Features/WhyChooseUs"
import Header from "../../components/site/Header/Header"


import EnchancedTestimotals from '../../components/site/Testimotals/Testimotals';
import Footer from '../../components/site/Footer/Footer';
import Topbar from "../../components/site/Topbar/Topbar";
import Navbar from "../../components/site/Navigations/Navbar";
import ShowCatalog from "../../components/site/Courses/CourseCatalog";
export default function Home(){
    return (
        <>
      <Topbar />
      <Navbar />
        <Header />
        <About />
        <WhyUs />
        <ShowCatalog />
        <EnchancedTestimotals />
        <Footer />
        </>

    )
}