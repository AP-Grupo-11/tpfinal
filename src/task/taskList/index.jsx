import React from 'react';
import List from '@mui/material/List';
import TaskItem from '../taskItem';

export default function TaskList(props) {

  const { lista } = props;

  return (
    <List sx={{ width: '100%' }}>
      {props.lista.map((task, index) => (
        <TaskItem key={index} title={task.title} description={task.description} />
      ))}
    </List>
  );

}