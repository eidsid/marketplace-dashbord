import "./style.scss";
import logo from "assets/img/logo.png";
import {
  FaDelicious,
  FaWallet,
  FaShoppingCart,
  FaChartLine,
  FaRegClock,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";
import { useState } from "react";
const Menu = () => {
  function func(id) {
    setactiveItem(id);
  }
  const [activeItem, setactiveItem] = useState(0);
  return (
    <div className="menu">
      <img src={logo} alt="logo" />
      <ul id="main-menu">
        <Icon
          icon={<FaDelicious />}
          id="1"
          func={func}
          activeState={activeItem}
        />
        <Icon icon={<FaWallet />} id="2" func={func} activeState={activeItem} />
        <Icon
          icon={<FaShoppingCart />}
          id="3"
          func={func}
          activeState={activeItem}
        />
        <Icon
          icon={<FaChartLine />}
          id="4"
          func={func}
          activeState={activeItem}
        />
        <Icon
          icon={<FaRegClock />}
          id="5"
          func={func}
          activeState={activeItem}
        />
      </ul>
      <ul id="sub-menu">
        <Icon icon={<FaCog />} id="6" func={func} activeState={activeItem} />
        <Icon
          icon={<FaSignOutAlt />}
          id="7"
          func={func}
          activeState={activeItem}
        />
      </ul>
    </div>
  );
};
const Icon = ({ icon, func, id, activeState }) => (
  <li className={activeState === id ? "active" : ""} onClick={() => func(id)}>
    <a href="#">{icon}</a>
  </li>
);
export default Menu;
