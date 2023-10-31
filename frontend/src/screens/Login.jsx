import "../styles/login.css";

export default function Login() {
  return (
    <>
      <div className="login">
        <form className="login-form">
          <input type="email" placeholder="E-mail" />
          <input type="password" placeholder="Password" />
          <button className="login-button">Login</button>
        </form>
        <button className="register-button">Register</button>
      </div>
    </>
  );
}
