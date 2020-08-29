import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from './AppBar';
import AppDrawer from './AppDrawer';
import { Divider } from '@material-ui/core';
import { ErrorBoundary } from 'react-error-boundary';

type Props = {
  children: React.ReactNode;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    content: {
      marginTop: theme.spacing(10),
      marginRight: theme.spacing(2),
      marginBottom: theme.spacing(10),
      marginLeft: 215,
    },
    divider: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(2),
    },
  })
);


const AppLayout = ({ children }: Props) => {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <AppBar />
      <AppDrawer />
      <div className={classes.content}>
        <Divider className={classes.divider} />
        {children}
      </div>
    </>
  );
};

export default AppLayout;
