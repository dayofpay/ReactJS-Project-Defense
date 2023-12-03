import WithPanelLayout from "../../HOC/withPanelLayout";
import { useContext,useState,useEffect } from "react";
import AuthContext from "../../contexts/authContext";
import getAvatar from "../../utils/getAvatar";
export default function Profile(){
  const {username,email} = useContext(AuthContext);
  const [avatarUrl, setAvatarUrl] = useState('');

  useEffect(() => {
    const fetchAvatarUrl = async () => {
      try {
        const avatar = await getAvatar(email);
        setAvatarUrl(`https://gravatar.com/avatar/${avatar}.jpg`);
      } catch (error) {
        console.error('Error fetching avatar:', error);
      }
    };

    fetchAvatarUrl();
  }, [email]);
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
            <img src={avatarUrl} alt={username} className="rounded-full"/>
          </div>

          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input type="text" readOnly={true} value={username} className="input is-static"/>
            </div>
          </div>
          <hr/>
          <div className="field">
            <label className="label">E-mail</label>
            <div className="control">
              <input type="text" readOnly={true} value={email} className="input is-static"/>
            </div>
          </div>
        </div>
      </div>
    </div>
        </WithPanelLayout>

    )
}