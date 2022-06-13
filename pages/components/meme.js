import "bootstrap/dist/css/bootstrap.css";
import memesData from "../memeData.js";
import React from "react";

export default function Meme() {
  // let url
  //   function getMemeImage() {
  //     const memesArray = memesData.data.memes;
  //     const randomNumber = Math.floor(Math.random() * memesArray.length);
  //     const url = memesArray[randomNumber].url;
  //   }

  // challange: save the random meme url in state
  // create new state called  `memeImage` with an empty string as default
  // when the `getMemeImage`function is called , update the `memeImage `state to the random chosen image url
  // below the div.form , add an <img/> and set the src to the new `memeImage` state we create

  const [memeImage, setMemeImage] = React.useState("");

  function getMemeImage() {
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    setMemeImage(memesArray[randomNumber].url);
  }

  return (
    <div>
      {/* <p>{url}</p> */}
      <form className="forrm main">
        <input type="text" placeholder="top text" className="form--input" />
        <input type="text" placeholder="bottom text" className="form--input" />
        <button className="form--button" onClick={getMemeImage}>
          Get a new meme image
        </button>
      </form>
      <img src={memeImage} className="meme--image" />
    </div>
  );
}
// get a random image from `memesData` . array
// when the new meme image button is clicked
