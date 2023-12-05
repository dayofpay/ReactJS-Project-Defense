import { useEffect, useState } from "react"
import { getStudentName, getUserList } from "../../../services/userServices";
import { Link } from "react-router-dom";
export default function ShowUsers(){
    const [user,setUser] = useState([]);

    useEffect(() => {
        getUserList().then((response) => {
            setUser(response);
        })
    })
    return(
<div className="card has-table">
      <header className="card-header">
        <p className="card-header-title">
          <span className="icon"><i className="mdi mdi-account-multiple"></i></span>
          Manage Users
        </p>
        <a href="#" className="card-header-icon">
          <span className="icon"><i className="mdi mdi-reload"></i></span>
        </a>
      </header>
      <div className="card-content">
        <table>
          <thead>
          <tr>
            <th>E-Mail</th>
            <th>Name</th>
            <th>Balance</th>
            <th>Is Staff</th>
            <th>ID</th>
          </tr>
          </thead>
          <tbody>
            {user.map((user,index) =>           <tr key={index}>
            <td data-label="Email">{user.email}</td>
            <td data-label="Name">{getStudentName(user.email)}</td>
            <td data-label="Balance">{user.balance} $</td>
            <td data-label="IsStaff">{user.isStaff === true ? 'Yes' : 'No'}</td>
            <td data-label="UserId">{user._id}</td>
            <td className="actions-cell">
              <div className="buttons right nowrap">
                <Link to={"/user-details/" + user._id} className="button small green --jb-modal" type="button">
                  <span className="icon"><i className="mdi mdi-eye"></i></span>
                </Link>
                <button className="button small red --jb-modal" data-target="sample-modal" type="button">
                  <span className="icon"><i className="mdi mdi-trash-can"></i></span>
                </button>
              </div>
            </td>
          </tr>)}
          
          </tbody>
        </table>
      </div>
    </div>
    )
}