// import ListFile from "./components/lisst";
import "bootstrap/dist/css/bootstrap.css";
// import UseStateCounter from "./components/Counter";
import Header from "./components/header";
// import Meme from "./components/meme";

// import UnReadMessage from "./components/renderingcond";
// import List from "./components/List";
// import Joke from "./components/Joke";
// import Dice from "./components/dice";
import TextForm from "./components/TextForm";
import React, { useState } from 'react'
// import UsingState from "./components/UsingState";/
import Alert from "./components/Alert";


export default function Home() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState("null");
  
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => { 
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === `light`) {
      setMode('dark');
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been anabled", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been anabled", "success");

    }
  }
  return (
    <div className="">
      <Header mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />

      {/* <Meme />
      <hr />
      <UsingState />
      <hr /> */}
      {/* <UseStateCounter />
      <hr /> */}
      <Alert alert={alert} />
      {/* <hr />
      <UnReadMessage />
      <hr /> */}
      {/* <Joke
        className="mt-5"
        appName="Facebook"
        history="Create an account or log into Facebook. Connect with friends, family and other people you know. Share photos and videos, send messages and get updates."
      /> */}
      {/* <hr />
      <Dice />
      <hr /> */}
      <TextForm heading="Enter the Text" showAlert={ showAlert} />
    </div>
  );
}