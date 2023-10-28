import "../styles/singlepost.css";

export default function SinglePost() {
  return (
    <div className="singlepost">
      <div className="singlePostWrapper">
        <img
          src="https://images.pexels.com/photos/17892642/pexels-photo-17892642/free-photo-of-green-background.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          className="singlePostImg"
        />
        <h1 className="singlePostTitle">
          Title
          <div className="singlePostEdit">
            <i className="ri-edit-2-fill"></i>
            <i className="ri-delete-bin-fill"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author : <b>Name</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDescription">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit aliquam
          rem sunt possimus doloribus temporibus cum autem a perferendis optio?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam quos
          delectus neque molestiae voluptatem libero laboriosam nemo deserunt
          quam minus! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Sit aliquam rem sunt possimus doloribus temporibus cum autem a
          perferendis optio? Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Aperiam quos delectus neque molestiae voluptatem libero
          laboriosam nemo deserunt quam minus! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Sit aliquam rem sunt possimus doloribus
          temporibus cum autem a perferendis optio? Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Aperiam quos delectus neque molestiae
          voluptatem libero laboriosam nemo deserunt quam minus! Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Sit aliquam rem sunt
          possimus doloribus temporibus cum autem a perferendis optio? Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Aperiam quos
          delectus neque molestiae voluptatem libero laboriosam nemo deserunt
          quam minus! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Sit aliquam rem sunt possimus doloribus temporibus cum autem a
          perferendis optio? Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Aperiam quos delectus neque molestiae voluptatem libero
          laboriosam nemo deserunt quam minus! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Sit aliquam rem sunt possimus doloribus
          temporibus cum autem a perferendis optio? Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Aperiam quos delectus neque molestiae
          voluptatem libero laboriosam nemo deserunt quam minus!
        </p>
      </div>
    </div>
  );
}
