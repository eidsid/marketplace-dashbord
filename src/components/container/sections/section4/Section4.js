import "./style.scss";
const Section4 = () => {
  return (
    <div className="top-card">
      <div className="top">
        <div className="card-name">Statics</div> <a href="#">View More</a>
      </div>
      <ul>
        <li className="bg">
          <div className="col">
            <p>ArtWork solid</p>
            <p>187</p>
          </div>
        </li>
        <li>
          <div className="col">
            <p>ArtWork canceled</p>
            <p>7</p>
          </div>
        </li>
        <li className="bg">
          <div className="col">
            <p>ArtWork Pending</p>
            <p>25</p>
          </div>
        </li>
        <li>
          <div className="col">
            <p>ArtWork Delivered</p>
            <p>200</p>
          </div>
        </li>
        <li className="bg">
          <div className="col">
            <p>Total Earning</p>
            <p>262 ETH</p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Section4;
