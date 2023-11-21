import React, { useState } from 'react';
import { Box } from '@mui/material';
import TaskList from './task/taskList';
import DialogForm from './dialogForm';

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

  return (
    <Box textAlign="left" maxWidth={1600} mt={2}>
      <button textAlign='center' onClick={handleClickOpen}>Añadir</button>
      <DialogForm open={open} onClose={handleClose} onAdd={handleAdd} />
      <TaskList lista={taskList}></TaskList>
    </Box>
  );
}

export default App;