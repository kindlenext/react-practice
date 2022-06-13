import "bootstrap/dist/css/bootstrap.css";
import React from "react";

export default function UseState() {
  //   const result = React.useState("yes");
  const [isImportant, setIsImportant] = React.useState("Yes");

  function handleClick() {
    setIsImportant("No");
  }

  return (
    <div className="contaier state">
      <h1 className="state--title text-clr">Is State Important To Know</h1>
      <div className="state--value" onClick={handleClick}>
        <h1>{isImportant}</h1>
      </div>
    </div>
  );
}
