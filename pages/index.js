// import ListFile from "./components/lisst";
import "bootstrap/dist/css/bootstrap.css";
import UseStateCounter from "./components/Counter";
import Header from "./components/header";
import Meme from "./components/meme";

import UnReadMessage from "./components/renderingcond";
// import List from "./components/List";
import Joke from "./components/Joke";
import Dice from "./components/dice";
import TextForm from "./components/TextForm";
import React, { useState } from 'react'
import UsingState from "./components/UsingState";


export default function Home() {
  const [mode, setMode] = useState('light');
  const toggleMode = () => {
    if (mode === `light`) {
      setMode('dark');
      document.body.style.backgroundColor = "#042743";
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = "white";

    }
  }
  return (
    <div className="">
      <Header mode={mode} toggleMode={ toggleMode} />

      <Meme />
      <hr />
      <UsingState/>
      <hr />
      <UseStateCounter />
      <hr />
      <UnReadMessage />
      <hr />
      <Joke
        className="mt-5"
        appName="Facebook"
        history="Create an account or log into Facebook. Connect with friends, family and other people you know. Share photos and videos, send messages and get updates."
      />
      <hr />
      <Dice />
      <hr />
      <TextForm heading="Enter the Text"/>
    </div>
  );
}
