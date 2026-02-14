// import { useRef, useState } from "react";

// useState;

// export const TodoInput = (props) => {
//   //   const [task, setTask] = useState("");
//   const taskInputFieldRef = useRef("");

//   const onChangeHandler = (e) => {
//     setTask(e.target.value);
//   };

//   const onAddTask = () => {
//     const copyTaskslist = props.tasklist;

//     props.updateTasksList
//       // copyTaskslist.pushz(taskInputFieldRef.current.value);
//       ();
//     props.updateTasksList(taskInputFieldRef.current.value);
//   };

//   console.log("rendred", taskInputFieldRef.current.value);

//   return (
//     <>
//       <div>
//         <input
//           type="text"
//           style={{
//             fontSize: "25px",
//             padding: "10px",
//             margin: "10px",
//           }}
//           //   onChange={onChangeHandler}
//           ref={taskInputFieldRef}
//         />
//         <button onClick={onAddTask}>Add</button>
//       </div>
//     </>
//   );
// };
