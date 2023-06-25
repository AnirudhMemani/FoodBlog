import { Link } from "react-router-dom";
import axios from "axios";
import { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/AddFood.css";

const AddFood = () => {
  let navigate = useNavigate();
  let title = useRef();
  let author = useRef();
  let imageURL = useRef();

  useEffect(() => {
    // Select the element with the ::before pseudo-element
    const element = document.querySelector(".buttonzz");

    // Add event listener for mouseleave
    element.addEventListener("mouseleave", () => {
      // Set the new left offset to 100% by updating the CSS variable
      element.style.setProperty("--before-left-offset", "100%");
    });

    return () => {
      // Clean up by removing the event listener when the component unmounts
      element.removeEventListener("mouseleave", () => {
        element.style.setProperty("--before-left-offset", "100%");
      });
    };
  }, []);

  let handleFoodSubmit = (e) => {
    e.preventDefault();
    let food = {
      title: title.current.value,
      author: author.current.value,
      imageURL: imageURL.current.value,
    };

    let message = document.querySelector(".message");

    axios
      .post("http://localhost:4000/home/addFood", food)
      .then((res) => {
        if (res.status === 200) {
          message.innerHTML = res.data.message;
          message.style.color = "#0cf10c";
          setTimeout(() => {
            message.innerHTML = "";
            navigate("/home");
          }, 1500);
        }
      })
      .catch((err) => {
        console.log(err);
        message.innerHTML = err.response.data.message;
        message.style.color = "#ff0000";
      });
  };

  return (
    <div className="addfood">
      <div className="foodie">
        <div className="imgfood"></div>
        <div className="formbox">
          <div className="form">
            <form className="formbhai" onSubmit={handleFoodSubmit}>
              <input
                type="text"
                className="inputboxes"
                placeholder="Title"
                required
                ref={title}
              />
              <input
                type="text"
                className="inputboxes"
                placeholder="Author"
                required
                ref={author}
              />
              <input
                type="url"
                className="inputboxes"
                placeholder="Image"
                required
                ref={imageURL}
              />
              <p className="message ml-3" style={{ color: "#fff" }}></p>
              <div className="btngroup">
                <button onClick={SubmitEvent} className="buttonzz">
                  Add Food
                </button>
                <Link to="/home" className="buttonzz">
                  Go Back
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddFood;
