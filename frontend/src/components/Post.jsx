import "../styles/post.css";

export default function Post() {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://images.pexels.com/photos/1785493/pexels-photo-1785493.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
      />
      <div className="postInfo">
        <div className="postCategories">
          <span className="postCategory">Music</span>
          <span className="postCategory">Life</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor sit amet</span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDescription">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores labore
        ipsam quis sit reiciendis asperiores iusto quas earum fugiat fuga.
      </p>
    </div>
  );
}
