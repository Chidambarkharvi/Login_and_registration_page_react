import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  return (
    <Router>
      <div className="App">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div>
            <p>LOGO</p>
          </div>{" "}
          <nav
            style={{
              width: "30%",

              display: "flex",
              justifyContent: "space-evenly",
            }}
          >
            <Link to="/home">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Register </Link>
          </nav>
        </div>

        <div>
          <Route
            path="/home"
            render={(props) => {
              return <Home userName="sachin" />;
            }}
          />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </div>
      </div>
    </Router>
  );
}

export default App;
