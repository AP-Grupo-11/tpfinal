import React from 'react';
import List from '@mui/material/List';
import TaskItem from '../taskItem';

export default function TaskList({ lista, handleAll }) {

  return (
    <List sx={{ width: '100%' }}>
      {lista.map((task, index) => 
      (
        <TaskItem 
          key={index} 
          index={index} 
          title={task.title} 
          description={task.description} 
          done={task.done} 
          handleAll={handleAll}  />
      ))}
    </List>
  );

}