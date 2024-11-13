// import React from "react";
// import { HiBell } from "react-icons/hi";

// const MainHeader = ({ setPopup,todo }) => {
//   const currentDate = new Date();
//   const year = currentDate.getFullYear();
//   const monthName = currentDate.toLocaleString("en-US", { month: "long" });
//   const day = currentDate.getDate();
//   return (
//     <>
//     <div className=" flex justify-between mt-3">
//       <div className="w-4/12">
//         <input
//           type="text"
//           placeholder="Search task"
//           style={{backgroundColor: "var(--side-clr)"}}
//           className="w-[100%] px-2 py-2 rounded  placeholder:text-sm"
//         />
//       </div>
//       <div className="w-2/12 pt-2 text-gray-500">
//         {year}-{monthName}-{day}
//       </div>
//       <div className=" w-3/12 flex gap-3">
//         <HiBell className="text-xl text-purple-600 mt-2" />
//         <button
//           className="bg-purple-600 rounded text-white w-[90%] py-2 "
//           onClick={() => setPopup(true)}
//         >
//           ADD TASK
//         </button>
//       </div>
//     </div>
//     <div>
//         <h1 style={{color: "var(--text-b)"}} className="text-xl font-semibold pt-8 pb-10">All tasks ({todo.length} tasks)</h1>
//     </div>
//     </>
//   );
// };

// export default MainHeader;
import React, { useState } from "react";
import { HiBell, HiSearch } from "react-icons/hi"; // Importing search icon

const MainHeader = ({ setPopup, todo }) => {
  const [searchQuery, setSearchQuery] = useState(""); // State for the search query
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const monthName = currentDate.toLocaleString("en-US", { month: "long" });
  const day = currentDate.getDate();

  // Filter tasks based on the search query
  const filteredTasks = todo.filter((task) =>
    task.task.toLowerCase().includes(searchQuery.toLowerCase()) ||
    task.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <div className="flex justify-between mt-3">
        <div className="w-4/12 flex items-center gap-2">
          {/* Search input */}
          <HiSearch className="text-lg text-gray-500" />
          <input
            type="text"
            placeholder="Search task"
            style={{ backgroundColor: "var(--side-clr)" }}
            className="w-[100%] px-2 py-2 rounded  placeholder:text-sm"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)} // Update search query on input change
          />
        </div>
        <div className="w-2/12 pt-2 text-gray-500">
          {year}-{monthName}-{day}
        </div>
        <div className="w-3/12 flex gap-3">
          <HiBell className="text-xl text-purple-600 mt-2" />
          <button
            className="bg-purple-600 rounded text-white w-[90%] py-2"
            onClick={() => setPopup(true)}
          >
            ADD TASK
          </button>
        </div>
      </div>

      <div>
        <h1 style={{ color: "var(--text-b)" }} className="text-xl font-semibold pt-8 pb-10">
          All tasks ({filteredTasks.length} tasks) {/* Display filtered task count */}
        </h1>
      </div>
    </>
  );
};

export default MainHeader;
