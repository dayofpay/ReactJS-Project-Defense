import {  Link, NavLink } from "react-router-dom";
import AuthContext from "../../../contexts/authContext";
import { useContext } from "react";

export default function Navigation(){
    const {isAuthenticated,username} = useContext(AuthContext);
    return (
        // <!-- Navbar Start -->
        <div className="container-fluid p-0">
            <nav className="navbar navbar-expand-lg bg-white navbar-light py-3 py-lg-0 px-lg-5">
                <a href="index.html" className="navbar-brand ml-lg-3">
                    <h1 className="m-0 text-uppercase text-primary"><i className="fa fa-book-reader mr-3"></i>Edukate</h1>
                </a>
                <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-between px-lg-3" id="navbarCollapse">
                    <div className="navbar-nav mx-auto py-0">
                        <NavLink to="/" className={({isActive}) => isActive ? 'nav-item nav-link active' : 'nav-item nav-link'}>Home</NavLink>
                        <NavLink to="/about" className={({isActive}) => isActive ? 'nav-item nav-link active' : 'nav-item nav-link'}>About</NavLink>
                        <NavLink to="/courses" className={({isActive}) => isActive ? 'nav-item nav-link active' : 'nav-item nav-link'}>Courses</NavLink>
                        {isAuthenticated ? (<NavLink to="/dashboard" className={({isActive}) => isActive ? 'nav-item nav-link active' : 'nav-item nav-link'}>My Account</NavLink>) : <NavLink to="/login" className={({isActive}) => isActive ? 'nav-item nav-link active' : 'nav-item nav-link'}>Login</NavLink>}


                        <div className="nav-item dropdown">
                            <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Pages</a>
                            <div className="dropdown-menu m-0">
                                <a href="detail.html" className="dropdown-item">Course Detail</a>
                                <a href="feature.html" className="dropdown-item">Our Features</a>
                                <a href="team.html" className="dropdown-item">Instructors</a>
                                <a href="testimonial.html" className="dropdown-item">Testimonial</a>
                            </div>
                        </div>
                        <a href="contact.html" className="nav-item nav-link">Contact</a>
                    </div>
                    {isAuthenticated ? (<Link to="/logout" className="btn btn-primary py-2 px-4 d-none d-lg-block">Logout</Link>) : ((<Link to="/register" className="btn btn-primary py-2 px-4 d-none d-lg-block">Register</Link>)) }
                </div>
            </nav>
        </div>
        // <!-- Navbar End -->
    )
}


// const Navbar = withAuth(Navigation)

// export default Navbar;