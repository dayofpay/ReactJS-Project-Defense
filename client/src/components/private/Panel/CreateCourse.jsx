import { useContext } from "react";
import useForm from "../../../hooks/useForm";
import AuthContext from "../../../contexts/authContext";
import styles from "../../../../public/css/custom.module.css";
import { CreateCourseKeys } from "../../../keys/form-keys";
export default function CreateCourse(){


    const {createCourseSubmitHandler} = useContext(AuthContext)
    const { values, onChange, onSubmit, errors } = useForm(
        createCourseSubmitHandler,
        {
          [CreateCourseKeys.CourseName] : "",
          [CreateCourseKeys.CourseImage]: "",
          [CreateCourseKeys.CourseCategory]: "",
          [CreateCourseKeys.CoursePrice]: "",
          [CreateCourseKeys.CourseDifficulity]: "",
          [CreateCourseKeys.InstructorName]: "",
          [CreateCourseKeys.CourseDescription]: "",
        },
        {
          [CreateCourseKeys.CourseImage]: (value) => {
            if (!value) {
              return "Please provide a course image URL";
            }
    
            const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
      
            if (!urlRegex.test(value)) {
              return "Please enter a valid URL for the course image";
            }
      
            return "";
          },
          [CreateCourseKeys.CourseCategory]: (value) => {
            if (!value) {
              return "Please select a course category";
            }
            return "";
          },
          [CreateCourseKeys.CoursePrice]: (value) => {
            if (!value || isNaN(value) || Number(value) < 0) {
              return "Please enter a valid course price";
            }
            return "";
          },
          [CreateCourseKeys.CourseDifficulity]: (value) => {
            if (!value) {
              return "Please select a course difficulty level";
            }
            return "";
          },
          [CreateCourseKeys.InstructorName]: (value) => {
            if (!value) {
              return "Please enter the instructor's name";
            }
            return "";
          },
          [CreateCourseKeys.CourseDescription]: (value) => {
            if (!value) {
              return "Please provide a course description";
            }
            return "";
          },
        }
      );
return(
<>
    <section className="is-hero-bar">
    </section>
    <section className="section main-section">
        <div className="card mb-6">
            <header className="card-header">
                <p className="card-header-title">
                    <span className="icon"><i className="mdi mdi-ballot"></i></span>
                    Enter course info
                </p>
            </header>
            <div className="card-content">
                <form onSubmit={onSubmit}>
                    <div className="field">
                        <label className="label">Course name</label>
                        <div className="field-body">
                            <div className="field">
                                <div className="control icons-left">
                                    <input className="input" name={CreateCourseKeys.CourseName} onChange={onChange} type="text" placeholder="Course name" value={values[CreateCourseKeys.CourseName]} />
                                    <span className="icon left"><i className="mdi mdi-account"></i></span>
                                </div>
                            </div>
                            <div className="field">
                            <label className="label">Course Category</label>
                                <div className="control icons-left">
                                    <input className="input" name={CreateCourseKeys.CourseCategory} onChange={onChange} type="text" placeholder="Course category" value={values[CreateCourseKeys.CourseCategory]} />
                                    <span className="icon left"><i className="mdi mdi-account"></i></span>
                                </div>
                            </div>
                            <div className="field">
                            <label className="label">Course Price</label>
                                <div className="control icons-left">
                                    <input className="input" type="number" name={CreateCourseKeys.CoursePrice} onChange={onChange} placeholder="Course price" value={values[CreateCourseKeys.CoursePrice]} />
                                    <span className="icon left"><i className="mdi mdi-account"></i></span>
                                </div>
                            </div>
                            <div className="field">
                            <label className="label">Course Difficulity</label>
                                <div className="control icons-left">
                                    <input className="input" type="text" name={CreateCourseKeys.CourseDifficulity} onChange={onChange} placeholder="Course difficulity" value={values[CreateCourseKeys.CourseDifficulity]} />
                                    <span className="icon left"><i className="mdi mdi-account"></i></span>
                                </div>
                            </div>
                            <div className="field">
                            <label className="label">Instructor Name</label>
                                <div className="control icons-left">
                                    <input className="input" type="text" name={CreateCourseKeys.InstructorName} onChange={onChange} placeholder="Instructor name" value={values[CreateCourseKeys.InstructorName]}/>
                                    <span className="icon left"><i className="mdi mdi-account"></i></span>
                                </div>
                            </div>
                            <div className="field">
                            <label className="label">Course Image</label>
                                <div className="control icons-left">
                                    <input className="input" type="text" name={CreateCourseKeys.CourseImage} onChange={onChange} placeholder="Course Image" value={values[CreateCourseKeys.CourseImage]}/>
                                    <span className="icon left"><i className="mdi mdi-account"></i></span>
                                </div>
                            </div>
                            <div className="field">
                                <label className="label">Course Description</label>
                                <div className="control">
              <textarea className="textarea" name={CreateCourseKeys.CourseDescription} onChange={onChange} placeholder="Enter course description" value={values[CreateCourseKeys.CourseDescription]}></textarea>
            </div>

                            </div>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">Create Course</button>
                </form>
                {Object.keys(errors)
  .filter((fieldName) => errors[fieldName])
  .map((fieldName) => (
    <p key={fieldName} className={styles["error-message"]}>
      {errors[fieldName]}
    </p>
))}




            </div>
        </div>

    </section>

</>
)
}