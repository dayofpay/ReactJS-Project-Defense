import { withAllCourses } from "../../../HOC/withCourseList"
import convertTimestamp from "../../../utils/timeConvert";
import { useState } from "react";
function ShowCourses({courseList}){
    const DataLabels = {
        'CourseName' : 'course-name',
        'CourseStudents' : 'course-students',
        'CoursePrice' : 'course-price',
        'CourseCategory' : 'course-category',
        'CourseCreationDate' : 'course-creation',
        'Course_ID' : 'course_id',
    }
    const [showModal,setShowUserModal] = useState(false);
    const toggleModal = () => {
        setShowUserModal(!showModal);
    }
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
            <td className="actions-cell">
              <div className="buttons right nowrap">
                <button className="button small green --jb-modal" type="button" variant="primary">
                  <span className="icon"><i className="mdi mdi-eye"></i></span>
                </button>
                <button className="button small red --jb-modal" onClick={() => setShowUserModal(!showModal)} data-target="sample-modal" type="button">
                  <span className="icon"><i className="mdi mdi-trash-can"></i></span>
                </button>
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
                    <h1>Are you sure, that you want to delete this Course ?</h1>
        <ul>
            <li>Yes</li>
            <li>No</li>
        </ul>
        </div>
          )}

        </>
    )
}



const ManagageCourses = withAllCourses(ShowCourses);

export default ManagageCourses;