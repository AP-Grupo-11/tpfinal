import React, { useState, useEffect } from 'react';
import { Box, Button, Grid } from '@mui/material';
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
      const newArray = taskList.filter((item, index) => index != key)
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

  useEffect(() => {
    const newArray = readLocalStorage();
    setTaskList([...newArray])
  }, [])

  return (
    <Grid container justifyContent="center">
      <Grid item xs={8} justifyContent="end">
        <Box textAlign="right" maxWidth={1600} my={2} >
          <Button variant="contained" onClick={handleClickOpen}>Añadir</Button>
        </Box>
        <TaskList lista={taskList} handleAll={handleAll}></TaskList>
        <DialogForm open={open} onClose={handleClose} onAdd={handleAdd} />
      </Grid>
    </Grid>
  );
}

export default App;
