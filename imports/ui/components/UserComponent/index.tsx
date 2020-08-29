import React, { useState } from 'react';
import { Users } from '../../../api/users/users';
import { Grid, TextField } from '@material-ui/core';
import { useTracker } from 'meteor/react-meteor-data';
import FromComponent from './FormComponent/index';
import { useHistory } from 'react-router-dom';

const ListComponent = () => {
  const history = useHistory()
  const [state, setState] = useState('')

  const subsReady = useTracker(() => Meteor.subscribe('users', { _id: state }).ready())

  const item = useTracker(() => Users.findOne({ _id: state }), [subsReady])

  return (
    <>
      <Grid container spacing={2} justify="center" direction="row" alignItems="center">

        <Grid item>
          <TextField
            id='id'
            label="Id"
            onChange={(event) => setState(event.target.value)}
            variant="outlined"
            value={state}
            InputProps={{
              readOnly: history.location.pathname.split('/').pop() !== "editUser",
            }}
          />
        </Grid>
      </Grid>
      <Grid container item direction="column" justify='center' alignItems='center'>
        {item ? <FromComponent model={item} setParentState={setState} /> : <FromComponent setParentState={setState} />}
      </Grid>
    </>
  );
};

export default ListComponent;
