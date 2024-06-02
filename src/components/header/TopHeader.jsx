import { Link } from "react-router-dom";

function TopHeader() {
  return (
    <div className="navigation-container">
      <div className="header-logo">
        <img src={"src/assets/logo.png"} alt="" className="header-logo" />
      </div>
      <div className="nav-link">
        <ol className="nav-ol-link">
          <li className="heade r-nav-item">
            <Link to="/">Home</Link>
          </li>
          <li className="header-nav-item">
            <Link to="/leadership">Leadership</Link>
          </li>
          <li className="header-nav-item">
            <Link to="/tracts">Tracts</Link>
          </li>
          <li className="header-nav-item">
            <Link to="/event">Events</Link>
          </li>
        </ol>
      </div>
      <div className="header-btn">
        <button className="register-btn">Join Us</button>
      </div>
    </div>
  );
}

export default TopHeader;
