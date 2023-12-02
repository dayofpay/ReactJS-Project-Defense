import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../../contexts/authContext";
import * as authServices from '../../../services/authServices'
import PATH_LIST from "../../../utils/PathList";
export default function Logout(){
    const navigate = useNavigate();
    const {logoutHandler} = useContext(AuthContext);

    useEffect(() => {
        authServices.logout().then(() => {logoutHandler()}).catch(() => {navigate(PATH_LIST.home),localStorage.clear()});
    },[])
}