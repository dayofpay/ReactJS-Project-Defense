import About from "../components/site/About/About"
import WhyUs from "../components/site/Features/WhyChooseUs"
import Header from "../components/site/Header/Header"


import CourseList from '../components/site/Courses/CourseList';
import Team from '../components/site/Team/Team';
import EnchancedTestimotals from '../components/site/Testimotals/Testimotals';
import Footer from '../components/site/Footer/Footer';

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