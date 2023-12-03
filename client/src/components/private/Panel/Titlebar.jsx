export default function Titlebar(){
    return (
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
</section>
    )
}