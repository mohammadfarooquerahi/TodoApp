import { useState, useRef } from "react";

export const AddNewTask = (props) => {
  //   const [taskValue, setTaskValue] = useState("");
  const inputFieldRef = useRef("");
  //   const onHandleTaskInput = (e) => {
  //   setTaskValue(e.target.value);
  //     console.log(inputFieldRef.current.value);
  //   };

  const onAddTask = () => {
    console.log(inputFieldRef.current.value);

    props.setTaskListProp(inputFieldRef.current.value);
  };

  //   console.log(taskValue);
  console.log("render");

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        paddingTop: "10px",
        // padding:"20px"
      }}
    >
      <input
        type="text"
        style={{
          fontSize: "30px",
          width: "80%",
          borderRadius: "5px",
          padding: "10px 20px"
        }}
        // onChange={onHandleTaskInput}
        ref={inputFieldRef}
      />
      <button
        style={{
          fontSize: "25px",
          marginLeft: "10px",
          padding: "5px 20px",
          borderRadius: "5px",
          backgroundColor: "white",
        }}
        onClick={onAddTask}
      >
        Add
      </button>
    </div>
  );
};
