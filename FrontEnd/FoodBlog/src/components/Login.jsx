import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import "../styles/Login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  let username = useRef();
  let password = useRef();
  let navigate = useNavigate();

  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible((prevVisible) => !prevVisible);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    let user = {
      username: username.current.value,
      email: username.current.value,
      password: password.current.value,
    };
    let message = document.getElementById("message");
    axios.post("http://localhost:4000/", user).then((res) => {
      if (res.status === 200) {
        message.innerHTML = res.data.message;
        message.style.color = "#0cf10c";
        setTimeout(() => {
          message.innerHTML = "";
          navigate("/home");
        }, 1500);
      }
    }).catch((err) => {
      message.innerHTML = err.response.data.message;
    });
  };
  return (
    <div
      className="img js-fullheight"
      style={{
        backgroundImage: `url(${"../src/images/silhouette-mountain-starry-sky-night-time-purple-sky-2880x1800-4277.jpg"})`,
        backgroundRepeat: "no-repeat",
        height: "100vh",
      }}
    >
      <section className="ftco-section" style={{ height: "100vh", overflow: "hidden" }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6 text-center mb-5">
              <h2 className="heading-section">Login Page</h2>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-6 col-lg-4">
              <div className="login-wrap p-0">
                <h3 className="mb-4 text-center">Have an account?</h3>
                <form onSubmit={handleLogin} className="signin-form">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Username or Email"
                      ref={username}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      id="password-field"
                      type={passwordVisible ? "text" : "password"}
                      className="form-control"
                      placeholder="Password"
                      ref={password}
                      required
                    />
                    <span
                      onClick={togglePasswordVisibility}
                      className={`fa fa-fw ${
                        passwordVisible ? "fa-eye-slash" : "fa-eye"
                      } field-icon toggle-password`}
                    ></span>
                  </div>
                  <div className="form-group">
                    <button
                      type="submit"
                      className="form-control btn btn-primary submit px-3"
                    >
                      Sign In
                    </button>
                  </div>
                  <div className="form-group d-md-flex">
                    <div className="ml-3">
                      <a
                        id="message"
                        style={{ color: "red" }}
                      ></a>
                    </div>
                  </div>
                </form>
                <p className="w-100 text-center">
                  &mdash; Not a user yet? &mdash;
                </p>
                <div className="social d-flex text-center">
                  <Link to={"/signup"} className="px-2 py-2 mr-md-1 rounded">
                    <span className="ion-logo-facebook mr-2"></span> Signup
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;