import "../styles/usersettingspage.css";
import SideBar from "../components/SideBar";
export default function UserSettingsPage() {
  return (
    <>
      <div className="user-settings">
        <div className="settings-wrapper">
          <div className="settings-title">
            <span className="update-acc">Update Account</span>
            <span className="delete-acc">Delete Account</span>
          </div>
          <form className="settings-form">
            <label>Profile Picture</label>
            <div className="profile-picture">
              <img src="" alt="" />
              <label htmlFor="fileInput">
                <i className="pp-icon ri-image-add-fill"></i>
              </label>
              <input type="file" id="fileInput" style={{ display: "none" }} />
            </div>
            <label>Username</label>
            <input type="text" placeholder="abc" />
            <label>E-mail</label>
            <input type="email" placeholder="abc@xyz.com" />
            <label>Password</label>
            <input type="password" />
            <button className="settings-submit">Update</button>
          </form>
        </div>
        <SideBar />
      </div>
    </>
  );
}
