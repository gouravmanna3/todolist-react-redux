import _ from 'lodash';

export interface TodosState {
  todos: Todos[]
}

export interface Todos {
  id: string,
  title: string,
  completed: boolean,
  important: boolean
}

function lodaStateFromLocalStorage() {
  const stringState = window.localStorage.getItem('todos');
  if(stringState && !_.isEmpty(JSON.parse(stringState))) {
    return JSON.parse(stringState);
  }
  return null;
}

export const initialState: TodosState = lodaStateFromLocalStorage() || {
  todos: [
    {
      id: '0',
      title: 'Buy Milk',
      completed: true,
      important: true
    },
    {
      id: '1',
      title: 'Buy Medicines',
      completed: false,
      important: true
    },
    {
      id: '2',
      title: 'Clean Room',
      completed: true,
      important: false
    },
    {
      id: '3',
      title: 'Read React',
      completed: false,
      important: false
    }
  ]
};

  