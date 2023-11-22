import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import TaskList from './task/taskList';
import DialogForm from './dialogForm';
import { readLocalStorage, updateLocalStorage } from './helpers/localStorageHelper.js';



function App() {
  const [taskList, setTaskList] = useState([]);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  
  const handleAdd = (newTask) => {
    updateLocalStorage([...taskList, newTask]);
    setTaskList(prevTasks => [...prevTasks, newTask]);
  };

  const handleAll = {
    handleDelete: (key) => {
      const newArray = taskList.filter(( item, index ) => index != key)
      setTaskList(newArray);
      updateLocalStorage(newArray);
    },
    handleUpdate: (index, value) => {
      const newArray = taskList;
      newArray[index].description = value;
      setTaskList([...newArray])
      updateLocalStorage(newArray)
    },
    handleDone: (index) => {
      const newArray = taskList;
      newArray[index].done = !newArray[index].done;
      setTaskList([...newArray])
      updateLocalStorage(newArray)
    }
  }

  useEffect(()=>{
    const newArray = readLocalStorage();
    setTaskList([...newArray])
  },[])

  return (
    <Box textAlign="left" maxWidth={1600} mt={2} >
      <button  onClick={handleClickOpen}>Añadir</button>
      <DialogForm open={open} onClose={handleClose} onAdd={handleAdd} />
      <TaskList lista={taskList} handleAll={handleAll}  ></TaskList>
    </Box>
  );
}

export default App;
