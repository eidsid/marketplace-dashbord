import "./style.scss";
import seller1 from "assets/imgs/seller1.jpg";
import seller2 from "assets/imgs/seller2.jpg";
import seller3 from "assets/imgs/seller3.jpg";
import seller4 from "assets/imgs/seller4.jpg";
import seller5 from "assets/imgs/seller5.jpg";
const Section5 = () => {
  return (
    <div className="bottom-card">
      <div className="top">
        <div className="card-name">Top seller</div> <a href="#">View More</a>
      </div>
      <ul>
        <li>
          <div className="col">
            <div>
              <img src={seller1} alt="seller imge" />
              <p>
                jane Cooper
                <span>@jane</span>
              </p>
            </div>
            <button>Follow</button>
          </div>
        </li>
        <li>
          <div className="col">
            <div>
              <img src={seller2} alt="seller imge" />
              <p>
                Ariene Mccoy
                <span>@Ariene</span>
              </p>
            </div>
            <button>Follow</button>
          </div>
        </li>
        <li>
          <div className="col">
            <div>
              <img src={seller3} alt="seller imge" />
              <p>
                Theresa Webb
                <span>@Theresa</span>
              </p>
            </div>
            <button>Follow</button>
          </div>
        </li>
        <li>
          <div className="col">
            <div>
              <img src={seller4} alt="seller imge" />
              <p>
                ralph Eldwards
                <span>@ralph</span>
              </p>
            </div>
            <button>Follow</button>
          </div>
        </li>
        <li>
          <div className="col">
            <div>
              <img src={seller5} alt="seller imge" />
              <p>
                Raplhie
                <span>@Raplhie</span>
              </p>
            </div>
            <button>Follow</button>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Section5;
