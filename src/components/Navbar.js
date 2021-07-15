const Navbar = () => {
    return ( 
        <nav className="navbar navbar-expand-lg navbar-light bg-dark p-4 ">
              <a className="navbar-brand text-light pl-4" href="#">Navbar</a>
              <button className="navbar-toggler text-light" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse d-flex justify-content-end pr-5" id="navbarNavDropdown">
                <ul className="navbar-nav">
                  <li className="nav-item active">
                    <a className="nav-link text-light ml-auto" href="#">Home <span className="sr-only">(current)</span></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-light" href="#">Features</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-light" href="#">Pricing</a>
                  </li>
                  <li className="nav-item dropdown">
                  </li>
                </ul>
              </div>
        </nav>
     );
}
 
export default Navbar;