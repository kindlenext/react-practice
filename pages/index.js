// import ListFile from "./components/lisst";
import "bootstrap/dist/css/bootstrap.css";
import UseStateCounter from "./components/Counter";
import Header from "./components/header";
import Meme from "./components/meme";
import UnReadMessage from "./components/renderingcond";
import UseState from "./components/UseState";
// import List from "./components/List";
import Joke from "./components/Joke";
import Dice from "./components/dice";

export default function Home() {
  return (
    <div className="">
      <Header />

      <Meme />
      <hr />
      <UseState />
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
    </div>
  );
}
