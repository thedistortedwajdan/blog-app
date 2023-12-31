import { Link } from "react-router-dom";
import "../styles/register.css";

export default function Register() {
  return (
    <>
      <div className="register">
        <form className="register-form">
          <input type="email" placeholder="E-mail" />
          <input type="password" placeholder="Password" />
          <button className="register-button">Register</button>
        </form>
        <button className="login-button">
          {" "}
          <Link className="login-button link" to="/login">
            Login?
          </Link>
        </button>
      </div>
    </>
  );
}
