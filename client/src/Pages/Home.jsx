import About from "../components/site/About/About"
import WhyUs from "../components/site/Features/WhyChooseUs"
import Header from "../components/site/Header/Header"


import CourseList from '../components/site/Courses/CourseList';
import Team from '../components/site/Team/Team';
import EnchancedTestimotals from '../components/site/Testimotals/Testimotals';
import Footer from '../components/site/Footer/Footer';
import Topbar from "../components/site/Topbar/Topbar";
import Navbar from "../components/site/Navigations/Navbar";
export default function Home(){
    return (
        <>
      <Topbar />
      <Navbar />
        <Header />
        <About />
        <WhyUs />
        <CourseList />
        <Team />
        <EnchancedTestimotals />
        <Footer />
        </>

    )
}