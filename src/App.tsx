import React from 'react';
import { AppBar, Box, Container, Paper, Toolbar, Typography } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TodoAdder  from './components/TodoAdder';

import './App.css';
import TodosContainer from './components/TodosContainer';

const useStyles = makeStyles((theme: Theme) => createStyles({
  appContainer: {
    padding: '0px 100px',
    marginTop: 100
  },
  wrapper: {
    textAlign: 'center',
    width: '100%'
  }
}))

function App() {
  const classes = useStyles();
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5">
            Todos
          </Typography>
        </Toolbar>
      </AppBar>
      <Container className={classes.appContainer} fixed>
        <Paper className={classes.wrapper} elevation={0}>
          <TodoAdder />
          <TodosContainer />
        </Paper>
      </Container>
    </Box>
  );
}

export default App;
