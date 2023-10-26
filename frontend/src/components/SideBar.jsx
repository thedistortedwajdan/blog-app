import "../styles/sidebar.css";

export default function SideBar() {
  return (
    <div className="sidebar">
      <div className="sideBarItem">
        <span className="sideBarTitle">About Me</span>
        <img
          src="https://images.pexels.com/photos/3393375/pexels-photo-3393375.jpeg?auto=compress&cs=tinysrgb&w=300"
          alt=""
          className="sideBarImg"
        />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A ducimus ipsa quas quasi, et est.</p>
      </div>
      <div className="sideBarItem">
        <span className="sideBarTitle">Categories</span>
        <ul className="sideBarList">
          <li className="sideBarListItem">Life</li>
          <li className="sideBarListItem">Music</li>
          <li className="sideBarListItem">Style</li>
          <li className="sideBarListItem">Sport</li>
          <li className="sideBarListItem">Tech</li>
          <li className="sideBarListItem">Cinema</li>
        </ul>
      </div>
    </div>
  );
}
