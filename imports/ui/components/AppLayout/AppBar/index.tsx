import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    logoutButton: {
      color: 'white',
    },
    imgContainer: {
      flexGrow: 1,
    },
    img: {
      width: 138,
      height: 60,
      cursor: 'pointer',
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
    },
  })
);

const AppBarComponent = () => {
  const classes = useStyles();
  const history = useHistory()

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <div className={classes.imgContainer}>
            <img
              src="/favicon.png"
              alt="Good Better"
              className={classes.img}
              onClick={() => history.push('/')}
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default AppBarComponent;
