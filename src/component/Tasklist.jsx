
import React from "react";
import List from "./List";
import Addtask from "./Addtask";

const Tasklist = ({
  status,
  todo,
  setPopup,
  handleDelete,
  handleCompleted,
  handleEdit
}) => {
  const renderSwitch = (status) => {
    switch (status) {
      case "All":
        return <List todo={todo} handleDelete={handleDelete} handleCompleted={handleCompleted} handleEdit={handleEdit} />;
      case "High":
        return <List todo={todo.filter((ele) => ele.priority === "High")} handleDelete={handleDelete} handleCompleted={handleCompleted} handleEdit={handleEdit} />;
      case "Medium":
        return <List todo={todo.filter((ele) => ele.priority === "Medium")} handleDelete={handleDelete} handleCompleted={handleCompleted} handleEdit={handleEdit} />;
      case "Low":
        return <List todo={todo.filter((ele) => ele.priority === "Low")} handleDelete={handleDelete} handleCompleted={handleCompleted} handleEdit={handleEdit} />;
      case "Complete":
        return <List todo={todo.filter((ele) => ele.completed)} handleDelete={handleDelete} handleCompleted={handleCompleted} handleEdit={handleEdit} />;
      case "Uncomplete":
        return <List todo={todo.filter((ele) => !ele.completed)} handleDelete={handleDelete} handleCompleted={handleCompleted} handleEdit={handleEdit} />;
      default:
        return <List todo={todo} handleDelete={handleDelete} handleCompleted={handleCompleted} handleEdit={handleEdit} />;
    }
  };

  return (
    <div className="flex flex-wrap gap-5">
      {renderSwitch(status)}
      <Addtask setPopup={setPopup} />
    </div>
  );
};

export default Tasklist;
