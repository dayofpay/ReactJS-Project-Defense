




import '/lib/easing/easing.min.js?url';


import '/lib/waypoints/waypoints.min.js?url';


import '/lib/counterup/counterup.min.js?url';


import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';


import '/js/main.js?url';
import {Routes,Route} from 'react-router-dom';

import Topbar from "./components/Topbar/Topbar"
import Navbar from './components/Navigations/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';

function App() {
  return (
    // ALL COMPONENTS ARE STATIC AT THE TIME YOU ARE LOOKING AT THIS, IM STILL SETTING UP THE THEME !!
    <>
      <Topbar />
      <Navbar />
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />}/>
    </Routes>


    </>
    // ALL COMPONENTS ARE STATIC AT THE TIME YOU ARE LOOKING AT THIS, IM STILL SETTING UP THE THEME !!
  )
}

export default App
