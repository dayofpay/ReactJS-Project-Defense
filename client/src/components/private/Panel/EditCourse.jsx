import { useContext, useEffect } from "react";
import useForm from "../../../hooks/useForm";
import AuthContext from "../../../contexts/authContext";
import styles from "../../../../public/css/custom.module.css";
import { getCourseData } from "../../../services/courseServices";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
export default function EditCourse(){

    const EditCourseKeys = {
        CourseName : 'course-name',
        CourseCategory : 'course-category',
        CoursePrice : 'course-price',
        CourseDifficulity : 'course-difficulity',
        InstructorName : 'instructor-name',
        CourseImage : 'course-image',
        CourseDescription : 'course-description'

    };
    const {id} = useParams();
    const navigate = useNavigate();
    const [courseData,setCourseData] = useState([]);
    useEffect(() => {
        const getData = async () => {
            return await getCourseData(id);
        };

        getData().then((result) => {
            setCourseData(result);
        }).catch((error) => {
            navigate('/dashboard');
        });


    },[]);


    const {createCourseSubmitHandler} = useContext(AuthContext)
    const { onChange, onSubmit, errors } = useForm(
        createCourseSubmitHandler,
        {
            [EditCourseKeys.CourseName]: courseData?.["course_name"] || "",
            [EditCourseKeys.CourseImage]: courseData?.["course_image"] || "",
            [EditCourseKeys.CourseCategory]: courseData?.["course_category"] || "",
            [EditCourseKeys.CoursePrice]: courseData?.["course_price"] || "",
            [EditCourseKeys.CourseDifficulity]: courseData?.["course_difficulity"] || "",
            [EditCourseKeys.InstructorName]:
              courseData?.["course_lecturers"]?.["lecturers_list"] || "",
            [EditCourseKeys.CourseDescription]:
              courseData?.["course_description"] || "",
        },
        {
          [EditCourseKeys.CourseImage]: (value) => {
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
return(
<>
    <section className="is-hero-bar">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
            <h1 className="title">Edit Course</h1>
            <button className="button light">Button</button>
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
                    <div className="field">
                        <label className="label">Course name</label>
                        <div className="field-body">
                            <div className="field">
                                <div className="control icons-left">
                                    <input className="input" name={EditCourseKeys.CourseName} onChange={onChange} type="text" placeholder="Course name" value={courseData["course_name"] ? courseData["course_name"] : "" } />
                                    <span className="icon left"><i className="mdi mdi-account"></i></span>
                                </div>
                            </div>
                            <div className="field">
                            <label className="label">Course Category</label>
                                <div className="control icons-left">
                                    <input className="input" name={EditCourseKeys.CourseCategory} onChange={onChange} type="text" placeholder="Course category" value={courseData["course_category"] ? courseData["course_category"] : "" } />
                                    <span className="icon left"><i className="mdi mdi-account"></i></span>
                                </div>
                            </div>
                            <div className="field">
                            <label className="label">Course Price</label>
                                <div className="control icons-left">
                                    <input className="input" type="number" name={EditCourseKeys.CoursePrice} onChange={onChange} placeholder="Course price" value={courseData["course_price"] ? courseData["course_price"] : "" } />
                                    <span className="icon left"><i className="mdi mdi-account"></i></span>
                                </div>
                            </div>
                            <div className="field">
                            <label className="label">Course Difficulity</label>
                                <div className="control icons-left">
                                    <input className="input" type="text" name={EditCourseKeys.CourseDifficulity} onChange={onChange} placeholder="Course difficulity" value={courseData?.["course_details"]?.["course_difficulity"] ? courseData["course_details"]?.["course_difficulity"] : "" } />
                                    <span className="icon left"><i className="mdi mdi-account"></i></span>
                                </div>
                            </div>
                            <div className="field">
                            <label className="label">Instructor Name</label>
                                <div className="control icons-left">
                                    <input className="input" type="text" name={EditCourseKeys.InstructorName} onChange={onChange} placeholder="Instructor name" value={courseData?.["course_lecturers"]?.["lecturers_list"] ? courseData["course_lecturers"]["lecturers_list"] : "" }/>
                                    <span className="icon left"><i className="mdi mdi-account"></i></span>
                                </div>
                            </div>
                            <div className="field">
                            <label className="label">Course Image</label>
                                <div className="control icons-left">
                                    <input className="input" type="text" name={EditCourseKeys.CourseImage} onChange={onChange} placeholder="Course Image" value={courseData["course_image"] ? courseData["course_image"] : "" }/>
                                    <span className="icon left"><i className="mdi mdi-account"></i></span>
                                </div>
                            </div>
                            <div className="field">
                                <label className="label">Course Description</label>
                                <div className="control">
              <textarea className="textarea" name={EditCourseKeys.CourseDescription} onChange={onChange} placeholder="Enter course description" value={courseData["course_description"] ? courseData["course_description"] : "" }></textarea>
            </div>

                            </div>
                        </div>
                    </div>
                    <button type="submit">Edit Course</button>
                </form>
                {Object.keys(errors).map((fieldName) => (
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