import { useState } from 'react'

import './App.css'
import TaskList from './task/taskList'
import { Box } from '@mui/material';

function App() {

  const [elementos, setElementos] = useState(["A", "B", "C", "D"]);

  const agregarElemento = () => {
    setElementos(prevElementos => [...prevElementos, "Nuevo Elemento"]);
  };

  return (
    <Box textAlign="center" maxWidth={1600} mt={2}>
      <button onClick={agregarElemento}>Agregar Elemento</button>
      <TaskList lista={elementos}></TaskList>
    </Box>
  )
}

export default App
