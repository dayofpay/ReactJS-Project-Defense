import { Link } from "react-router-dom";
import  withAllCourses  from "../../../HOC/withCourseList";
import convertTimestamp from "../../../utils/timeConvert";
import { useState } from "react";
import { deleteCourse } from "../../../services/courseServices";
import { getAllCourses } from "../../../services/userServices";

function ShowCourses({courseList,setCourseList}){
    const DataLabels = {
        'CourseName' : 'course-name',
        'CourseStudents' : 'course-students',
        'CoursePrice' : 'course-price',
        'CourseCategory' : 'course-category',
        'CourseCreationDate' : 'course-creation',
        'Course_ID' : 'course_id',
    }
    const [showModal,setShowUserModal] = useState(false);
    const [deleteCourseId,setDeleteCourseId] = useState(0);
    const [courseIsDeleted,setCourseDeleted] = useState(false);
    const handleDeleteCourse = async (courseId) => {
      try {
        await deleteCourse(courseId);
        setCourseDeleted(true);
        setShowUserModal(!showModal);
        const updatedCourses = await getAllCourses();

        setCourseList(updatedCourses);
      } catch (error) {
        console.error("Error deleting course:", error);
      }
    };
    return (
        <>

<section className="is-hero-bar">
  <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
    <h1 className="title">
      Course Management
    </h1>

  </div>
</section>


    <div className="card has-table">
      <header className="card-header">
        <p className="card-header-title">
          <span className="icon"><i className="mdi mdi-account-multiple"></i></span>
          All courses
        </p>
        <a href="#" className="card-header-icon">
          <span className="icon"><i className="mdi mdi-reload"></i></span>
        </a>
      </header>
      <div className="card-content">
        {Array.from(courseList).length ? (        <table>
          <thead>
          <tr>
            <th></th>
            <th>Course Name</th>
            <th>Students</th>
            <th>Course Price</th>
            <th>Course Category</th>
            <th>Created</th>
            <th>Course ID</th>
          </tr>
          </thead>
          <tbody>
            {Array.from(courseList).map((course,index) =>           <tr  key={index}>
            <td className="image-cell">
              <div className="image">
                <img src={course.course_image} className="rounded-full"/>
              </div>
            </td>
            <td data-label={DataLabels.CourseName}>{course.course_name}</td>
            <td data-label={DataLabels.CourseStudents}>{course.course_students.length}</td>
            <td data-label={DataLabels.CoursePrice}>{course.course_price} $</td>
            <td data-label={DataLabels.CourseCategory}>{course.course_category}</td>
            <td data-label={DataLabels.CourseCreationDate}>
              <small className="text-gray-500" title={convertTimestamp(course._createdOn)}>{convertTimestamp(course._createdOn)}</small>
            </td>
            <td data-label={DataLabels.Course_ID}>{course._id}</td>
            <td className="actions-cell">
              <div className="buttons right nowrap">
                <button className="button small green --jb-modal" type="button" variant="primary">
                  <span className="icon"><i className="mdi mdi-eye"></i></span>
                </button>
                <button className="button small red --jb-modal" onClick={() => {setShowUserModal(!showModal),setDeleteCourseId(course._id)}} data-target="sample-modal" type="button">
                  <span className="icon"><i className="mdi mdi-trash-can"></i></span>
                </button>
                <Link to={"/edit-course/" + course._id} className="button small green --jb-modal" type="button" variant="primary">
                  <span className="icon"><i className="mdi mdi-file-document-edit"></i></span>
                </Link>
              </div>
            </td>
          </tr>)}
          
          </tbody>
        </table>) : (<div className="card empty">
      <div className="card-content">
        <div>
          <span className="icon large"><i className="mdi mdi-emoticon-sad mdi-48px"></i></span>
        </div>
        <p>There are no courses.</p>
      </div>
    </div>)}
      </div>
    </div>
    {showModal && (
        <div>
          <h1>Are you sure you want to delete this Course (ID: {deleteCourseId})?</h1>
          <ul>
            {/* Pass the course ID to the handler */}
            <Link onClick={() => handleDeleteCourse(deleteCourseId)}>Yes</Link>
            <button onClick={() => setShowUserModal(!showModal)}>No</button>
          </ul>
        </div>
      )}
    {courseIsDeleted && (
      <p>Success</p>
    )}

        </>
    )
}



const ManagageCourses = withAllCourses(ShowCourses)

export default ManagageCourses;