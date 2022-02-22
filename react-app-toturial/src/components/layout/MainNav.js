import { useContext } from "react";
import { Link } from "react-router-dom";

import classes from "../../static/MainNav.module.css";
import Context from "../../store/Context";


function MainNav() {

  const favouriteCtx = useContext(Context);



  return (
    <header>
    <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
      <h2 className="text-light navbar-brand ms-5">My Meetups</h2>
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
                <span className="badge bg-light text-danger">{favouriteCtx.totalFavourites}</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </header>
  );
}

export default MainNav;
