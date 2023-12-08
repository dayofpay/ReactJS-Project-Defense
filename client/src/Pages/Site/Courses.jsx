import Topbar from "../../components/site/Topbar/Topbar";
import Navbar from "../../components/site/Navigations/Navbar";
import ShowCatalog from "../../components/site/Courses/CourseCatalog";
import CatalogHeader from "../../components/site/Header/CourseCatalog";
import Footer from "../../components/site/Footer/Footer";
export default function DisplayCatalog(){
    return (
        <>
      <Topbar />
      <Navbar />
      <CatalogHeader/>
        <ShowCatalog/>
        <Footer/>
        </>
    
    )
}