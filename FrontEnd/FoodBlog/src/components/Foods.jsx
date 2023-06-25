import "../styles/Foods.css";
import { useState, useEffect } from "react";
import axios from "axios";

const Foods = () => {
  let [foods, setFoods] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/home/foods")
      .then((res) => {
        setFoods(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  const currentDate = new Date();
  const month = currentDate.toLocaleString("default", { month: "long" });
  const year = currentDate.getFullYear();
  const date = currentDate.getDate();
  return (
    <div className="foods">
      <h1>
        Trending Stories<span className="dot">.</span>
      </h1>
      <div className="foods-container">
        {foods.map((food) => {
          return (
            <div className="foods-card" key={food._id}>
              <div className="effectimg">
                <img src={food.imageURL} alt="" />
              </div>
              <div className="authorsection">
                <p>{food.author} </p>
                <hr className="saperator" />
                <span>{`${month} ${date}, ${year}`}</span>
              </div>
              <h2>{food.title}</h2>
              <button>Read More</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Foods;
