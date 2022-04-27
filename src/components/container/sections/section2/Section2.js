import "./style.scss";
import bannerimage from "assets/imgs/1.jpg";
const Section2 = () => {
  const bannerBGimage = {
    background: `url(${bannerimage})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center ",
    backgroundSize: "cover",
    backgroundBlendMode: "multiply",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
  };
  return (
    <div className="banner" style={bannerBGimage}>
      <div className="content">
        <h1 className="title">Round Hall</h1>
        <span className="price">1.5 ETH</span>
        <p className="publisherName">Uploaded by Eid sayed</p>
        <div className="offer">
          <button>Buy Now</button>
          <span>
            <p>Ending in</p>
            <p>2d 15h 20m</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Section2;
