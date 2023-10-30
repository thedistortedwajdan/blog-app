import "../styles/createblog.css";

export default function CreateBlog() {
  return (
    <>
      <div className="createblog">
        <form className="blog-form">
          <div className="form-group">
            <label htmlFor="image">
              <i class="ri-image-add-fill"></i>
            </label>
            <input type="file" id="image" style={{ display: "none" }} />
            <input type="text" placeholder="Title" className="blog-input" />
          </div>
          <div className="form-group">
            <textarea
              placeholder="Tell your story..."
              className="blog-input blog-text"
            ></textarea>
          </div>
          <button type="submit" className="submit">
            Publish
          </button>
        </form>
      </div>
    </>
  );
}
