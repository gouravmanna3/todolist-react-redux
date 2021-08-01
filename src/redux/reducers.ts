import { nanoid } from 'nanoid';
import { ADD_TODO, DELETE_TODO, IMPORTANT_TODO, TOGGLE_COMPLETED } from './actions';
import { initialState, Todos, TodosState } from './initial-state';

function saveTodoToBrowser(state: TodosState) {
  window.localStorage.setItem('todos', JSON.stringify(state));
}

function reducer(state = initialState, action: any) {
  switch(action.type) {

    case ADD_TODO: {
      const { title } = action.payload;
      const newTodos = [
        ...state.todos,
        {
          id: nanoid(),
          title,
          completed: false,
          important: false
        }
      ];
      saveTodoToBrowser({todos: newTodos});
      return {
        ...state,
        todos: newTodos
      }
      
    }

    case DELETE_TODO: {
      const { id } = action.payload;
      const newTodos = state.todos.filter(todo => todo.id!==id);
      saveTodoToBrowser({todos: newTodos});
      return {
        ...state,
        todos: newTodos
      }
    }
      
    case TOGGLE_COMPLETED: {
      const newTodos = state.todos.map(todo => {
        if(todo.id === action.payload.id) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
      saveTodoToBrowser({todos: newTodos});
      return {
        ...state,
        todos: newTodos
      }
    }

    case IMPORTANT_TODO: {
      const { id } = action.payload;
      const newTodos = state.todos.map(todo => {
        if(todo.id === id) {
          todo.important = !todo.important;
        }
        return todo;
      });
      saveTodoToBrowser({todos: newTodos});
      return {
        ...state,
        todo: newTodos
      }
    }
  
    default:
      saveTodoToBrowser(state);
      return state;
  }
}

export default reducer;