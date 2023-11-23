import React from 'react';
import TaskItem from '../taskItem';

export default function TaskList({ lista, handleAll }) {

  return (
    <div>
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
    </div>
  );

}