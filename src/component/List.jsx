// import React from 'react'
// import Task from './Task'

// const List = ({todo, setPopup, handleDelete, handleCompleted ,handleImportant}) => {
//   return todo.map((ele) => (
//     <Task 
//     ele={ele}
//     handleDelete={handleDelete}
//     handleCompleted={handleCompleted}
//     handleImportant={handleImportant}

//     />
//   ))
// }

// export default List

// import React from 'react';
// import Task from './Task';

// const List = ({ todo, handleDelete, handleCompleted }) => {
//   return todo.map((ele) => (
//     <Task 
//       key={ele.id}
//       ele={ele}
//       handleDelete={handleDelete}
//       handleCompleted={handleCompleted}
//     />
//   ));
// };

// export default List;
import React from "react";
import Task from "./Task";

const List = ({ todo, setPopup, handleDelete, handleCompleted, handleEdit }) => {
  return todo.map((ele) => (
    <Task
      key={ele.id}
      ele={ele}
     
      handleDelete={handleDelete}
      handleCompleted={handleCompleted}
      handleEdit={handleEdit} 
    />
  ));
};

export default List;


