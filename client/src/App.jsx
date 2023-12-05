import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('./Pages/Site/Home'));
const About = lazy(() => import('./Pages/Site/About'));
const PublicLogin = lazy(() => import('./components/private/Auth/Login'));
import { AuthProvider } from './contexts/authContext';
import ProtectedRoute from './contexts/protectContext';
import Profile from './Pages/Panel/Profile';
import ErrorBoundary from './hooks/useErrorBoundary';
import ShowCourses from './Pages/Panel/ManageCourses';
import ShowCreateCourse from './Pages/Panel/CreateCouse';
import ShowEditCourse from './Pages/Panel/EditCourse';
import ManageUsers from './Pages/Panel/ManageUsers';
const Logout = lazy(() => import('./components/private/Auth/Logout'));
const Register = lazy(() => import('./components/private/Auth/Register'));
const ShowDashboard = lazy(() => import('./Pages/Panel/Dashboard'));


function App() {
  return (
    <>
  <ErrorBoundary>
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
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/manage-courses' element={<ShowCourses/>}/>
          <Route path='/create-course' element={<ShowCreateCourse/>}/>
          <Route path='/edit-course/:id' element={<ShowEditCourse/>}/>
          <Route path='/manage-users' element={<ManageUsers/>}/>
        </Route>
      </Routes>
      </Suspense>
      </AuthProvider>
  </ErrorBoundary>

    </>// TODO ADMIN GUARDS FOR MANAGING COURSES ETC...

  );

}

export default App;
