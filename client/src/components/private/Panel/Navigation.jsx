import { Link } from "react-router-dom";
import withAuth from "../../../HOC/withAuth";
import LoadDependencies from "../../../utils/LoadAdminDependencies"
import LoadAdminStyles from "../../../utils/LoadAdminStyles"
import getAvatar from "../../../utils/getAvatar";
import { useState,useEffect } from "react";
function RenderNavigation({username,email}){

    LoadDependencies();
    const [avatarUrl, setAvatarUrl] = useState('');

    useEffect(() => {
      const fetchAvatarUrl = async () => {
        try {
          const avatar = await getAvatar(email);
          setAvatarUrl(`https://gravatar.com/avatar/${avatar}.jpg`);
        } catch (error) {
          console.error('Error fetching avatar:', error);
        }
      };
  
      fetchAvatarUrl();
    }, [email]);
    return (
        <>
{LoadAdminStyles()}
        <nav id="navbar-main" className="navbar is-fixed-top">
  <div className="navbar-brand is-right">
    <a className="navbar-item --jb-navbar-menu-toggle" data-target="navbar-menu">
      <span className="icon"><i className="mdi mdi-dots-vertical mdi-24px"></i></span>
    </a>
  </div>
  <div className="navbar-menu" id="navbar-menu">
    <div className="navbar-end">
      <div className="navbar-item dropdown has-divider has-user-avatar">
        <a className="navbar-link">
          <div className="user-avatar">
            <img src={avatarUrl} alt={username} className="rounded-full"/>
          </div>
          <div className="is-user-name"><span>{username}</span></div>
          <span className="icon"><i className="mdi mdi-chevron-down"></i></span>
        </a>
        <div className="navbar-dropdown">
        <Link to="/profile" className="navbar-item">
            <span className="icon"><i className="mdi mdi-account"></i></span>
            <span>My Profile</span>
          </Link> 
          <hr className="navbar-divider"/>
          <Link className="navbar-item" to={"/logout"}>
            <span className="icon"><i className="mdi mdi-logout"></i></span>
            <span>Log Out</span>
          </Link>
        </div>
      </div>
      <a href="https://github.com/dayofpay/ReactJS-Project-Defense/" className="navbar-item has-divider desktop-icon-only">
        <span className="icon"><i className="mdi mdi-help-circle-outline"></i></span>
        <span>About</span>
      </a>
      <a href="https://github.com/dayofpay/ReactJS-Project-Defense" className="navbar-item has-divider desktop-icon-only">
        <span className="icon"><i className="mdi mdi-github-circle"></i></span>
        <span>GitHub</span>
      </a>
      <Link to={"/"} className="navbar-item has-divider desktop-icon-only">
        <span className="icon"><i className="mdi mdi-home"></i></span>
        <span>Home</span>
      </Link>
      <Link to="/logout" title="Log out" className="navbar-item desktop-icon-only">
        <span className="icon"><i className="mdi mdi-logout"></i></span>
        <span>Log out</span>
      </Link>
    </div>
  </div>
</nav>
        </>
        
    )
}

const Navigation = withAuth(RenderNavigation);

export default Navigation;