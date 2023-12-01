
import '/lib/easing/easing.min.js?url'
import '/lib/waypoints/waypoints.min.js?url'
import '/lib/counterup/counterup.min.js?url'
import '/lib/owlcarousel/owl.carousel.js?url'
import '/js/main.js?url';




import About from "./components/About/About"
import WhyUs from "./components/Features/WhyChooseUs"
import Header from "./components/Header/Header"
import Navbar from "./components/Navigations/Navbar"
import Topbar from "./components/Topbar/Topbar"

function App() {
  return (
    // ALL COMPONENTS ARE STATIC AT THE TIME YOU ARE LOOKING AT THIS, IM STILL SETTING UP THE THEME !!
    <>
      <Topbar />
      <Navbar />
      <Header />
      <About />
      <WhyUs />
    </>
    // ALL COMPONENTS ARE STATIC AT THE TIME YOU ARE LOOKING AT THIS, IM STILL SETTING UP THE THEME !!
  )
}

export default App
