import "./style.scss";
import { FaSearch, FaBell, FaChevronDown } from "react-icons/fa";
import Profileimage from "assets/imgs/seller2.jpg";
import { useState } from "react";
const TopContainer = () => {
  const [Menuactive, setMenuactive] = useState(false);
  return (
    <div className="TopContainer">
      <div className="shearchBox">
        <input type="text" placeholder="Search item" />
        <i>
          <FaSearch />
        </i>
      </div>
      <div className="profile Container">
        <div className="profile--icon">
          <FaBell />
        </div>
        <div className="profile--image">
          <img src={Profileimage} alt="profile image" />
        </div>
        <div className="profile--name">Eid Sayed</div>
        <div className={Menuactive ? "profile--menu active" : "profile--menu"}>
          <div
            className="profile--menu--btn"
            onClick={() => setMenuactive(!Menuactive)}
          >
            <FaChevronDown />
          </div>
          <div className="profile--menu--content ">
            <div className="arrow"></div>
            <ul>
              <li>Web Design</li>
              <li>UI / UX</li>
              <li>Form Design </li>
              <li>UI Design </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopContainer;
