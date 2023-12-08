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
           
           
        </div>
    </div>
    )
}