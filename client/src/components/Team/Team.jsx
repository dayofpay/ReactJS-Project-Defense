import withCarousel from "../../HOC/withCarousel"

function Team(){
    return (
        <div className="container-fluid py-5">
        <div className="container py-5">
            <div className="section-title text-center position-relative mb-5">
                <h6 className="d-inline-block position-relative text-secondary text-uppercase pb-2">Instructors</h6>
                <h1 className="display-4">Meet Our Instructors</h1>
            </div>
            <div className="owl-carousel team-carousel position-relative" style={{padding: "0 30px"}}>
                <div className="team-item">
                    <img className="img-fluid w-100" src="img/team-1.jpg" alt=""/>
                    <div className="bg-light text-center p-4">
                        <h5 className="mb-3">Instructor Name</h5>
                        <p className="mb-2">Web Design & Development</p>
                        <div className="d-flex justify-content-center">
                            <a className="mx-1 p-1" href="#"><i className="fab fa-twitter"></i></a>
                            <a className="mx-1 p-1" href="#"><i className="fab fa-facebook-f"></i></a>
                            <a className="mx-1 p-1" href="#"><i className="fab fa-linkedin-in"></i></a>
                            <a className="mx-1 p-1" href="#"><i className="fab fa-instagram"></i></a>
                            <a className="mx-1 p-1" href="#"><i className="fab fa-youtube"></i></a>
                        </div>
                    </div>
                </div>
                <div className="team-item">
                    <img className="img-fluid w-100" src="img/team-2.jpg" alt=""/>
                    <div className="bg-light text-center p-4">
                        <h5 className="mb-3">Instructor Name</h5>
                        <p className="mb-2">Web Design & Development</p>
                        <div className="d-flex justify-content-center">
                            <a className="mx-1 p-1" href="#"><i className="fab fa-twitter"></i></a>
                            <a className="mx-1 p-1" href="#"><i className="fab fa-facebook-f"></i></a>
                            <a className="mx-1 p-1" href="#"><i className="fab fa-linkedin-in"></i></a>
                            <a className="mx-1 p-1" href="#"><i className="fab fa-instagram"></i></a>
                            <a className="mx-1 p-1" href="#"><i className="fab fa-youtube"></i></a>
                        </div>
                    </div>
                </div>
                <div className="team-item">
                    <img className="img-fluid w-100" src="img/team-3.jpg" alt=""/>
                    <div className="bg-light text-center p-4">
                        <h5 className="mb-3">Instructor Name</h5>
                        <p className="mb-2">Web Design & Development</p>
                        <div className="d-flex justify-content-center">
                            <a className="mx-1 p-1" href="#"><i className="fab fa-twitter"></i></a>
                            <a className="mx-1 p-1" href="#"><i className="fab fa-facebook-f"></i></a>
                            <a className="mx-1 p-1" href="#"><i className="fab fa-linkedin-in"></i></a>
                            <a className="mx-1 p-1" href="#"><i className="fab fa-instagram"></i></a>
                            <a className="mx-1 p-1" href="#"><i className="fab fa-youtube"></i></a>
                        </div>
                    </div>
                </div>
                <div className="team-item">
                    <img className="img-fluid w-100" src="img/team-4.jpg" alt=""/>
                    <div className="bg-light text-center p-4">
                        <h5 className="mb-3">Instructor Name</h5>
                        <p className="mb-2">Web Design & Development</p>
                        <div className="d-flex justify-content-center">
                            <a className="mx-1 p-1" href="#"><i className="fab fa-twitter"></i></a>
                            <a className="mx-1 p-1" href="#"><i className="fab fa-facebook-f"></i></a>
                            <a className="mx-1 p-1" href="#"><i className="fab fa-linkedin-in"></i></a>
                            <a className="mx-1 p-1" href="#"><i className="fab fa-instagram"></i></a>
                            <a className="mx-1 p-1" href="#"><i className="fab fa-youtube"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

const EnhancedTeam = withCarousel(Team, ".team-carousel");
export default EnhancedTeam;
