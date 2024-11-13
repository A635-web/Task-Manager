
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


  const handleEdit = (editedTask) => {
    const updatedTodo = todo.map((task) =>
      task.id === editedTask.id ? editedTask : task
    );
    setTodo(updatedTodo);
    setFilteredTasks(updatedTodo); 
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
          handleEdit={handleEdit} 
        />
        <Userbar />
      </div>
      <Popup popup={popup} setPopup={setPopup} handleSubmitData={handleSubmitData} />
    </div>
  );
};

export default Home;
