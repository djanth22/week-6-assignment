import upgrades from "/src/lib/upgrades.json";
import { useState } from "react";

export default function Shop({ cpsDis, com, upgradeShop, setCpsDis }) {
  const [showInfo, setShowInfo] = useState(false);

  function handleClick() {
    setShowInfo(!showInfo);
  }
  return (
    <>
      <div className="shop" onClick={handleClick}>
        <h1 className="shop-title">shop upgrades</h1>
        <h2 className="shop-title">click to view upgrades</h2>
      </div>

      <div className="upgrades">
        {upgrades.map((item) => {
          return (
            <div className="upgrade" key={item.id}>
              {showInfo ? (
                <>
                  <p className="upgrade-item">upgrade: {item.name}</p>
                  <p className="upgrade-item">costs: {item.price} cookies</p>
                  <p className="upgrade-item">
                    Increases by: +{item.increaseValue}
                  </p>
                  <button
                    className="buy-buttons"
                    onClick={() => {
                      upgradeShop(item.price);
                      if (com >= item.price) {
                        setCpsDis(cpsDis + item.increaseValue);
                      }
                    }}
                  >
                    buy
                  </button>
                </>
              ) : null}
            </div>
          );
        })}
      </div>
    </>
  );
}
