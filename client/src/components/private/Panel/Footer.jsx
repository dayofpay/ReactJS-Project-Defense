export default function Footer(){
    return (
        <>
        <footer className="footer">
  <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0">
    <div className="flex items-center justify-start space-x-3">
      <div>
        © 2023, ReactJS Project Defense @ Vladislav Ivanov
      </div>

      <div>
        <p>Project Developed by : <a href="https://github.com/dayofpay" target="_blank">Vladislav Ivanov</a></p>
      </div>
      <a href='https://github.com/dayofpay/ReactJS-Project-Defense' target="_blank"><img alt='GitHub' src='https://img.shields.io/badge/VIEW_PROJECT-100000?style=for-the-badge&logo=GitHub&logoColor=white&labelColor=black&color=black'/></a>
    </div>
    <a href="https://softuni.bg">
      <img src="https://nakov.com/wp-content/uploads/2014/01/Software-University-Logo-blue-horizontal.png" alt="" style={{height:"95px"}} />
    </a>

  </div>
</footer>

        </>
    )
}