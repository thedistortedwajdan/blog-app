import "../styles/header.css";
export default function Header() {
  return (
    <div className="header">
      <div className="titles">
        <span className="smallTitle">small title</span>
        <span className="largeTitle">large title</span>
      </div>
      <img
        className="headerImg"
        src="https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
      />
    </div>
  );
}
