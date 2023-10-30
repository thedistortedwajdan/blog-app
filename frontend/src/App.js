import Navbar from "./components/Navbar";
import CreateBlog from "./screens/CreateBlog";
import Home from "./screens/Home";
import SinglePostPage from "./screens/SinglePostPage";
import UserSettingsPage from "./screens/UserSettingsPage";

function App() {
  return (
    <>
      <Navbar />
      <UserSettingsPage />
    </>
  );
}

export default App;
