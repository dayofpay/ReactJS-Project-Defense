import { useContext, useEffect } from "react";
import useForm from "../../../hooks/useForm";
import AuthContext from "../../../contexts/authContext";
import styles from "../../../../public/css/custom.module.css";
import { addStudent, getCourseData, getCourseStudents } from "../../../services/courseServices";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { EditCourseKeys } from "../../../keys/form-keys";
import AddStudentToCourse from "./AddStudentToCourse";
import RemoveStudent from "./RemoveStudentFromCourse";
import ShowStudents from "./CourseStudents";
import LoadingAnimation from "../../global/Loading";
export default function EditCourse(){


    const {id} = useParams();
    const navigate = useNavigate();
    const [courseData,setCourseData] = useState([]);
    const [students,setStudent] = useState([]);
    const [successMessage, setSuccessMessage] = useState("");
    const {editCourseSubmitHandler} = useContext(AuthContext)
    const {values,onChange, onSubmit, errors,setValues } = useForm(
      async () => {
        try {
          await editCourseSubmitHandler(values);
          setSuccessMessage("Course edited successfully!");
        } catch (error) {
          throw new Error(error);
        }
      },
        {
            [EditCourseKeys.CourseName]: "",
            [EditCourseKeys.CourseImage]: "",
            [EditCourseKeys.CourseCategory]: "",
            [EditCourseKeys.CoursePrice]: "",
            [EditCourseKeys.CourseDifficulity]: "",
            [EditCourseKeys.InstructorName]: "",
            [EditCourseKeys.CourseDescription]: "",
          },
        {
          [EditCourseKeys.CourseImage]: (value) => {
            console.log(value);
            if (!value) {
              return "Please provide a course image URL";
            }
    
            const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
      
            if (!urlRegex.test(value)) {
              return "Please enter a valid URL for the course image";
            }
      
            return "";
          },
          [EditCourseKeys.CourseCategory]: (value) => {
            if (!value) {
              return "Please select a course category";
            }
            return "";
          },
          [EditCourseKeys.CoursePrice]: (value) => {
            if (!value || isNaN(value) || Number(value) < 0) {
              return "Please enter a valid course price";
            }
            return "";
          },
          [EditCourseKeys.CourseDifficulity]: (value) => {
            if (!value) {
              return "Please select a course difficulty level";
            }
            return "";
          },
          [EditCourseKeys.InstructorName]: (value) => {
            if (!value) {
              return "Please enter the instructor's name";
            }
            return "";
          },
          [EditCourseKeys.CourseDescription]: (value) => {
            if (!value) {
              return "Please provide a course description";
            }
            return "";
          },
        }
      );
      useEffect(() => {
        const getData = async () => {
          try {
            const result = await getCourseData(id);
            setCourseData(result);
            setValues({
              [EditCourseKeys.CourseName]: result?.["course_name"] || "",
              [EditCourseKeys.CourseImage]: result?.["course_image"] || "",
              [EditCourseKeys.CourseCategory]: result?.["course_category"] || "",
              [EditCourseKeys.CoursePrice]: result?.["course_price"] || "",
              [EditCourseKeys.CourseDifficulity]: result?.["course_details"]["course_difficulity"] || "",
              [EditCourseKeys.InstructorName]: result?.["course_lecturers"]?.["lecturers_list"] || "",
              [EditCourseKeys.CourseDescription]: result?.["course_description"] || "",
              [EditCourseKeys.CourseId] : result?.["_id"] || "",
            });
          } catch (error) {
            navigate('/dashboard');
          }
        };
    
        getData();
      }, [id, navigate, setValues]);
      useEffect(() => {
        getCourseStudents(id).then((response) => {
          setStudent(response);
        })
      },[id])
      if (!courseData) {
        return <LoadingAnimation/>;
      }
return(
<>
    <section className="is-hero-bar">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
            <h1 className="title">Edit Course</h1>

        </div>
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
                    <input type="hidden" name={EditCourseKeys.CourseId} defaultValue={values[EditCourseKeys.CourseId]} />
                    <div className="field">
                        <label className="label">Course name</label>
                        <div className="field-body">
                            <div className="field">
                                <div className="control icons-left">
                                <input className="input" name={EditCourseKeys.CourseName} onChange={onChange}
                                    type="text" placeholder="Course name" value={values[EditCourseKeys.CourseName]} />
                                    <span className="icon left"><i className="mdi mdi-account"></i></span>
                                </div>
                            </div>
                            <div className="field">
                            <label className="label">Course Category</label>
                                <div className="control icons-left">
                                    <input className="input" name={EditCourseKeys.CourseCategory} onChange={onChange} type="text" placeholder="Course category" value={values[EditCourseKeys.CourseCategory]} />
                                    <span className="icon left"><i className="mdi mdi-account"></i></span>
                                </div>
                            </div>
                            <div className="field">
                            <label className="label">Course Price</label>
                                <div className="control icons-left">
                                    <input className="input" type="number" name={EditCourseKeys.CoursePrice} onChange={onChange} placeholder="Course price" value={values[EditCourseKeys.CoursePrice]} />
                                    <span className="icon left"><i className="mdi mdi-account"></i></span>
                                </div>
                            </div>
                            <div className="field">
                            <label className="label">Course Difficulity</label>
                                <div className="control icons-left">
                                    <input className="input" type="text" name={EditCourseKeys.CourseDifficulity} onChange={onChange} placeholder="Course difficulity" value={values[EditCourseKeys.CourseDifficulity]} />
                                    <span className="icon left"><i className="mdi mdi-account"></i></span>
                                </div>
                            </div>
                            <div className="field">
                            <label className="label">Instructor Name</label>
                                <div className="control icons-left">
                                    <input className="input" type="text" name={EditCourseKeys.InstructorName} onChange={onChange} placeholder="Instructor name" value={values[EditCourseKeys.InstructorName]}/>
                                    <span className="icon left"><i className="mdi mdi-account"></i></span>
                                </div>
                            </div>
                            <div className="field">
                            <label className="label">Course Image</label>
                                <div className="control icons-left">
                                    <input className="input" type="text" name={EditCourseKeys.CourseImage} onChange={onChange} placeholder="Course Image" value={values[EditCourseKeys.CourseImage]}/>
                                    <span className="icon left"><i className="mdi mdi-account"></i></span>
                                </div>
                            </div>
                            <div className="field">
                                <label className="label">Course Description</label>
                                <div className="control">
              <textarea className="textarea" name={EditCourseKeys.CourseDescription} onChange={onChange} placeholder="Enter course description" value={values[EditCourseKeys.CourseDescription]}></textarea>
            </div>

                            </div>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">Edit Course</button>
                </form>
                {successMessage && (
        <p className={styles["success-message"]}>{successMessage}</p>
      )}
                {Object.keys(errors)
  .filter((fieldName) => errors[fieldName])
  .map((fieldName) => (
    <p key={fieldName} className={styles["error-message"]}>
      {errors[fieldName]}
    </p>
))}
            </div>
        </div>
        <div className="card mb-6"/>
      <AddStudentToCourse courseId={id}/>
      <RemoveStudent courseId={id}/>
      <ShowStudents students={students}/>
    </section>

</>
)
}