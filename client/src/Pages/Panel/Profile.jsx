import Titlebar from "../../components/private/Panel/Titlebar";
import Navigation from "../../components/private/Panel/Navigation";
import Sidebar from "../../components/private/Panel/Sidebar";
import WithPanelLayout from "../../HOC/withPanelLayout";

export default function Profile(){
    return(

        <WithPanelLayout>
           <section className="is-hero-bar">
  <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
    <h1 className="title">
      My Profile
    </h1>

  </div>
    </section>  
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 mb-6">
      <div className="card">
        <header className="card-header">
          <p className="card-header-title">
            <span className="icon"><i className="mdi mdi-account"></i></span>
            Profile
          </p>
        </header>
        <div className="card-content">
          <div className="image w-48 h-48 mx-auto">
            <img src="https://avatars.dicebear.com/v2/initials/john-doe.svg" alt="John Doe" className="rounded-full"/>
          </div>

          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input type="text" readOnly={true} value="John Doe" className="input is-static"/>
            </div>
          </div>
          <hr/>
          <div className="field">
            <label className="label">E-mail</label>
            <div className="control">
              <input type="text" readOnly={true} value="user@example.com" className="input is-static"/>
            </div>
          </div>
        </div>
      </div>
    </div>
        </WithPanelLayout>

    )
}