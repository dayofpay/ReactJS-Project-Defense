import { useState } from "react"
import { useEffect } from "react"
import { isUserStaff } from "../../../services/userServices";
import { Link } from "react-router-dom";
export default function Sidebar(){
  const [isStaff,setStaffState] = useState(false);
  useEffect(() => {
   isUserStaff().then((response) => {
    setStaffState(response);
   })
  },[])
    return (
        <aside className="aside is-placed-left is-expanded">
  <div className="aside-tools">
    <div>
      Course <b className="font-black">System</b>
    </div>
  </div>
  <div className="menu is-menu-main">
    <p className="menu-label">Members</p>
    <ul className="menu-list">
      <li className="--set-active-index-html">
        <Link to="/dashboard">
          <span className="icon"><i className="mdi mdi-desktop-mac"></i></span>
          <span className="menu-item-label">Dashboard</span>
        </Link>
      </li>
    </ul>
    {isStaff && (
      <>
<p className="menu-label">[STAFF]</p>
      <ul className="menu-list">
      <li>
        <a href="tables.html">
          <span className="icon"><i className="mdi mdi-table"></i></span>
          <span className="menu-item-label">Tables</span>
        </a>
      </li>
      <li className="">
        <Link to="/manage-courses">
          <span className="icon"><i className="mdi mdi-square-edit-outline"></i></span>
          <span className="menu-item-label">Manage Courses</span>
        </Link>
      </li>
      <li className="">
        <Link to="/manage-courses">
          <span className="icon"><i className="mdi mdi-square-edit-outline"></i></span>
          <span className="menu-item-label">Manage Users</span>
        </Link>
      </li>
      <li className="">
        <Link to="/create-course">
          <span className="icon"><i className="mdi mdi-square-edit-outline"></i></span>
          <span className="menu-item-label">Create Course</span>
        </Link>
      </li>
      <li className="--set-active-profile-html">
        <Link to="/profile">
          <span className="icon"><i className="mdi mdi-account-circle"></i></span>
          <span className="menu-item-label">My Profile</span>
        </Link>
      </li>
      <li>
        <a href="login.html">
          <span className="icon"><i className="mdi mdi-lock"></i></span>
          <span className="menu-item-label">Login</span>
        </a>
      </li>
      <li>
        <a className="dropdown">
          <span className="icon"><i className="mdi mdi-view-list"></i></span>
          <span className="menu-item-label">Submenus</span>
          <span className="icon"><i className="mdi mdi-plus"></i></span>
        </a>
        <ul>
          <li>
            <a href="#void">
              <span>Sub-item One</span>
            </a>
          </li>
          <li>
            <a href="#void">
              <span>Sub-item Two</span>
            </a>
          </li>
        </ul>
      </li>
    </ul>
      </>
    )}
    <p className="menu-label">About</p>
    <ul className="menu-list">
      <li>
        <a href="https://justboil.me" target="_blank" className="has-icon">
          <span className="icon"><i className="mdi mdi-credit-card-outline"></i></span>
          <span className="menu-item-label">Premium Demo</span>
        </a>
      </li>
      <li>
        <a href="https://justboil.me/tailwind-admin-templates" className="has-icon">
          <span className="icon"><i className="mdi mdi-help-circle"></i></span>
          <span className="menu-item-label">About</span>
        </a>
      </li>
      <li>
        <a href="https://github.com/justboil/admin-one-tailwind" className="has-icon">
          <span className="icon"><i className="mdi mdi-github-circle"></i></span>
          <span className="menu-item-label">GitHub</span>
        </a>
      </li>
    </ul>
  </div>
</aside>
    )
}