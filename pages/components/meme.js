import "bootstrap/dist/css/bootstrap.css";

export default function Meme() {
  return (
    <form className="forrm main">
      <input type="text" placeholder="top text" className="form--input" />
      <input type="text" placeholder="bottom text" className="form--input" />
      <button className="form--button">Get a new meme image </button>
    </form>
  );
}
