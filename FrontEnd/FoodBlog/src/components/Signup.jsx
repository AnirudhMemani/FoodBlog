import { useRef } from "react";
import "../styles/Signup.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import image from "../images/fantasy-world-wallpaper-2048x1152_49.jpg";
import { Link } from "react-router-dom";

const Signup = () => {
  let navigate = useNavigate();
  let username = useRef();
  let email = useRef();
  let password = useRef();
  let confirm_password = useRef();

  let handleConfirmPassword = () => {
    if (password.current.value !== confirm_password.current.value) {
      confirm_password.current.setCustomValidity("Password doesn't match");
    } else {
      confirm_password.current.setCustomValidity("");
    }
  };

  let handleSignup = (e) => {
    e.preventDefault();
    let message = document.getElementById("message");
    let data = {
      username: username.current.value,
      email: email.current.value,
      password: password.current.value,
      confirm_password: confirm_password.current.value,
    };

    axios
      .post("http://localhost:4000/signup", data)
      .then((res) => {
        if (res.status === 200) {
          message.innerHTML = res.data.message;
          message.style.color = "#0cf10c";
          setTimeout(() => {
            message.innerHTML = "";
            navigate("/");
          }, 1500);
        }
      })
      .catch((err) => {
        message.innerHTML = err.response.data.message;
        message.style.color = "#ff0000";
      });
  };

  return (
    <div className="signup">
      <div
        className="img js-fullheight"
        style={{
          backgroundImage: `url(${image})`,
          backgroundRepeat: "no-repeat",
          height: "100vh",
        }}
      >
        <section
          className="ftco-section"
          style={{ height: "100vh", overflow: "hidden" }}
        >
          <div className="container mt-5">
            <div className="row justify-content-center">
              <div className="col-md-6 col-lg-4">
                <div className="login-wrap p-0">
                  <h3 className="mb-4 text-center">Create an account!</h3>
                  <form className="signin-form" onSubmit={handleSignup}>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Username"
                        ref={username}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <input
                        id="password-field"
                        type="email"
                        className="form-control"
                        placeholder="Email"
                        ref={email}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <input
                        id="password-field"
                        type="password"
                        className="form-control"
                        placeholder="Password"
                        ref={password}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <input
                        id="password-field"
                        type="password"
                        className="form-control"
                        placeholder="Confirm Password"
                        onInput={handleConfirmPassword}
                        ref={confirm_password}
                        required
                      />
                    </div>
                    <div className="form-group d-md-flex">
                      <div className="ml-2">
                        <a id="message" href="#" style={{ color: "red" }}></a>
                      </div>
                    </div>
                    <div className="form-group">
                      <button
                        type="submit"
                        className="form-control btn btn-primary submit px-3"
                      >
                        Sign Up
                      </button>
                    </div>
                  </form>
                  <p className="w-100 text-center">
                    &mdash; Already have an account? &mdash;
                  </p>
                  <div className="social d-flex text-center">
                    <Link to="/" className="px-2 py-2 mr-md-1 rounded">
                      <span className="ion-logo-facebook mr-2"></span> Login
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Signup;
