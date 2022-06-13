import "bootstrap/dist/css/bootstrap.css";

export default function Header() {
  return (
    <header className="d-flex align-items-center px-2 py-2 header">
      <div className="col-4">
        <img
          src="https://www.logolynx.com/images/logolynx/64/6434117060654972bd19ca515db70158.jpeg"
          alt="meme-logo"
          className="header--image"
          width={65}
        />
      </div>
      <h1 className="header--title col-5 text-center">Meme Generator</h1>
      <h2 className="header--project col-3 text-center">
        react course-project
      </h2>
    </header>
  );
}
