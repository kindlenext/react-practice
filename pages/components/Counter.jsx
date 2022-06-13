import React from "react";
import "bootstrap/dist/css/bootstrap.css";

export default function UseStateCounter() {
  //  challange
  // set up state to track our count(initial value is 0)
  // when the + button  is clicked (can just console.log ("add") for count)
  // see if you think of a way to add 1 to the count
  // every time to the + button is clicked

  // Changing state with a call back funtion
  // note:if you ever need the old value of state to help
  //   you determine the new value of state, you should pass a callback function to
  //    your state setter function instead of using state directly.
  //     this callback function will recieve the old value of state as it parameter,
  //   which you can then use to determine yur new value of state.

  const [count, setCount] = React.useState(0);
  function add() {
    // setCount(count + 1);
    setCount((prevCount) => prevCount + 1);
    //   updated add to use a callack function
  }
  function substract() {
    // setCount(count - 1);
    setCount((prevCount) => prevCount - 1);
  }
  return (
    <div className=" py-5 px-5 mt-5 body bg-clr">
      <button className="counter--minus" onClick={substract}>
        -
      </button>
      <div>
        <h1 className="counter--count">{count}</h1>
      </div>
      <button className="counter--plus" onClick={add}>
        +
      </button>
    </div>
  );
}
