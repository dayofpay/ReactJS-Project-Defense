import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('./Pages/Home'));
const About = lazy(() => import('./Pages/About'));
const PublicLogin = lazy(() => import('./components/private/Auth/Login'));


function App() {
  return (
    <>
<Suspense fallback={<div>Loading</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<PublicLogin />} />

      </Routes>
      </Suspense>
    </>
  );

}

export default App;
