import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('./Pages/Site/Home'));
const About = lazy(() => import('./Pages/Site/About'));
const PublicLogin = lazy(() => import('./components/private/Auth/Login'));
import { AuthProvider } from './contexts/authContext';
import ProtectedRoute from './contexts/protectContext';
const Logout = lazy(() => import('./components/private/Auth/Logout'));
const Register = lazy(() => import('./components/private/Auth/Register'));
const ShowDashboard = lazy(() => import('./Pages/Panel/Dashboard'));


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
        <Route element={<ProtectedRoute />}>
          <Route path='/dashboard' element={<ShowDashboard/>}/>
        </Route>
      </Routes>
      </Suspense>
      </AuthProvider>
    </>

  );

}

export default App;
