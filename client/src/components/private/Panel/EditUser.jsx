import { useNavigate, useParams } from "react-router-dom";
import { getUserDetails } from "../../../services/userServices";
import { useContext, useEffect, useState } from "react";
import useForm from "../../../hooks/useForm";
import getAvatar from "../../../utils/getAvatar"
import { EditUserKeys } from "../../../keys/form-keys";
import AuthContext from "../../../contexts/authContext";
import styles from "../../../../public/css/custom.module.css";

export default function EditUser(){
    const {id} = useParams();
    const [userData,setUserData] = useState([]);
    const [userImage,setUserImage] = useState('');
    const [message,setMessage] = useState("");
    const navigate = useNavigate();
    useEffect(() => {
        getUserDetails(id,'_id').then((response) => {
            setUserData(response);
            getAvatar(response.email).then((response) => {
                setUserImage(response)
            })
        })
    },[id]);
    const {editUserHandler} = useContext(AuthContext);
    
    const { values, onChange, onSubmit, errors,setValues } = useForm(
        async () => {
            try {
              await editUserHandler(values);
              setMessage(`User ${values["user-email"]} edited successfully!`);
            } catch (error) {
              throw new Error(error);
            }
          },
        {
            [EditUserKeys.UserEmail] : "",
            [EditUserKeys.UserBalance] : 0,
            [EditUserKeys.IsStaff] : false,
            [EditUserKeys.UserId] : "",
        },
        {
          [EditUserKeys.UserEmail]: (value) => {
                if (!value) {
                  return "Please provide user email !";
                }
        
                const userEmailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
          
                if (!userEmailRegex.test(value)) {
                  return "Please enter a valid email !";
                }
          
                return "";
              },
          [EditUserKeys.UserBalance]: (value) => {
            if (!Number(value) || Number(value) < 0) {
              return "Please provide valid number";
            }
            return "";
          },
        }
      );

      useEffect(() => {
        try {
          console.log(userData);
          setValues((prevValues) => ({
            ...prevValues,
            [EditUserKeys.UserEmail]: userData?.["email"] || "Loading...",
            [EditUserKeys.UserBalance]: Number(userData?.["balance"]) || "",
            [EditUserKeys.IsStaff]: userData?.["isStaff"] || false,
            [EditUserKeys.UserId]: userData?.["_id"] || "",
          }));
        } catch (error) {
          navigate('/');
        }
      }, [userData, id]);
      
      
    if(!userData){
      navigate('/');
    }
    return (
<>
<section className="is-hero-bar">
  <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
    <h1 className="title">
      Forms
    </h1>
    <button className="button light">Button</button>
  </div>
</section>
<div className="card">
    <header className="card-header">
        <p className="card-header-title">
            <span className="icon"><i className="mdi mdi-account"></i></span>
            Editing User : {userData.email}
        </p>
    </header>
    <div className="card-content">
        <div className="image w-48 h-48 mx-auto">
            <img src={`https://gravatar.com/avatar/${userImage}.jpg`} alt="John Doe" className="rounded-full" />
        </div>
        <hr />
        <form onSubmit={onSubmit}>
            <input type="hidden" name={EditUserKeys.UserId} value={values[EditUserKeys.UserId]} />
        <div className="field">
            <label className="label">E-Mail</label>
            <div className="control">
                <input type="text" readOnly={true} value={values[EditUserKeys.UserEmail]} className="input is-static" />
            </div>
        </div>
        <hr />
        <div className="field">
            <label className="label">User Balance</label>
            <div className="control">
                <input type="text" name={EditUserKeys.UserBalance} onChange={onChange} value={Number(values[EditUserKeys.UserBalance])} className="input is-static" />
            </div>
        </div>
        <div className="field">
  <label className="label">Is Staff</label>
  <div className="control">
    <div className="select">
    <select
  name={EditUserKeys.IsStaff}
  onChange={onChange}
  value={String(values[EditUserKeys.IsStaff])}
>
  <option value="true">Yes</option>
  <option value="false">No</option>
</select>


    </div>
  </div>
</div>
<button type="submit" className="btn btn-primary" onClick={() => {setMessage(true)}}>Edit User</button>
        </form>
        {message && (      <div className={styles["success-edit-msg"]}>
        User support@v-devs.eu edited successfully!
      </div>)}
    </div>
</div>
</>
    )
}