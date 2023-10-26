import "../styles/navbar.css";

export default function Navbar() {
  return (
    <div className="nav">
      <div className="navLeft">
        <i class="nav-icons ri-github-fill"></i>
        <i class="nav-icons ri-linkedin-box-fill"></i>
        <i class="nav-icons ri-global-line"></i>
      </div>
      <div className="navCenter">
        <ul className="navCenterlist">
          <li className="navListItem">Home</li>
          <li className="navListItem">About</li>
          <li className="navListItem">Contact</li>
          <li className="navListItem">Write</li>
          <li className="navListItem">Logout</li>
        </ul>
      </div>
      <div className="navRight">
        <img
          className="navImg"
          src="https://images.pexels.com/photos/5076520/pexels-photo-5076520.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <i class="nav-icons ri-search-line"></i>
      </div>
    </div>
  );
}
