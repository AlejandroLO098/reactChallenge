import "./App.css";

import Router from "./routes/Router";

function App() {
  return (
    <div className="App">
      <ul className="nav-bar">
        <li>
          <a href="http://localhost:3000/homepage">HOME</a>
        </li>
        <li>
          <a href="http://localhost:3000/secondpage">SECOND</a>
        </li>
        <li>
          <a href="http://localhost:3000/thirdpage">THIRD</a>
        </li>
      </ul>
      <Router />
    </div>
  );
}

export default App;
