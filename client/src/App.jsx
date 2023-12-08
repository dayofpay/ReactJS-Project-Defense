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
import ShowEditUser from './Pages/Panel/EditUser';
import ShowEditFiles from './Pages/Panel/EditCourseFiles';
import StaffProtected from './contexts/staffContext';
import DisplayCatalog from './Pages/Site/Courses';
import ShowCourseInfo from './Pages/Site/CourseInfo';
import LoadingAnimation from './components/global/Loading';
import NotFoundPage from './components/global/NotFound';
const Logout = lazy(() => import('./components/private/Auth/Logout'));
const Register = lazy(() => import('./components/private/Auth/Register'));
const ShowDashboard = lazy(() => import('./Pages/Panel/Dashboard'));


function App() {
  return (
    <>
  <ErrorBoundary>
  <AuthProvider>
<Suspense fallback={<LoadingAnimation/>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<PublicLogin />} />
        <Route path='/logout' element={<Logout />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/courses' element={<DisplayCatalog/>}/>
        <Route path='/course-info/:id' element={<ShowCourseInfo/>}/>
        <Route element={<ProtectedRoute />}>
          <Route path='/dashboard' element={<ShowDashboard/>}/>
          <Route path='/profile' element={<Profile/>}/>
        </Route>
        <Route element={<StaffProtected/>}>
        <Route path='/manage-courses' element={<ShowCourses/>} />
          <Route path='/create-course' element={<ShowCreateCourse/>} />
          <Route path='/edit-course/:id' element={<ShowEditCourse/>} />
          <Route path='/manage-users' element={< ManageUsers/>} />
          <Route path='/edit-user/:id' element={<ShowEditUser/>} />
          <Route path='/edit-files/:id' element={<ShowEditFiles/>} />
        </Route>
        <Route path='*' element={<NotFoundPage/>}/>
      </Routes>
      </Suspense>
      </AuthProvider>
  </ErrorBoundary>

    </>
    // ProtectedRoute - Requires User account
    // StaffProtected - Requires Staff account

  );

}

export default App;
