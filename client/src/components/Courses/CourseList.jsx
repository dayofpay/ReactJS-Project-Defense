import withCarousel from '../../HOC/withCarousel';


function CourseList() {

    return (

    <div className="container-fluid px-0 py-5">
        <div className="row mx-0 justify-content-center pt-5">
            <div className="col-lg-6">
                <div className="section-title text-center position-relative mb-4">
                    <h6 className="d-inline-block position-relative text-secondary text-uppercase pb-2">Our Courses</h6>
                    <h1 className="display-4">Checkout New Releases Of Our Courses</h1>
                </div>
            </div>
        </div>
        <div className="owl-carousel courses-carousel">
            <div className="courses-item position-relative">
                <img className="img-fluid" src="img/courses-1.jpg" alt=""/>
                <div className="courses-text">
                    <h4 className="text-center text-white px-3">Web design & development courses for beginners</h4>
                    <div className="border-top w-100 mt-3">
                        <div className="d-flex justify-content-between p-4">
                            <span className="text-white"><i className="fa fa-user mr-2"></i>Jhon Doe</span>
                            <span className="text-white"><i className="fa fa-star mr-2"></i>4.5 <small>(250)</small></span>
                        </div>
                    </div>
                    <div className="w-100 bg-white text-center p-4" >
                        <a className="btn btn-primary" href="detail.html">Course Detail</a>
                    </div>
                </div>
            </div>
            <div className="courses-item position-relative">
                <img className="img-fluid" src="img/courses-2.jpg" alt=""/>
                <div className="courses-text">
                    <h4 className="text-center text-white px-3">Web design & development courses for beginners</h4>
                    <div className="border-top w-100 mt-3">
                        <div className="d-flex justify-content-between p-4">
                            <span className="text-white"><i className="fa fa-user mr-2"></i>Jhon Doe</span>
                            <span className="text-white"><i className="fa fa-star mr-2"></i>4.5 <small>(250)</small></span>
                        </div>
                    </div>
                    <div className="w-100 bg-white text-center p-4" >
                        <a className="btn btn-primary" href="detail.html">Course Detail</a>
                    </div>
                </div>
            </div>
            <div className="courses-item position-relative">
                <img className="img-fluid" src="img/courses-3.jpg" alt=""/>
                <div className="courses-text">
                    <h4 className="text-center text-white px-3">Web design & development courses for beginners</h4>
                    <div className="border-top w-100 mt-3">
                        <div className="d-flex justify-content-between p-4">
                            <span className="text-white"><i className="fa fa-user mr-2"></i>Jhon Doe</span>
                            <span className="text-white"><i className="fa fa-star mr-2"></i>4.5 <small>(250)</small></span>
                        </div>
                    </div>
                    <div className="w-100 bg-white text-center p-4" >
                        <a className="btn btn-primary" href="detail.html">Course Detail</a>
                    </div>
                </div>
            </div>
            <div className="courses-item position-relative">
                <img className="img-fluid" src="img/courses-4.jpg" alt=""/>
                <div className="courses-text">
                    <h4 className="text-center text-white px-3">Web design & development courses for beginners</h4>
                    <div className="border-top w-100 mt-3">
                        <div className="d-flex justify-content-between p-4">
                            <span className="text-white"><i className="fa fa-user mr-2"></i>Jhon Doe</span>
                            <span className="text-white"><i className="fa fa-star mr-2"></i>4.5 <small>(250)</small></span>
                        </div>
                    </div>
                    <div className="w-100 bg-white text-center p-4" >
                        <a className="btn btn-primary" href="detail.html">Course Detail</a>
                    </div>
                </div>
            </div>
            <div className="courses-item position-relative">
                <img className="img-fluid" src="img/courses-5.jpg" alt=""/>
                <div className="courses-text">
                    <h4 className="text-center text-white px-3">Web design & development courses for beginners</h4>
                    <div className="border-top w-100 mt-3">
                        <div className="d-flex justify-content-between p-4">
                            <span className="text-white"><i className="fa fa-user mr-2"></i>Jhon Doe</span>
                            <span className="text-white"><i className="fa fa-star mr-2"></i>4.5 <small>(250)</small></span>
                        </div>
                    </div>
                    <div className="w-100 bg-white text-center p-4" >
                        <a className="btn btn-primary" href="detail.html">Course Detail</a>
                    </div>
                </div>
            </div>
            <div className="courses-item position-relative">
                <img className="img-fluid" src="img/courses-6.jpg" alt=""/>
                <div className="courses-text">
                    <h4 className="text-center text-white px-3">Web design & development courses for beginners</h4>
                    <div className="border-top w-100 mt-3">
                        <div className="d-flex justify-content-between p-4">
                            <span className="text-white"><i className="fa fa-user mr-2"></i>Jhon Doe</span>
                            <span className="text-white"><i className="fa fa-star mr-2"></i>4.5 <small>(250)</small></span>
                        </div>
                    </div>
                    <div className="w-100 bg-white text-center p-4" >
                        <a className="btn btn-primary" href="detail.html">Course Detail</a>
                    </div>
                </div>
            </div>
        </div>

    </div>

    )
}

const EnchancedCourses = withCarousel(CourseList,'.courses-carousel');

export default EnchancedCourses