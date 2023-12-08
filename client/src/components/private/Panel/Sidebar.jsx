import { useState } from "react"
import { useEffect } from "react"
import { isUserStaff } from "../../../services/userServices";
import { Link } from "react-router-dom";
import usePersistedState from "../../../hooks/usePersistedState";
export default function Sidebar(){
  const [isStaff,setStaffState] = usePersistedState('isStaff',false);
  useEffect(() => {
   isUserStaff().then((response) => {
    setStaffState(response === 'true' || response === true ? true : false);
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
      <li className="">
        <Link to="/manage-courses">
          <span className="icon"><i className="mdi mdi-notebook"></i></span>
          <span className="menu-item-label">Manage Courses</span>
        </Link>
      </li>
      <li className="">
        <Link to="/manage-users">
          <span className="icon"><i className="mdi mdi-account-search-outline"></i></span>
          <span className="menu-item-label">Manage Users</span>
        </Link>
      </li>
      <li className="">
        <Link to="/create-course">
          <span className="icon"><i className="mdi mdi-plus-box-multiple"></i></span>
          <span className="menu-item-label">Create Course</span>
        </Link>
      </li>
      <li className="--set-active-profile-html">
        <Link to="/profile">
          <span className="icon"><i className="mdi mdi-account-circle"></i></span>
          <span className="menu-item-label">My Profile</span>
        </Link>
      </li>
    </ul>
      </>
    )}
    <p className="menu-label">About</p>
    <ul className="menu-list">
      <li>
        <a href="https://justboil.me/tailwind-admin-templates" className="has-icon">
          <span className="icon"><i className="mdi mdi-help-circle"></i></span>
          <span className="menu-item-label">About the project</span>
        </a>
      </li>
      <li>
        <a href="https://github.com/dayofpay/ReactJS-Project-Defense" className="has-icon">
          <span className="icon"><i className="mdi mdi-github-circle"></i></span>
          <span className="menu-item-label">GitHub Repository</span>
        </a>
      </li>
    </ul>
  </div>
</aside>
    )
}