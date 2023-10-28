import SideBar from "../components/SideBar";
import SinglePost from "../components/SinglePost";
import "../styles/singlepostpage.css";

export default function SinglePostPage() {
  return (
    <div className="singlepostpage">
      <SinglePost />
      <SideBar />
    </div>
  );
}
