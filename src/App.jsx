import React from "react";
import { useState } from "react";
import { AddNewTask } from "./addNewTask";
import { ShowTasks } from "./showTasks";
// import { TodoInput } from "./todo-input";

const App = () => {
  const [tasklist, setTaskList] = useState([]);
  console.log(tasklist);
  
  // print all element of array in jsx
  // const arr= [1,2,6,27,84];
  // console.log(...arr);

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          backgroundColor: "#cacaca",
        }}
      >
        {/* <h1>Todo App</h1> */}
        <div
          style={{
            height: "500px",
            width: "400px",
            backgroundColor: "#fff",
            borderRadius: "10px",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
            border: "1px solid #ccc",
            padding: "20px",
          }}
        >
          <AddNewTask tasklist={tasklist} setTaskListProp={setTaskList} />
          <ShowTasks />
          {/* <TodoInput updateTasksList={setTasks} /> */}
        </div>
      </div>
    </>
  );
};

export default App;
