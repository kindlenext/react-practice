import React from "react";
import "bootstrap/dist/css/bootstrap.css";
// import jokesData from "../jokesData";
export default function Joke(props) {
  //   console.log(jokesData);
  const [isShown, setIsShown] = React.useState(false);
  // only display the history paragraph if `isshown` is true

  function toggleShown() {
    setIsShown((prevShown) => !prevShown);
  }
  return (
    <div className="text-center">
      {props.appName && <h3 className="text-clr">{props.appName}</h3>}
      {isShown && <p>{props.history}</p>}
      <button onClick={toggleShown} className="btn--img">
        Show Detail
      </button>
      <hr />
    </div>
  );
}
