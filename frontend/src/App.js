import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

import Navbar from "./components/Navbar";
import CreateBlog from "./screens/CreateBlog";
import Home from "./screens/Home";
import Login from "./screens/Login";
import Register from "./screens/Register";
import SinglePostPage from "./screens/SinglePostPage";
import UserSettingsPage from "./screens/UserSettingsPage";

function App() {
  const user = false;
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={user ? <Home /> : <Login />} />
          <Route
            exact
            path="/register"
            element={user ? <Home /> : <Register />}
          />
          <Route
            exact
            path="/createBlog"
            element={user ? <CreateBlog /> : <Login />}
          />
          <Route exact path="/post/:postid" element={<SinglePostPage />} />
          <Route
            exact
            path="/settings"
            element={user ? <UserSettingsPage /> : <Login />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
