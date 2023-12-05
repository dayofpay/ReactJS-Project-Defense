import withCourseList from "../../../HOC/withCourseList"
import { addStudent } from "../../../services/courseServices";
import convertTimestamp from "../../../utils/timeConvert";
import UserStats from "./Statistics/User"


function ShowDashboard({courseList}){
    const DataLabels = {
        'CourseName' : 'course-name',
        'CourseStudents' : 'course-students',
        'CoursePrice' : 'course-price',
        'CourseCategory' : 'course-category',
        'CourseCreationDate' : 'course-creation',
        'Course_ID' : 'course_id',
    }
    return (
        <>

<section className="is-hero-bar">
  <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
    <h1 className="title">
      Dashboard
    </h1>
    <button className="button light">Button</button>
  </div>
</section>
                    { /* Load User stats */ <UserStats/>}

    <div className="card has-table">
      <header className="card-header">
        <p className="card-header-title">
          <span className="icon"><i className="mdi mdi-account-multiple"></i></span>
          My courses
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
                <button className="button small green --jb-modal" data-target="sample-modal-2" type="button">
                  <span className="icon"><i className="mdi mdi-eye"></i></span>
                </button>
                <button className="button small red --jb-modal" data-target="sample-modal" type="button">
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
        <p>You are not in any course.</p>
      </div>
    </div>)}
      </div>
    </div>

        </>
    )
}

const MainDashboard = withCourseList(ShowDashboard);

export default MainDashboard;