// import React from "react";
// import List from "./List";
// import Addtask from "./Addtask"

// const Tasklist = ({
//   status,
//   todo,
//   setPopup,
//   handleDelete,
//   handleCompleted,
//   handleImportant,

// }) => {
//   const renderSwitch = (status) => {
//     switch (status) {
//       // case "All":
//       //   return (
//       //     <List
//       //       todo={todo}
//       //       setPopup={setPopup}
//       //       handleDelete={handleDelete}
//       //       handleCompleted={handleCompleted}
//       //       handleImportant={handleImportant}
          
//       //     />
//       //   );
//       //   break;

//       case "All":
//         return <List todo={todo} setPopup={setPopup} handleDelete={handleDelete} handleCompleted={handleCompleted} handleImportant={handleImportant} />;
//       case "High":
//         return <List todo={todo.filter((ele) => ele.priority === "High")} setPopup={setPopup} handleDelete={handleDelete} handleCompleted={handleCompleted} handleImportant={handleImportant} />;
//       case "Medium":
//         return <List todo={todo.filter((ele) => ele.priority === "Medium")} setPopup={setPopup} handleDelete={handleDelete} handleCompleted={handleCompleted} handleImportant={handleImportant} />;
//       case "Low":
//         return <List todo={todo.filter((ele) => ele.priority === "Low")} setPopup={setPopup} handleDelete={handleDelete} handleCompleted={handleCompleted} handleImportant={handleImportant} />;




//       case "Important":
//         return (
//           <List
//             todo={todo.filter((ele) => ele.important)}
//             setPopup={setPopup}
//             handleDelete={handleDelete}
//             handleCompleted={handleCompleted}
//             handleImportant={handleImportant}
//           />
//         );
//         break;
//         case "Complete":
//         return (
//           <List
//             todo={todo.filter((ele) => ele.completed)}
//             setPopup={setPopup}
//             handleDelete={handleDelete}
//             handleCompleted={handleCompleted}
//             handleImportant={handleImportant}
//           />
//         );
//         break;
//         case "Uncomplete":
//         return (
//           <List
//             todo={todo.filter((ele) => !ele.completed)}
//             setPopup={setPopup}
//             handleDelete={handleDelete}
//             handleCompleted={handleCompleted}
//             handleImportant={handleImportant}
//           />
//         );
//         break;
//         default:
//         return (
//           <List
//           todo={todo}
//           setPopup={setPopup}
//           handleDelete={handleDelete}
//           handleCompleted={handleCompleted}
//           handleImportant={handleImportant}
//         />
//         );
//     }
//   };

//   return ( 
//   <div className="flex flex-wrap gap-5">
//     {renderSwitch(status)}
//     <Addtask setPopup={setPopup}/>
//   </div>
//   );
// };

// export default Tasklist;
import React from "react";
import List from "./List";
import Addtask from "./Addtask";

const Tasklist = ({
  status,
  todo,
  setPopup,
  handleDelete,
  handleCompleted
}) => {
  const renderSwitch = (status) => {
    switch (status) {
      case "All":
        return <List todo={todo} setPopup={setPopup} handleDelete={handleDelete} handleCompleted={handleCompleted} />;
      case "High":
        return <List todo={todo.filter((ele) => ele.priority === "High")} setPopup={setPopup} handleDelete={handleDelete} handleCompleted={handleCompleted} />;
      case "Medium":
        return <List todo={todo.filter((ele) => ele.priority === "Medium")} setPopup={setPopup} handleDelete={handleDelete} handleCompleted={handleCompleted} />;
      case "Low":
        return <List todo={todo.filter((ele) => ele.priority === "Low")} setPopup={setPopup} handleDelete={handleDelete} handleCompleted={handleCompleted} />;
      case "Complete":
        return <List todo={todo.filter((ele) => ele.completed)} setPopup={setPopup} handleDelete={handleDelete} handleCompleted={handleCompleted} />;
      case "Uncomplete":
        return <List todo={todo.filter((ele) => !ele.completed)} setPopup={setPopup} handleDelete={handleDelete} handleCompleted={handleCompleted} />;
      default:
        return <List todo={todo} setPopup={setPopup} handleDelete={handleDelete} handleCompleted={handleCompleted} />;
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
