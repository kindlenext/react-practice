// import ListFile from "./components/lisst";
import "bootstrap/dist/css/bootstrap.css";
import UseStateCounter from "./components/Counter";
import Header from "./components/header";
import Meme from "./components/meme";
import UseState from "./components/UseState";
// import List from "./components/List";

export default function Home() {
  return (
    <div className="">
      <Header />
      <Meme />
      <UseState />
      <UseStateCounter />
    </div>
  );
}
