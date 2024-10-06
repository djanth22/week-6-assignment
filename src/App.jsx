import Header from "./components/Header";
import "./App.css";
import Display from "./components/Display";
import Shop from "./components/Shop";
import { useState, useEffect } from "react";
import Message from "./components/Message";

export default function App() {
  let [cookies, setCookies] = useState(0);
  let [CPS, setCPS] = useState(0);
  let [cpsDis, setCpsDis] = useState(0);
  let com = cookies + CPS;
  let cps = cpsDis;
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const savedCookies = localStorage.getItem("cookies");
    const savedCps = localStorage.getItem("cookiesPerSecond");
    if (savedCookies !== null) setCookies(Number(savedCookies));
    if (savedCps !== null) setCPS(Number(savedCps));
    console.log(savedCookies);
  }, []);

  useEffect(() => {
    localStorage.setItem("cookies", com);
  }, [com]);

  useEffect(() => {
    localStorage.setItem("cookiesPerSecond", CPS);
  }, [CPS]);

  function increase() {
    setCookies(cookies + 1);
  }
  function reset() {
    setCookies((cookies = 0));
    setCpsDis((cpsDis = 0));
    setCPS((CPS = 0));
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCPS((currentCount) => currentCount + cps);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [cps]);

  function upgradeShop(cost) {
    if (com >= cost) {
      setCookies((prevCookies) => prevCookies - cost);
      setShowMessage(false);
    } else {
      setShowMessage(true);
      setTimeout(() => {
        setShowMessage(false);
      }, 3000);
    }
  }

  return (
    <>
      <div className="main">
        <Header />
        <Display com={com} cps={cpsDis} increase={increase} reset={reset} />
        {showMessage && <Message />}
        <Shop
          com={com}
          cpsDis={cpsDis}
          cps={cps}
          setCpsDis={setCpsDis}
          upgradeShop={upgradeShop}
        />
      </div>
    </>
  );
}
