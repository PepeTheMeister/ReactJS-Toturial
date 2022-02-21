import { Link } from "react-router-dom";

function mainNav() {
  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-danger">
      <a className="text-light navbar-brand ms-5">My Meetups</a>
      <div className="container-fluid">
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav ">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                AllMeetups
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/newmeetup">
                New Meetup
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/favourites">
                Favourites
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default mainNav;
