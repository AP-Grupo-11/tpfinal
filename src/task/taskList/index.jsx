import React from 'react';
import List from '@mui/material/List';
import TaskItem from '../taskItem';

export default function TaskList(props) {

  const { lista } = props;

  return (
    <List sx={{ width: '100%' }}>
      {lista.map((elemento, index) => (
        <TaskItem key={index} texto={elemento} />
      ))}
    </List>
  );

}