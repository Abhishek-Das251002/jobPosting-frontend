import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="bg-primary fixedNavbar">
        <nav className="navbar navbar-expand-lg container" data-bs-theme="dark">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">Inter House</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <NavLink className="nav-link" to="/">Job Postings</NavLink>
              <NavLink className="nav-link" to="/postJob">Post a Job</NavLink>
            </div>
          </div>
        </div>
      </nav>
      </div>
    )
}

export default Navbar;