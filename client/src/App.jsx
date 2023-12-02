import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('./Pages/Home'));
const About = lazy(() => import('./Pages/About'));
const PublicLogin = lazy(() => import('./components/private/Auth/Login'));
import { AuthProvider } from './contexts/authContext';
import Logout from './components/private/Auth/Logout';
import Register from './components/private/Auth/Register';

function App() {
  return (
    <>
    <AuthProvider>
<Suspense fallback={<div>Loading</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<PublicLogin />} />
        <Route path='/logout' element={<Logout />}/>
        <Route path='/register' element={<Register />}/>
      </Routes>
      </Suspense>
      </AuthProvider>
    </>

  );

}

export default App;
