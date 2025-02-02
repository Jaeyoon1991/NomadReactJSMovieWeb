import PropTypes from "prop-types";
import style from "./App.module.css";
import Button from "./Button";


function App() {
  return (
    <div>
      <h1 className={style.title}>Welcome back ReactJS</h1>
      <Button text={"Continue"}/>
    </div>
  );
}

export default App;
