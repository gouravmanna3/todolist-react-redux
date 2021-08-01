import React, { ChangeEvent, useState, useRef, RefObject } from 'react';
import { Box, Button, TextField } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import { ADD_TODO } from '../redux/actions';

const useStyle = makeStyles((theme: Theme) => createStyles({
  textField: {
    width: '500px'
  },
  addButton: {
    height: 55,
    marginLeft: '10px'
  }
}));

const TodoAdder = () => {
  const [title, setTitle] = useState('');
  const [errorValidation, setErrorValidation] = useState(false);
  const titleFieldRef : { current: HTMLInputElement | null } = useRef(null);
  const dispatch = useDispatch();

  const handleTextChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setTitle(e.target.value);
    setErrorValidation(false);
  }

  const addTodoItem = () => {
    if(title) {
      dispatch({
        type: ADD_TODO,
        payload: {
          title
        }
      });
      setTitle('');
    } else {
      setErrorValidation(true);
    }
    
    // titleFieldRef.current?.value = ''
  }

  const classes = useStyle();
  return (
    <Box>
      <TextField 
        // inputRef={titleFieldRef} 
        id="outlined-basic" 
        className={classes.textField} 
        label="Add New Todo" 
        variant="filled" 
        onChange={handleTextChange}
        error={errorValidation}
        {...(errorValidation && {helperText: 'Please Add Todo'})}
      />
      <Button variant="contained" color="primary" className={classes.addButton} onClick={addTodoItem}>
        Add
      </Button>
    </Box>
  )
}

export default TodoAdder;