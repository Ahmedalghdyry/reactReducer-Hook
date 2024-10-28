import "./App.css";
import "./min.css";

import { useReducer } from "react";
const initialData = { name: "Ahmed", age: 28, startCount: 0, theme: "light" };

const reducer = (state, action) => {
  switch (action.type) {
    //CHANGE-NAME
    case "CHANGE-NAME":
      return { ...state, name: action.newValue };
    // CHANGE-AGE
    case "CHANGE-AGE":
      return { ...state, age: action.newAge };
    // CHANGE-COUNT
    case "CHANGE-COUNT":
      return { ...state, startCount: action.newCount };
    //
    case "CHANGE-THEME":
      return { ...state, theme: action.newValue };

    default:
      return state;
  }
};

function App() {
  const [allData, dispatch] = useReducer(reducer, initialData);

  return (
    <div
      className={`card ${allData.theme}`}
    >
      <button
        onClick={() => {
          dispatch({
            type: "CHANGE-THEME",
            newValue: allData.theme == "Dark" ? "Light" : "Dark",
          });
        }}
        style={{ marginBottom: "44px" }}
      >
        Toggle Theme
      </button>

      <div onChange={() => {
          dispatch({
            type: "CHANGE-THEME",
            newValue: allData.theme == "Dark" ? "Light" : "Dark",
          });
        }} style={{ marginBottom: "44px" }} className="btn-container">
        <i className="fa fa-sun-o" aria-hidden="true" />
        <label className="switch btn-color-mode-switch">
          <input
            type="checkbox"
            name="color_mode"
            id="color_mode"
            defaultValue={1}
          />
          <label
            htmlFor="color_mode"
            data-on="Dark"
            data-off="Light"
            className="btn-color-mode-switch-inner"
          />
        </label>
        <i className="fa fa-moon-o" aria-hidden="true" />
      </div>

      <div>
        <button
          onClick={() => {
            dispatch({ type: "CHANGE-THEME", newValue: "Light" });
          }}
          style={{ marginRight: "26px" }}
        >
          Light
        </button>

        <button
          onClick={() => {
            dispatch({ type: "CHANGE-THEME", newValue: "Dark" });
          }}
          style={{ marginRight: "26px" }}
        >
          Dark
        </button>

        <button
          onClick={() => {
            dispatch({ type: "CHANGE-THEME", newValue: "grey" });
          }}
          style={{ marginRight: "26px" }}
        >
          grey
        </button>

        <button
          onClick={() => {
            dispatch({ type: "CHANGE-THEME", newValue: "pink" });
          }}
          style={{ marginRight: "26px" }}
        >
          pink
        </button>
      </div>
      <h2 style={{ marginTop: "66px" }}>My name is {allData.name}</h2>
      <button
        onClick={() => {
          dispatch({ type: "CHANGE-NAME", newValue: "ALGHDYRY" });
        }}
      >
        change name
      </button>
      <br />
      <br />
      <h2>My age is {allData.age}</h2>
      <button
        onClick={() => {
          dispatch({ type: "CHANGE-AGE", newAge: 30 });
        }}
      >
        change age
      </button>

      <br />
      <br />
      <br />
      <br />
      <button
        onClick={() => {
          dispatch({ type: "CHANGE-COUNT", newCount: allData.startCount + 1 });
        }}
      >
        chang is {allData.startCount}
      </button>
    </div>
  );
}

export default App;
