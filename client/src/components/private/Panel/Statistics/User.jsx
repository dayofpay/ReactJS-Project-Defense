
import withUserCount from "../../../../HOC/withUserCount";
import withUserCourseList from "../../../../HOC/withUserCourseList";
function ShowUserStats({courseList,userCount}){
    // this will be the statistics that every user will see in their dashboard ...
    return(
        <section className="section main-section">
    <div className="grid gap-6 grid-cols-1 md:grid-cols-3 mb-6">
      <div className="card">
        <div className="card-content">
          <div className="flex items-center justify-between">
            <div className="widget-label">
              <h3>
                My Courses
              </h3>
              <h1>
                {courseList.length}
              </h1>
            </div>
            <span className="icon widget-icon text-green-500"><i className="mdi mdi-book mdi-48px"></i></span>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-content">
          <div className="flex items-center justify-between">
            <div className="widget-label">
              <h3>
                Sales
              </h3>
              <h1>
                $7,770
              </h1>
            </div>
            <span className="icon widget-icon text-blue-500"><i className="mdi mdi-cart-outline mdi-48px"></i></span>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-content">
          <div className="flex items-center justify-between">
            <div className="widget-label">
              <h3>
                Registered Users
              </h3>
              <h1>
                {userCount}
              </h1>
            </div>
            <span className="icon widget-icon text-red-500"><i className="mdi mdi-finance mdi-48px"></i></span>
          </div>
        </div>
      </div>
    </div>
    </section>
    )
}

const UserStats = withUserCount(withUserCourseList(ShowUserStats))
export default UserStats;