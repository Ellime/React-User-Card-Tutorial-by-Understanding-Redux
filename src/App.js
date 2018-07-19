import React, { Component } from "react";
import user from "./images/user.png";
import "./App.css";
import { createStore } from "redux"; // Added
import reducer from "./reducers" // Added

// Added
const initialState = {
  name: "Alex Bakery",
  description: "Software Engineer, Speaker, and Occasional Model",
  likes: "Cats, Wine, and Black dresses",
  location: "localhost"
};

const store = createStore(reducer, initialState); // Added

class App extends Component {
//   state = {
//     name: "Alex Bakery",
//     description: "Software Engineer, Speaker, and Occasional Model",
//     likes: "Cats, Wine, and Black dresses",
//     location: "localhost"
//   };
  render() {
    const { name, description, likes, location } = store.getState(); // Don't use "this."
    return (
      <div className="App">
        <section className="User__img">
          <img src={user} alt="user" />
        </section>

        <section className="User__info">
          <p>
            {" "}
            <span className="faint">I am</span> a {store.getState().description}
          </p>
          <p>
            {" "}
            <span className="faint">I like</span> {store.getState().likes}
          </p>

          <p className="User__info__details User__info__divider faint">
            <span>Name: </span>
            <span>{store.getState().name}</span>
          </p>
          <p className="User__info__details faint">
            <span>Location: </span>
            <span>{store.getState().location}</span>
          </p>
        </section>
      </div>
    );
  }
}

export default App;
