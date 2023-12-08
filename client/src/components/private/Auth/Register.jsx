import { Link } from "react-router-dom";
import LoadDependencies from "../../../utils/LoadAdminDependencies"
import LoadAdminStyles from "../../../utils/LoadAdminStyles";
import { useContext } from "react";
import AuthContext from "../../../contexts/authContext";
import useForm from "../../../hooks/useForm";
import styles from "../../../../public/css/custom.module.css";
export default function Register(){
    LoadDependencies();

    const RegisterFormKeys = {
        Email: 'email',
        Password: 'password',
        RepeatPassword : 're-password'
    };
    const {registerSubmitHandler} = useContext(AuthContext)
    const { values, onChange, onSubmit, errors } = useForm(
        registerSubmitHandler,
        {
          [RegisterFormKeys.Email]: "",
          [RegisterFormKeys.Password]: "",
          [RegisterFormKeys.RepeatPassword]: "",
        },
        {
          [RegisterFormKeys.Email]: (value) => {
            if (!value || !/\S+@\S+\.\S+/.test(value)) {
              return "Please enter a valid email address";
            }
            return "";
          },
          [RegisterFormKeys.Password]: (value) => {
            if (!value || value.length < 6) {
              return "Password must be at least 6 characters";
            }
            return "";
          },
          [RegisterFormKeys.RepeatPassword]: (value) => {
            if (!value || value !== values[RegisterFormKeys.Password]) {
              return "Passwords do not match";
            }
            return "";
          },
        }
      );
    return (
        <>
    {LoadAdminStyles()};
 <section className="section main-section">
    <div className="card">
      <header className="card-header">
        <p className="card-header-title">
          <span className="icon"><i className="mdi mdi-lock"></i></span>
          Register
        </p>
      </header>
      <div className="card-content">
        <form id="login" onSubmit={onSubmit}>

          <div className="field spaced">
            <label className="label">Register</label>
            <div className="control icons-left">
              <input className="input" type="text" name={RegisterFormKeys.Email} placeholder="user@example.com" autoComplete="email" onChange={onChange} value={values[RegisterFormKeys.Email]}/>
              <span className="icon is-small left"><i className="mdi mdi-account"></i></span>
            </div>
            <p className="help">
              Please enter your e-mail
            </p>
          </div>

          <div className="field spaced">
            <label className="label">Password</label>
            <p className="control icons-left">
              <input className="input" type="password" name={RegisterFormKeys.Password} placeholder="Password" autoComplete="current-password" onChange={onChange} value={values[RegisterFormKeys.Password]}/>
              <span className="icon is-small left"><i className="mdi mdi-asterisk"></i></span>
            </p>
            <p className="help">
              Please enter your password
            </p>
          </div>
          <div className="field spaced">
            <label className="label">Password</label>
            <p className="control icons-left">
              <input className="input" type="password" name={RegisterFormKeys.RepeatPassword} placeholder="Repeat password" autoComplete="re-password" onChange={onChange} value={values[RegisterFormKeys.RepeatPassword]}/>
              <span className="icon is-small left"><i className="mdi mdi-asterisk"></i></span>
            </p>
            <p className="help">
              Please repeat enter your password
            </p>
          </div>

          <hr/>

          <div className="field grouped">
            <div className="control">
              <button type="submit" className="button blue">
                Register
              </button>
            </div>
            <div className="control">
              <Link to="/" className="button">Back</Link>


            </div>
          </div>
          {Object.keys(errors)
  .filter((fieldName) => errors[fieldName])
  .map((fieldName) => (
    <p key={fieldName} className={styles["error-message"]}>
      {errors[fieldName]}
    </p>
))}
     </form>
      </div>
    </div>

  </section>
        </>
       
    )
}