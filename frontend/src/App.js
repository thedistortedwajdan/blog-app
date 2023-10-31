import Navbar from "./components/Navbar";
import CreateBlog from "./screens/CreateBlog";
import Home from "./screens/Home";
import Login from "./screens/Login";
import Register from "./screens/Register";
import SinglePostPage from "./screens/SinglePostPage";
import UserSettingsPage from "./screens/UserSettingsPage";

function App() {
  return (
    <>
      <Navbar />
      <Register />
    </>
  );
}

export default App;
