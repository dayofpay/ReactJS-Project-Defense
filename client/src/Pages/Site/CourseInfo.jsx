import Topbar from "../../components/site/Topbar/Topbar";
import Navbar from "../../components/site/Navigations/Navbar";
import CatalogHeader from "../../components/site/Header/CourseCatalog";
import Footer from "../../components/site/Footer/Footer";
import DisplayInfo from "../../components/site/Courses/CourseInfo";
import ShowComments from "../../components/site/Courses/CourseComments";
import ShowCreateComment from "../../components/site/Courses/CreateComment";
export default function ShowCourseInfo(){
    return (
        <>
      <Topbar />
      <Navbar />
      <CatalogHeader/>
        <DisplayInfo/>
        <ShowComments/>
        <ShowCreateComment/>
        <Footer/>
        </>
    
    )
}