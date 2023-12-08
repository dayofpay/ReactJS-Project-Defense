import { Link } from "react-router-dom";
import LoadDependencies from "../../../utils/LoadAdminDependencies"
import LoadAdminStyles from "../../../utils/LoadAdminStyles";
import { useContext } from "react";
import AuthContext from "../../../contexts/authContext";
import useForm from "../../../hooks/useForm";
import styles from "../../../../public/css/custom.module.css";
export default function Login(){
    LoadDependencies();

    const LoginFormKeys = {
        Email: 'email',
        Password: 'password',
    };
    const {loginSubmitHandler} = useContext(AuthContext)
    const {values,onChange, onSubmit,errors} = useForm(loginSubmitHandler,{
        [LoginFormKeys.Email] : '',
        [LoginFormKeys.Password ] : '',
    });
    return (
        <>
    {LoadAdminStyles()};
 <section className="section main-section">
    <div className="card">
      <header className="card-header">
        <p className="card-header-title">
          <span className="icon"><i className="mdi mdi-lock"></i></span>
          Login
        </p>
      </header>
      <div className="card-content">
        <form id="login" onSubmit={onSubmit}>

          <div className="field spaced">
            <label className="label">Login</label>
            <div className="control icons-left">
              <input className="input" type="text" name={LoginFormKeys.Email} placeholder="user@example.com" autoComplete="email" onChange={onChange} value={values[LoginFormKeys.Email]}/>
              <span className="icon is-small left"><i className="mdi mdi-account"></i></span>
            </div>
            <p className="help">
              Please enter your e-mail
            </p>
          </div>

          <div className="field spaced">
            <label className="label">Password</label>
            <p className="control icons-left">
              <input className="input" type="password" name={LoginFormKeys.Password} placeholder="Password" autoComplete="current-password" onChange={onChange} value={values[LoginFormKeys.Password]}/>
              <span className="icon is-small left"><i className="mdi mdi-asterisk"></i></span>
            </p>
            <p className="help">
              Please enter your password
            </p>
          </div>
          {Object.keys(errors)
  .filter((fieldName) => errors[fieldName])
  .map((fieldName) => (
    <p key={fieldName} className={styles["error-message"]}>
      {errors[fieldName]}
    </p>
))}

          <hr/>

          <div className="field grouped">
            <div className="control">
              <button type="submit" className="button blue">
                Login
              </button>
            </div>
            <div className="control">
              <Link to="/" className="button">Back</Link>


            </div>
          </div>

        </form>
      </div>
    </div>

  </section>
        </>
       
    )
}