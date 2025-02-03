import PropTypes from "prop-types";
import { useState } from "react";


function App() {
  const[toDo, setToDo] =  useState("");
  const[toDos, setToDos] = useState([]);
  const onChagne = (event) => setToDo(event.target.value);
  console.log(toDo);
  const onSubmit = (event) => {
    event.preventDefault();
    if(toDo === ""){
      return
    }
    setToDos((currentArray) => [toDo, ...currentArray]); 
    setToDo("");
  };
  console.log(toDos);
  return (
    <div>
      <h1>My To Dos : {toDos.length}</h1>
      <form onSubmit={onSubmit}>
       <input onChange={onChagne} value={toDo} type="text" placeholder="Wrtie your to do...."></input>
       <button>Add to do..</button>

      </form>

    </div>
  );
}

export default App;
