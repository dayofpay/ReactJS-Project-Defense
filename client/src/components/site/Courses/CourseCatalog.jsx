import { useState } from "react";
import { useEffect } from "react";
import { getAllCourses } from "../../../services/userServices";
import styles from '../../../../public/css/custom.module.css'
import { Link } from "react-router-dom";
export default function ShowCatalog(){

    const [courseList,setCourseList] = useState([]);

    useEffect(() => {
        getAllCourses().then((response) => {
            setCourseList(response);
        })
    },[])
    return (
        <div className="container-fluid py-5">
        <div className="container py-5">
            <div className="row mx-0 justify-content-center">
                <div className="col-lg-8">
                    <div className="section-title text-center position-relative mb-5">
                        <h6 className="d-inline-block position-relative text-secondary text-uppercase pb-2">Our Courses</h6>
                        <h1 className="display-4">Checkout New Releases Of Our Courses</h1>
                    </div>
                </div>
            </div>
            <div className="row">
                {courseList.length > 0 ?
                courseList.map((course,index) => 
                <div className="col-lg-4 col-md-6 pb-4" key={index}>
                    <Link className="courses-list-item position-relative d-block overflow-hidden mb-2" to={"/course-info/" + course._id}>
                        <img className="img-fluid" src={course.course_image} alt={course.course_name}/>
                        <div className="courses-text">
                            <h4 className="text-center text-white px-3">{course.course_name}</h4>
                            <div className="border-top w-100 mt-3">
                                <div className="d-flex justify-content-between p-4">
                                    <span className="text-white"><i className="fa fa-user mr-2"></i>{course["course_lecturers"]["lecturers_list"]}</span>
                                    <span className="text-white"><i className="fa fa-money-bill"></i> ${course.course_price}</span>
                                    <span className="text-white"><i className="fa fa-star"></i> {course["course_details"]["course_difficulity"]}</span>

                                </div>
                            </div>
                        </div>
                    </Link>
                </div>) : <div className={styles["no-courses-message"]}>There are no courses yet !</div>}
            </div>
        </div>
    </div>
    )
}