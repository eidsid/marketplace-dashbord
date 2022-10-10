import "./style.scss";
import card1 from "assets/imgs/card1.jpg";
import card2 from "assets/imgs/card2.jpg";
import card3 from "assets/imgs/card3.jpg";
import card4 from "assets/imgs/card4.jpg";
import card5 from "assets/imgs/card5.jpg";
import card6 from "assets/imgs/card6.jpg";
import { useEffect, useState } from "react";
import { Card } from "./card/Card";
const Section3 = () => {
  const items = [
    {
      name: "Clubic Thander",
      img: card1,
      hearts: 65,
      currentBid: "1.2 ETH",
      endingIn: "1d 15h 20m",
      type: "art",
      id: 1,
    },
    {
      name: "Pokemon Ball",
      img: card2,
      hearts: 65,
      currentBid: "1.2 ETH",
      endingIn: "1d 15h 20m",
      type: "art",
      id: 2,
    },
    {
      name: "Pyrmid ",
      img: card3,
      hearts: 65,
      currentBid: "1.2 ETH",
      endingIn: "1d 15h 20m",
      type: "illustration",
      id: 3,
    },
    {
      name: "Clubic squire",
      img: card4,
      hearts: 65,
      currentBid: "1.2 ETH",
      endingIn: "1d 15h 20m",
      type: "illustration",
      id: 4,
    },
    {
      name: "Trigger",
      img: card5,
      hearts: 65,
      currentBid: "1.2 ETH",
      endingIn: "1d 15h 20m",
      type: "games",
      id: 5,
    },
    {
      name: "Trigger circel",
      img: card6,
      hearts: 65,
      currentBid: "1.2 ETH",
      endingIn: "1d 15h 20m",
      type: "games",
      id: 6,
    },
  ];

  const [itemType, setItemType] = useState("all");
  const [FilterItems, setFilterdItems] = useState(items);
  const handleItemsType = (type) => {
    setItemType(type);
  };
  const cardsDom = FilterItems.map((item) => (
    <Card item={item} key={item.id} />
  ));
  useEffect(() => {
    if (itemType === "all") setFilterdItems(items);
    else {
      let filter = items.filter((item) =>
        item.type === itemType ? item : null
      );
      setFilterdItems(filter);
    }
  }, [itemType]);
  return (
    <div className="main-content">
      <nav>
        <span>
          <h2>Feed </h2> <span>Popular</span>
        </span>
        <ul>
          <li
            className={itemType === "all" ? "active" : null}
            onClick={() => handleItemsType("all")}
          >
            ALL
          </li>
          <li
            className={itemType === "illustration" ? "active" : null}
            onClick={() => handleItemsType("illustration")}
          >
            illustration
          </li>
          <li
            className={itemType === "art" ? "active" : null}
            onClick={() => handleItemsType("art")}
          >
            Art
          </li>
          <li
            className={itemType === "games" ? "active" : null}
            onClick={() => handleItemsType("games")}
          >
            Games
          </li>
        </ul>
      </nav>
      <div className="cards">{cardsDom}</div>
    </div>
  );
};

export default Section3;
