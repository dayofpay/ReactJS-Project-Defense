export default function AboutHeader(){
    return (
        <div className="jumbotron jumbotron-fluid page-header position-relative overlay-bottom" style={{marginBottom: "90px"}}>
        <div className="container text-center py-5">
            <h1 className="text-white display-1">About</h1>
            <div className="d-inline-flex text-white mb-5">
                <p className="m-0 text-uppercase"><a className="text-white" href="">Home</a></p>
                <i className="fa fa-angle-double-right pt-1 px-3"></i>
                <p className="m-0 text-uppercase">About</p>
            </div>
            <div className="mx-auto mb-5" style={{width: "100%;", maxWidth:"600px"}}>
                <div className="input-group">
                    <div className="input-group-prepend">
                        <button className="btn btn-outline-light bg-white text-body px-4 dropdown-toggle" type="button" data-toggle="dropdown"
                            aria-haspopup="true" aria-expanded="false">Courses</button>
                        <div className="dropdown-menu">
                            <a className="dropdown-item" href="#">Courses 1</a>
                            <a className="dropdown-item" href="#">Courses 2</a>
                            <a className="dropdown-item" href="#">Courses 3</a>
                        </div>
                    </div>
                    <input type="text" className="form-control border-light" style={{padding: "30px 25px"}} placeholder="Keyword"/>
                    <div className="input-group-append">
                        <button className="btn btn-secondary px-4 px-lg-5">Search</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}