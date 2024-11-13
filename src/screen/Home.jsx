// import React, { useState } from "react";
// import Sidebar from "../component/sidebar";
// import Userbar from "../component/Userbar";
// import Mian from "../component/Mian";
// import Popup from "../component/Popup";
// import { v4 as uuidv4 } from "uuid";


// const Home = () => {
//   const [todo, setTodo] = useState([])
//   const [ popup, setPopup] = useState(false);
//   const [status, setStatus] = useState("All");


//   // const handleSubmitData = (title,date,description,setTitle,setDate,setDescription) => {
//   //   setTodo([...todo, { id: uuidv4(), task: title , date: date, description: description, important: false,completed: false }]);
//   //   setTitle("");
//   //   setDate("");
//   //   setDescription("");
//   // };
//   const handleSubmitData = (title, date, description, priority, setTitle, setDate, setDescription, setPriority) => {
//     setTodo([...todo, { 
//       id: uuidv4(), 
//       task: title, 
//       date: date, 
//       description: description, 
//       important: priority === "High", // Mark as important if priority is high
//       completed: false,
//       priority: priority // Add priority
//     }]);
//     setTitle("");
//     setDate("");
//     setDescription("");
//     setPriority("Medium"); // Reset priority to default
//   };
  





//   const handleDelete = (id) => {
//     console.log(id, "test");
//     const filterData = todo.filter((ele) => ele.id !== id);
//     setTodo(filterData);
//   };

//   const handleCompleted = (id)=>{
//     console.log(id,"id");
//     const index = todo.findIndex((ele)=>ele.id === id);
//     todo[index].completed = !todo[index].completed
//     setTodo([...todo]);
//   }
  
//   const handleImportant = (id)=>{
//     console.log(id);
//     const index = todo.findIndex((ele)=>ele.id === id);
//     console.log(index,"index");
//     todo[index].important = !todo[index].important
//     setTodo([...todo]);
//     console.log(todo);
    
//   }
// console.log(status,"status");

//   return (
//     <div>
//       <div className="flex">
//         <Sidebar status={status} setPopup={setPopup} setStatus={setStatus} />
//         <Mian todo={todo} setPopup={setPopup} status={status} handleDelete={handleDelete} handleCompleted={handleCompleted} handleImportant={handleImportant}/>  
//         <Userbar />
//       </div>
//       <Popup popup={popup} setPopup={setPopup} handleSubmitData={handleSubmitData} />
//     </div>
//   );
// };

// export default Home;
// import React, { useState } from "react";
// import Sidebar from "../component/sidebar";
// import Userbar from "../component/Userbar";
// import Mian from "../component/Mian";
// import Popup from "../component/Popup";
// import { v4 as uuidv4 } from "uuid";

// const Home = () => {
//   const [todo, setTodo] = useState([]);
//   const [popup, setPopup] = useState(false);
//   const [status, setStatus] = useState("All");

//   const handleSubmitData = (title, date, description, priority, setTitle, setDate, setDescription, setPriority) => {
//     setTodo([
//       ...todo,
//       {
//         id: uuidv4(),
//         task: title,
//         date: date,
//         description: description,
//         important: priority === "High",
//         completed: false,
//         priority: priority
//       }
//     ]);
//     setTitle("");
//     setDate("");
//     setDescription("");
//     setPriority("Medium");
//   };

//   const handleDelete = (id) => {
//     const filterData = todo.filter((ele) => ele.id !== id);
//     setTodo(filterData);
//   };

//   const handleCompleted = (id) => {
//     const index = todo.findIndex((ele) => ele.id === id);
//     todo[index].completed = !todo[index].completed;
//     setTodo([...todo]);
//   };

//   const handleImportant = (id) => {
//     const index = todo.findIndex((ele) => ele.id === id);
//     todo[index].important = !todo[index].important;
//     setTodo([...todo]);
//   };

//   // Filter tasks based on selected priority (status)
//   const filteredTasks = status === "All" ? todo : todo.filter((task) => task.priority === status);

//   return (
//     <div>
//       <div className="flex">
//         <Sidebar status={status} setPopup={setPopup} setStatus={setStatus} />
//         <Mian
//           todo={filteredTasks}  // Use filtered tasks instead of all tasks
//           setPopup={setPopup}
//           status={status}
//           handleDelete={handleDelete}
//           handleCompleted={handleCompleted}
//           handleImportant={handleImportant}
//         />
//         <Userbar />
//       </div>
//       <Popup popup={popup} setPopup={setPopup} handleSubmitData={handleSubmitData} />
//     </div>
//   );
// };

// export default Home;
// import React, { useState } from "react";
// import Sidebar from "../component/sidebar";
// import Userbar from "../component/Userbar";
// import Mian from "../component/Mian";
// import Popup from "../component/Popup";
// import { v4 as uuidv4 } from "uuid";

// const Home = () => {
//   const [todo, setTodo] = useState([]);
//   const [popup, setPopup] = useState(false);
//   const [status, setStatus] = useState("All");
  
//   const handleSubmitData = (title, date, description, priority, setTitle, setDate, setDescription, setPriority) => {
//     setTodo([
//       ...todo,
//       {
//         id: uuidv4(),
//         task: title,
//         date: date,
//         description: description,
//         completed: false,
//         priority: priority
//       }
//     ]);
    
//     setTitle("");
//     setDate("");
//     setDescription("");
//     setPriority("Medium");
//   };

//   const handleDelete = (id) => {
//     const filterData = todo.filter((ele) => ele.id !== id);
//     setTodo(filterData);
//   };

//   const handleCompleted = (id) => {
//     const index = todo.findIndex((ele) => ele.id === id);
//     todo[index].completed = !todo[index].completed;
//     setTodo([...todo]);
//   };

//   // Filter tasks based on selected status and priority
//   const filteredTasks = status === "All" ? todo : 
//     status === "Complete" ? todo.filter((task) => task.completed) : 
//     status === "Uncomplete" ? todo.filter((task) => !task.completed) : 
//     todo.filter((task) => task.priority === status);

//   return (
//     <div>
//       <div className="flex">
//         <Sidebar status={status} setPopup={setPopup} setStatus={setStatus} />
//         <Mian
//           todo={filteredTasks}
//           setPopup={setPopup}
//           status={status}
//           handleDelete={handleDelete}
//           handleCompleted={handleCompleted}
//         />
//         <Userbar />
//       </div>
//       <Popup popup={popup} setPopup={setPopup} handleSubmitData={handleSubmitData} />
//     </div>
//   );
// };

// export default Home;
import React, { useState } from "react";
import Sidebar from "../component/sidebar";
import Userbar from "../component/Userbar";
import Mian from "../component/Mian";
import Popup from "../component/Popup";
import { v4 as uuidv4 } from "uuid";

const Home = () => {
  const [todo, setTodo] = useState([]);
  const [popup, setPopup] = useState(false);
  const [status, setStatus] = useState("All");
  const [filteredTasks, setFilteredTasks] = useState(todo);

  const handleSubmitData = (title, date, description, priority, setTitle, setDate, setDescription, setPriority) => {
    const newTask = {
      id: uuidv4(),
      task: title,
      date: date,
      description: description,
      completed: false,
      priority: priority,
    };
    setTodo([...todo, newTask]);
    setFilteredTasks([...todo, newTask]);
    setTitle("");
    setDate("");
    setDescription("");
    setPriority("Medium");
  };

  const handleDelete = (id) => {
    const updatedTodo = todo.filter((ele) => ele.id !== id);
    setTodo(updatedTodo);
    setFilteredTasks(updatedTodo);
  };

  const handleCompleted = (id) => {
    const updatedTodo = [...todo];
    const index = updatedTodo.findIndex((ele) => ele.id === id);
    updatedTodo[index].completed = !updatedTodo[index].completed;
    setTodo(updatedTodo);
    setFilteredTasks(updatedTodo);
  };

  // Handle Edit: Update the task details in the state
  const handleEdit = (editedTask) => {
    const updatedTodo = todo.map((task) =>
      task.id === editedTask.id ? editedTask : task
    );
    setTodo(updatedTodo);
    setFilteredTasks(updatedTodo); // Update filtered tasks as well
  };

  return (
    <div>
      <div className="flex">
        <Sidebar status={status} setPopup={setPopup} setStatus={setStatus} />
        <Mian
          todo={filteredTasks}
          setPopup={setPopup}
          status={status}
          handleDelete={handleDelete}
          handleCompleted={handleCompleted}
          handleEdit={handleEdit} // Pass handleEdit to Mian
        />
        <Userbar />
      </div>
      <Popup popup={popup} setPopup={setPopup} handleSubmitData={handleSubmitData} />
    </div>
  );
};

export default Home;
