
import React, { useState } from "react";

const Popup = ({ popup, setPopup, handleSubmitData }) => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("Medium"); // Default priority

  return (
    <div
      style={{
        display: popup ? "block" : "none",
        position: "fixed",
        zIndex: 99999,
        backgroundColor: "rgba(0,0,0,0.5)",
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
      }}
    >
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          backgroundColor: "var(--main-clr)",
        }}
        className="popup w-4/12 rounded h-[90vh]"
      >
        <div className="popup-content px-5 flex flex-col">
          <div className="flex justify-between pt-5">
            <h1 style={{ color: "var(--text-b)" }} className="text-xl">Add a task</h1>
            <button style={{ color: "var(--text-b)" }} className="text-xl" onClick={() => setPopup(false)}>x</button>
          </div>
          <label htmlFor="Title" className="pt-5" style={{ color: "var(--text-s)" }}>
            Title
          </label>
          <input
            style={{ backgroundColor: "var(--side-clr)", color: "var(--text-s)" }}
            id="Title"
            type="text"
            placeholder="e.g., study for the test"
            className="py-2 mt-1 px-2 rounded"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label htmlFor="Date" className="pt-8" style={{ color: "var(--text-s)" }}>
            Date
          </label>
          <input
            id="Date"
            type="date"
            style={{ backgroundColor: "var(--side-clr)", color: "var(--text-b)" }}
            className="py-2 mt-1 px-2 rounded"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <label htmlFor="Description" className="pt-8" style={{ color: "var(--text-s)" }}>
            Description (optional)
          </label>
          <textarea
            id="Description"
            cols="30"
            rows="2"
            className="rounded mt-1 px-2 py-2"
            style={{ backgroundColor: "var(--side-clr)", color: "var(--text-s)" }}
            placeholder="e.g., study for the test"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          
          {/* Priority Selector */}
          <label htmlFor="Priority" className="pt-8" style={{ color: "var(--text-s)" }}>
            Priority
          </label>
          <select
            id="Priority"
            className="py-2 mt-1 px-2 rounded"
            style={{ backgroundColor: "var(--side-clr)", color: "var(--text-s)" }}
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>

          <button
  className="bg-purple-500 rounded py-2 mt-8 text-white"
  onClick={() => {
    handleSubmitData(title, date, description, priority, setTitle, setDate, setDescription, setPriority);
    setPopup(false);
  }}
>
  Add a task
</button>

        </div>
      </div>
    </div>
  );
};

export default Popup;
