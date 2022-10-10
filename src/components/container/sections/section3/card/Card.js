import React from "react";
import { FaHeart } from "react-icons/fa";

export const Card = ({ item }) => {
  return (
    <div className="card">
      <img src={item.img} alt={item.img} />
      <div className="col frist">
        <div className="name">{item.name}</div>
        <div className="hearts">
          <span>
            <FaHeart />
          </span>
          {item.hearts}
        </div>
      </div>
      <div className="col secend">
        <div>
          <p>Current Bid</p>
          <span>{item.currentBid}</span>
        </div>
        <div>
          <p>Ending in</p>
          <span>{item.endingIn}</span>
        </div>
      </div>
      <div className="col thered">
        <button>place A MD</button>
        <button>History</button>
      </div>
    </div>
  );
};
