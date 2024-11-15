


import React, { useState } from "react";
import { HiMiniCalendarDays, HiOutlineTrash } from "react-icons/hi2";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { HiPencil } from "react-icons/hi";
const Task = ({ ele, handleDelete, handleCompleted, handleEdit }) => {
  const [isEditing, setIsEditing] = useState(false); 
  const [editedTask, setEditedTask] = useState({ ...ele }); 

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    handleEdit(editedTask);
    setIsEditing(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedTask((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div key={ele.id} style={{ backgroundColor: "var(--side-clr)" }} className="w-[31.68%] rounded-[10px] shadow-lg pt-2 px-3">
      {isEditing ? (
        // Show the form for editing
        <div className="edit-form">
          <input
            type="text"
            name="task"
            value={editedTask.task}
            onChange={handleChange}
            className="w-full px-2 py-1 mb-2"
          />
          <textarea
            name="description"
            value={editedTask.description}
            onChange={handleChange}
            className="w-full px-2 py-1 mb-2"
          />
          <input
            type="date"
            name="date"
            value={editedTask.date}
            onChange={handleChange}
            className="w-full px-2 py-1 mb-2"
          />
          <select
            name="priority"
            value={editedTask.priority}
            onChange={handleChange}
            className="w-full px-2 py-1 mb-2"
          >
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
          <button onClick={handleSaveClick} className="bg-green-500 text-white px-3 py-1 rounded">
            Save
          </button>
        </div>
      ) : (
        // Display the task details
        <div>
          <h1 style={{ color: "var(--text-b)" }} className="text-normal font-medium">
            {ele.task}
          </h1>
          <p style={{ color: "var(--text-s)" }} className="text-sm pt-2">
            {ele.description}
          </p>
          <div className="{`priority-${ele.priority.toLowerCase()} mt-3`} text-white" >
            Priority: {ele.priority}
          </div>
          <h1 style={{ color: "var(--text-s)" }} className="text-md font-medium pt-16 flex items-center gap-2">
            <HiMiniCalendarDays className="text-normal" />
            {ele.date}
          </h1>
          <div className="border-dashed border-t-2 border-gray-300 mt-5 mb-3">
            <div className="flex justify-between items-center">
              <button
                className={`${
                  ele.completed ? "bg-green-300" : "bg-yellow-200"
                } rounded-[50px] px-2 py-1 mt-3`}
                onClick={() => handleCompleted(ele.id)}
              >
                {ele.completed ? "completed" : "uncompleted"}
              </button>
              <div className="flex gap-2">
              

<button
  className=" rounded text-black w-[90%] pt-3 flex items-center justify-center"
  onClick={handleEditClick} // Show edit form
>
  <HiPencil className="text-white text-2xl" /> 
</button>
                <button
                  
                  className="text-xl pt-2 text-white"
                  onClick={() => handleDelete(ele.id)}
                >
                  <HiOutlineTrash />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Task;
