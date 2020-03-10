import React, { useState } from 'react';
import './App.css';
import ComplaintsForm from './components/complaints-form';
import {
  Container,
  CssBaseline,
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  ListItemText,
  List,
  ListItem,
  ListItemIcon,
  Divider,
  Typography
} from '@material-ui/core';
import {
  Assignment as ComplaintIcon,
  Menu as MenuIcon,
  Info as InfoIcon
} from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  menuHeader: {
    padding: '16px'
  },
  menuList: {
    width: '18rem'
  }
});

function App() {
  const classes = useStyles();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon onClick={() => setMenuOpen(true)} />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer open={menuOpen} onClose={() => setMenuOpen(false)}>
        <Typography variant="h5" className={classes.menuHeader}>
          Menu
        </Typography>
        <Divider />
        <List className={classes.menuList}>
          <ListItem button>
            <ListItemIcon>
              <ComplaintIcon />
            </ListItemIcon>
            <ListItemText primary="Submit complaint" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <InfoIcon />
            </ListItemIcon>
            <ListItemText primary="About" />
          </ListItem>
        </List>
      </Drawer>
      <Container>
        <ComplaintsForm />
      </Container>
    </>
  );
}

export default App;
