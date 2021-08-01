import React from 'react';
import { useSelector } from 'react-redux';
import { Box, Divider, Grid, Typography, List } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { TodosState } from '../redux/initial-state';
import TodoItem from './TodoItem';
import TodoAdder from './TodoAdder';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    margin: 20,
    padding: 20,
    backgroundColor: "rgb(92.9%, 92.9%, 92.9%)"
  }
}));

const TodosContainer = () => {
  const classes = useStyles();
  const { todos } = useSelector((state: TodosState) => {
    return {
      todos: state.todos
    }
  });

  const prioritisedTodos = (function(){
    return todos?.sort(function(a,b){ return Number(b.important) - Number(a.important)})
  })();

  return (
    <Box className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Typography align="left" variant="h5" gutterBottom>
            My Todos
          </Typography>
          <Divider />
          <List>
            {
              prioritisedTodos?.filter(todo => !todo.completed).map((todo, key) => {
                return <TodoItem {...todo} key={key} />
              })
            }
          </List>
        </Grid>
        <Grid item xs={6}>
          <Typography align="left" variant="h5" gutterBottom>
            Completed
          </Typography>
          <Divider />
          <List>
            {
              prioritisedTodos?.filter(todo => todo.completed).map((todo, key) => {
                return <TodoItem {...todo} key={key} />
              })
            }
          </List>
        </Grid>
      </Grid>
    </Box>
  )
}

export default TodosContainer;