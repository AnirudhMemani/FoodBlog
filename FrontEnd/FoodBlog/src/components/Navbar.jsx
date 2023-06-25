import "../styles/Navbar.css";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const handleClick = (event) => {
    const links = document.getElementsByClassName("links")[0].getElementsByTagName("a");
    for (let i = 0; i < links.length; i++) {
      if (links[i] !== event.target) {
        links[i].classList.remove("active");
      }
    }
  };

  return (
    <div className="navbarcomponent">
      <div className="containervalues">
        <div className="navbar">
          <div className="logo">
            <h1>
              Stories<span>.</span>
            </h1>
          </div>
          <div className="links">
            <Link
              to="/home"
              className={location.pathname === "/home" ? "active" : ""}
              onClick={handleClick}
            >
              Home
            </Link>
            <Link
              to="/home/foods"
              className={location.pathname === "/home/foods" ? "active" : ""}
              onClick={handleClick}
            >
              Foods
            </Link>
            <Link
              to="/home/addFood"
              className={location.pathname === "/home/addFood" ? "active" : ""}
              onClick={handleClick}
            >
              Add Food
            </Link>
            <Link to="/" className={location.pathname === "/" ? "active" : ""} onClick={handleClick}>
              Log out
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;