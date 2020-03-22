import React, { useState, useEffect } from 'react';

import style from './style';
import { Container } from '@material-ui/core';
import TasksListItem from '../../components/TaskListItem';
import { getTasks } from '../../services/tasks.user';

interface Task {
  id: number,
  title: string,
  description: string,
  status: string
}

export default function TasksLists() {
  const styles = style() 
  const [taskList, setTaskList] = useState([])

  useEffect( () => {
    async function loadTasks() {
      const res: [] = await getTasks()
      setTaskList(res)
    }

    loadTasks()
  }, [])

  return (
    <Container maxWidth="sm" className={styles.root}>
      { taskList.map( (item: Task) => {
        return <TasksListItem id={item.id}
                              title={item.title}
                              description={item.description}
                              status={item.status}/>  
      } ) }
    </Container>
  );
}
