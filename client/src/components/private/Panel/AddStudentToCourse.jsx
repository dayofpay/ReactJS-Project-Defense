import useForm from "../../../hooks/useForm";
import { AddStudentToCourseKeys } from "../../../keys/form-keys";
import styles from "../../../../public/css/custom.module.css";
import AuthContext from "../../../contexts/authContext";
import { useContext , useState} from "react";
export default function AddStudentToCourse(courseData){
    const {addCourseStudentHandler} = useContext(AuthContext)
    const [message,setMessage] = useState('')
    const {values,onChange, onSubmit, errors } = useForm(
      async () => {
        try {
          await addCourseStudentHandler(values);
          setMessage(`Student ${values["student-name"]} added to the course successfully!`);
        } catch (error) {
          throw new Error(error);
        }
      },
        {
            [AddStudentToCourseKeys.StudentName]: "",
            [AddStudentToCourseKeys.CourseId] : courseData.courseId,
          },
        {
          [AddStudentToCourseKeys.StudentName]: (value) => {
            if (!value) {
              return "Please provide student email !";
            }
    
            const studentEmailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      
            if (!studentEmailRegex.test(value)) {
              return "Please enter a valid email !";
            }
      
            return "";
          },
        }
      );
    return (
        <>
<header className="card-header">
        <p className="card-header-title">
          <span className="icon"><i className="mdi mdi-ballot"></i></span>
          Add Student To Course
        </p>
      </header>
      <div className="card-content">
        <form onSubmit={onSubmit}>
          <div className="field">
            <label className="label">Student Email</label>
            <div className="field-body">
              <div className="field">
                <div className="control icons-left icons-right">
                  <input className="input" type="email" name={AddStudentToCourseKeys.StudentName} value={values[AddStudentToCourseKeys.StudentName]} onChange={onChange} placeholder="Email"/>
                  <span className="icon left"><i className="mdi mdi-mail"></i></span>
                  <span className="icon right"><i className="mdi mdi-check"></i></span>
                </div>
              </div>
            </div>
          </div>
          
          
          <hr/>
          <div className="control">
              <button type="submit" className="button green">
                Add Student
              </button>
            </div>
            </form>
      </div>
      {message && (
        <p className={styles["success-message"]}>{message}</p>
      )}
      {Object.keys(errors).map((fieldName) => (
        <p key={fieldName} className={styles["error-message"]}>
           {errors[fieldName]}
        </p>
      ))}
        </>
    )
}