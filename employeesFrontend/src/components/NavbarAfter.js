import { Link } from "react-router-dom";
function NavbarAfter() {
    return (

        <nav class="navbar navbar-expand-lg navbar-dark bg-dark" >
            <div class="container-fluid" style={{ textDecoration: "none" }}>
                <Link class="navbar-brand" to="#" >Employee Registration</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent" style={{ textDecoration: "none" }}>
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/about">About us</a>
                        </li>
                    </ul>

                    <form className="d-flex" role="search">
                        <Link to='/Login'>
                            <button className="btn btn-success" type="submit" style={{ marginLeft: "3px", borderRadius: "20px" }}>Log out</button>
                        </Link>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default NavbarAfter;
