import { Link } from "react-router-dom";
import "../styles/navbar.css";

export default function Navbar() {
  const user = false;
  return (
    <div className="nav">
      <div className="navLeft">
        <i className="nav-icons ri-github-fill"></i>
        <i className="nav-icons ri-linkedin-box-fill"></i>
        <i className="nav-icons ri-global-line"></i>
      </div>
      <div className="navCenter">
        <ul className="navCenterlist">
          <li className="navListItem">
            <Link className="link" to="/">
              Home
            </Link>
          </li>
          <li className="navListItem">
            <Link className="link" to="/">
              About
            </Link>
          </li>
          <li className="navListItem">
            <Link className="link" to="/">
              Contact
            </Link>
          </li>
          <li className="navListItem">
            <Link className="link" to="/createBlog">
              Write
            </Link>
          </li>
          <li className="navListItem">
            <Link className="link" to="/">
              Logout
            </Link>
          </li>
        </ul>
      </div>
      <div className="navRight">
        {user ? (
          <img
            className="navImg"
            src="https://images.pexels.com/photos/5076520/pexels-photo-5076520.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        ) : (
          <>
            {" "}
            <ul className="navCenterlist">
              <li className="navListItem">
                {" "}
                <Link className="link" to="/login">
                  Login
                </Link>
              </li>
              <li className="navListItem">
                {" "}
                <Link className="link" to="/register">
                  Register
                </Link>
              </li>
            </ul>
          </>
        )}
        <i className="nav-icons ri-search-line"></i>
      </div>
    </div>
  );
}
