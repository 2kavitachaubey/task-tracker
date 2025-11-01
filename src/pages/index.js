import React from 'react';
import TaskForm from '@/components/TaskForm';
import TaskList from '@/components/TaskList';

const index = () => {
  return (
    <div>
      <TaskForm/>
      <TaskList/>
    </div>
  )
}

export default index;
