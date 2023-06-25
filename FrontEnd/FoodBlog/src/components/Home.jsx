import "../styles/home.css";

const Home = () => {
  let image = "https://preview.colorlib.com/theme/stories/images/bg_2.jpg.webp";
  return (
    <div className="home">
      <div className="container12">
        <div className="content">
          <div className="contentvalues">
            <div
              className="imghome"
              style={{
                backgroundImage: `url(${image})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
            <div className="data">
              <div className="datavalues">
                <p>Featured Post</p>
                <h1>I am A Blogger & I Love Foods</h1>
                <p>
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia
                </p>
                <button>Read More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
