import { Typography } from '@material-ui/core';
import React, { useState } from 'react';

const tasksData = {
  tasks: {
    task1: {
      content:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam eveniet quibusdam dolor fugiat amet modi neque iste! Optio enim maxime asperiores laudantium quo velit corrupti et, eum, qui labore debitis.',
    },
    task2: {
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, totam tempore porro quis adipisci incidunt ab vero magnam minima, exercitationem harum! Ea deleniti dignissimos minus nostrum saepe labore, mollitia quidem.',
    },
    task3: {
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, totam tempore porro quis adipisci incidunt ab vero magnam minima, exercitationem harum! Ea deleniti dignissimos minus nostrum saepe labore, mollitia quidem.',
    },
  },
  columns: {
    col1: { title: 'to do', taskIds: ['task1', 'task2'] },
    col2: { title: 'done', taskIds: ['task3'] },
  },
  columnsOrder: ['col1', 'col2'],
};

function DragAndDrop() {
  return <div className='board'></div>;
}

export default DragAndDrop;
