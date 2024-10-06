import cookie from "/images/cookie.png";

export default function Display({ com, increase, reset, cps }) {
  return (
    <div className="cookie-section">
      <>
        <p id="cookies">cookies: {com}</p>
        <p id="cookies-per-second">cookies per second: {cps}</p>
        <p className="cps-message">
          check out the upgrades to change your cookies per second
        </p>
        <img
          src={cookie}
          alt="cookie image"
          width="300px"
          onClick={increase}
          className="cookie-image"
        ></img>
        <button className="reset-button" onClick={reset}>
          reset
        </button>
      </>
    </div>
  );
}
