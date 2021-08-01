import React from 'react';
import { ListItem, Checkbox, FormGroup, FormControlLabel, Typography, ListItemSecondaryAction, IconButton } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { Todos } from '../redux/initial-state';
import { DELETE_TODO, IMPORTANT_TODO, TOGGLE_COMPLETED } from '../redux/actions';
import DeleteIcon from '@material-ui/icons/Delete';
import StarIcon from '@material-ui/icons/Star';
import StarOutlineIcon from '@material-ui/icons/StarOutline';


const TodoItem = (props: Todos) => {
  const { title, id, completed, important } = props;
  const dispatch = useDispatch();

  const toggleCheckbox = () => {
    dispatch({
      type: TOGGLE_COMPLETED,
      payload: {
        id
      }
    })
  };

  const handleDeleteClick = () => {
    dispatch({
      type: DELETE_TODO,
      payload: {
        id
      }
    })
  }

  const toggleImportant = () => {
    dispatch({
      type: IMPORTANT_TODO,
      payload: {
        id
      }
    })
  }

  return (
    <ListItem dense>
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              checked={completed}
              onChange={toggleCheckbox}
              name="todos"
              color="primary"
            />
          }
          label={
            <Typography 
              style={{
              textDecoration: completed ? "line-through" : ''
            }}>
              {title}
            </Typography>
          }
        />
      </FormGroup>
      <ListItemSecondaryAction> 
        <IconButton edge="end" aria-label="not-important" onClick={toggleImportant}>
          {
            important ? <StarIcon /> : <StarOutlineIcon />
          }
        </IconButton>
        <IconButton edge="end" aria-label="delete" onClick={handleDeleteClick}>
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  )
}

export default TodoItem;