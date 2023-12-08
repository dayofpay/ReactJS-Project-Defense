import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getCourseData, getCourseFiles, getCourseStudents, joinCourse } from "../../../services/courseServices";
import AuthContext from "../../../contexts/authContext";
import { Link } from "react-router-dom";
import CourseFiles from "./CourseFiles";

export default function DisplayInfo() {
    const [courseInfo, setCourseInfo] = useState([]);
    const [courseFiles, setCourseFiles] = useState([]);
    const [isInCourse, setInCourse] = useState(false);
    const { id } = useParams();
    const { isAuthenticated, email } = useContext(AuthContext);
    const [message, setMessage] = useState('');
    const [error, setError] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        getCourseData(id).then((response) => {
            setCourseInfo(response);
        });

        getCourseFiles(id).then((response) => {
            setCourseFiles(response);
        });

        getCourseStudents(id).then((response) => {
            setInCourse(response["course_students"].includes(email));
        });

    }, []);

    if(courseInfo.hasOwnProperty('error')){
        navigate('/')
    }
    const handleJoinCourse = async(event) => {
        const result = await joinCourse(id,email);
        if(result.hasOwnProperty('error')){
         setMessage(result.error);
         setError(true);
        }
        else{
         setMessage(result.message);
         setError(false);
        }
     }
    return (
        <div className="container-fluid py-5">
            <div className="container py-5">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="mb-5">
                            <div className="section-title position-relative mb-5">
                                <h6 className="d-inline-block position-relative text-secondary text-uppercase pb-2">Course Detail</h6>
                                <h1 className="display-4">{courseInfo.course_name}</h1>
                            </div>
                            <img className="img-fluid rounded w-100 mb-4" src={courseInfo.course_image} alt="Image" />
                            <p>{courseInfo.course_description}</p>
                        </div>
                    </div>

                    <div className="col-lg-4 mt-5 mt-lg-0">
                        {/* {error && <p>{message}</p>}
                        {message.hasOwnProperty('message') && <p>Success</p>} */}
                        {message &&                         <div className={`bg-${error ? 'danger' : 'primary'} mb-5 py-3 rounded text-center`}>
                            <p className={`mb-0 text-${error ? 'danger bg-dark' : 'primary bg-dark'}`}>{message}</p>
                        </div>}
                        <div className="bg-primary mb-5 py-3">
                            <h3 className="text-white py-3 px-4 m-0">Course Features</h3>
                            <div className="d-flex justify-content-between border-bottom px-4">
                                <h6 className="text-white my-3">Lecturer(s)</h6>
                                <h6 className="text-white my-3">{courseInfo?.["course_lecturers"]?.["lecturers_list"]}</h6>
                            </div>
                            <div className="d-flex justify-content-between border-bottom px-4">
                                <h6 className="text-white my-3">Category</h6>
                                <h6 className="text-white my-3">{courseInfo.course_category}</h6>
                            </div>
                            <div className="d-flex justify-content-between border-bottom px-4">
                                <h6 className="text-white my-3">Skill level</h6>
                                <h6 className="text-white my-3">{courseInfo?.["course_details"]?.["course_difficulity"]}</h6>
                            </div>
                            <h5 className="text-white py-3 px-4 m-0">Course Price: $ {courseInfo.course_price}</h5>
                            {isAuthenticated ? <div className="py-3 px-4">
                                <button className="btn btn-block btn-secondary py-3 px-5" onClick={handleJoinCourse}>Enroll Now</button>
                            </div> : <div className="py-3 px-4">
                                <p style={{ color: 'black' }}>[INFO] If you want to enroll in this course, you will have to log in first!</p>
                                <Link className="btn btn-block btn-secondary py-3 px-5" to={'/login'}>Enroll Now</Link>
                            </div>}
                        </div>

                    </div>

                    {isInCourse && <CourseFiles courseFiles={courseFiles} />}
                </div>
            </div>
        </div>
    )
}
