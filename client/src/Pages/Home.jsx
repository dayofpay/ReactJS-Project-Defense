import About from "../components/About/About"
import WhyUs from "../components/Features/WhyChooseUs"
import Header from "../components/Header/Header"
import Navbar from "../components/Navigations/Navbar"

import CourseList from '../components/Courses/CourseList';
import Team from '../components/Team/Team';
import EnchancedTestimotals from '../components/Testimotals/Testimotals';
import Footer from '../components/Footer/Footer';

export default function Home(){
    return (
        <>

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