import Topbar from "../../components/site/Topbar/Topbar";
import Navbar from "../../components/site/Navigations/Navbar";
import ShowCatalog from "../../components/site/Courses/CourseCatalog";
import CatalogHeader from "../../components/site/Header/CourseCatalog";
import Footer from "../../components/site/Footer/Footer";
import DisplayInfo from "../../components/site/Courses/CourseInfo";
export default function ShowCourseInfo(){
    return (
        <>
      <Topbar />
      <Navbar />
      <CatalogHeader/>
        <DisplayInfo/>
        <Footer/>
        </>
    
    )
}