import UserStats from "./Statistics/User"

export default function MainDashboard(){
    return (
        <>
                <section className="is-title-bar">
  <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
    <ul>
      <li>Admin</li>
      <li>Dashboard</li>
    </ul>
    <a href="https://justboil.me/" target="_blank" className="button blue">
      <span className="icon"><i className="mdi mdi-credit-card-outline"></i></span>
      <span>Premium Demo</span>
    </a>
  </div>
</section><section className="is-hero-bar">
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
        <table>
          <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Company</th>
            <th>City</th>
            <th>Progress</th>
            <th>Created</th>
            <th></th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td className="image-cell">
              <div className="image">
                <img src="https://avatars.dicebear.com/v2/initials/rebecca-bauch.svg" className="rounded-full"/>
              </div>
            </td>
            <td data-label="Name">Rebecca Bauch</td>
            <td data-label="Company">Daugherty-Daniel</td>
            <td data-label="City">South Cory</td>
            <td data-label="Progress" className="progress-cell">
              <progress max="100" value="79">79</progress>
            </td>
            <td data-label="Created">
              <small className="text-gray-500" title="Oct 25, 2021">Oct 25, 2021</small>
            </td>
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
          </tr>
          
          </tbody>
        </table>
      </div>
    </div>

        </>
    )
}