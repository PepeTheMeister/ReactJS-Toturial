import { Link } from "react-router-dom";

function mainNav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
        <Link className="nav-link active" to="/">AllMeetups</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/newmeetup">New Meetup</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="/favourites">Favourites</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
  );
}

export default mainNav;
