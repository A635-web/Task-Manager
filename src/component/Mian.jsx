// import React from "react";
// import MainHeader from "./MainHeader";
// import Tasklist from "./Tasklist";


// const Mian = ({ status, todo, setPopup, handleDelete, handleCompleted ,handleImportant }) => {

//   return (
//     <div style={{backgroundColor: "var(--main-clr)"}} className="hello w-[68vw] min-h-[100vh] relative left-[16vw] px-5 ">
//       <MainHeader setPopup={setPopup} todo={todo} />

//       <Tasklist status={status} todo={todo} setPopup={setPopup} handleDelete={handleDelete} handleCompleted={handleCompleted} handleImportant={handleImportant}/>
      
//     </div>
//   );
// };

// export default Mian;
// import React from "react";
// import MainHeader from "./MainHeader";
// import Tasklist from "./Tasklist";

// const Mian = ({ status, todo, setPopup, handleDelete, handleCompleted }) => {
//   return (
//     <div style={{ backgroundColor: "var(--main-clr)" }} className="hello w-[68vw] min-h-[100vh] relative left-[16vw] px-5">
//       <MainHeader setPopup={setPopup} todo={todo} />
//       <Tasklist status={status} todo={todo} setPopup={setPopup} handleDelete={handleDelete} handleCompleted={handleCompleted} />
//     </div>
//   );
// };

// export default Mian;

import React from "react";
import MainHeader from "./MainHeader";
import Tasklist from "./Tasklist";

const Mian = ({ status, todo, setPopup, handleDelete, handleCompleted, handleEdit }) => {
  return (
    <div style={{ backgroundColor: "var(--main-clr)" }} className="hello w-[68vw] min-h-[100vh] relative left-[16vw] px-5 ">
      <MainHeader setPopup={setPopup} todo={todo} setFilteredTasks={() => {}} />
      <Tasklist
        status={status}
        todo={todo}
        setPopup={setPopup}
        handleDelete={handleDelete}
        handleCompleted={handleCompleted}
        handleEdit={handleEdit} // Pass handleEdit here
      />
    </div>
  );
};

export default Mian;

