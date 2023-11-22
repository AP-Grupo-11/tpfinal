import React, { useState } from 'react';
import { Box } from '@mui/material';
import TaskList from './task/taskList';
import DialogForm from './dialogForm';

import { updateLocalStorage } from './helpers/localStorageHelper';

function App() {
  const [taskList, setTaskList] = useState([
    { title: "A", description: "Descripción A" },
    { title: "B", description: "Descripción B" },
    { title: "C", description: "Descripción C" },
    { title: "D", description: "Descripción D" },
    ]);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  
  const handleAdd = (newTask) => {
    setTaskList(prevTasks => [...prevTasks, newTask]);
  };
  
  const handleDelete = (key) => {
    const newArray = taskList.filter(( item, index ) => index != key)
    setTaskList(newArray)
  }

  const handleUpdate = (index, value) => {
    const newArray = taskList;
    newArray[index].description = value;
    setTaskList([...newArray])
    updateLocalStorage()
  }

  return (
    <Box textAlign="left" maxWidth={1600} mt={2} >
      <button  onClick={handleClickOpen}>Añadir</button>
      <DialogForm open={open} onClose={handleClose} onAdd={handleAdd} />
      <TaskList lista={taskList} handleDelete={handleDelete} handleUpdate={handleUpdate} ></TaskList>
    </Box>
  );
}

export default App;
