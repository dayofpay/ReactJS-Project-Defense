




import '/lib/easing/easing.min.js?url';


import '/lib/waypoints/waypoints.min.js?url';


import '/lib/counterup/counterup.min.js?url';


import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';


import '/js/main.js?url';




import About from "./components/About/About"
import WhyUs from "./components/Features/WhyChooseUs"
import Header from "./components/Header/Header"
import Navbar from "./components/Navigations/Navbar"
import Topbar from "./components/Topbar/Topbar"
import CourseList from './components/Courses/CourseList';
import Team from './components/Team/Team';
import EnchancedTestimotals from './components/Testimotals/Testimotals';

function App() {
  return (
    // ALL COMPONENTS ARE STATIC AT THE TIME YOU ARE LOOKING AT THIS, IM STILL SETTING UP THE THEME !!
    <>
      <Topbar />
      <Navbar />
      <Header />
      <About />
      <WhyUs />
      <CourseList />
      <Team />
      <EnchancedTestimotals />
    </>
    // ALL COMPONENTS ARE STATIC AT THE TIME YOU ARE LOOKING AT THIS, IM STILL SETTING UP THE THEME !!
  )
}

export default App
