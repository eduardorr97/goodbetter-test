import React, { useState } from 'react';
import EditIcon from '@material-ui/icons/Edit';
import SaveIcon from '@material-ui/icons/Save';
import CancelIcon from '@material-ui/icons/Cancel';
import {
  AutoForm,
  TextField,
  SelectField,
  SubmitField,
} from 'uniforms-material';
import {
  Grid,
  Button,
  makeStyles,
  Theme,
  createStyles,
} from '@material-ui/core';
import { userType, userSchemaBridge } from '../../../../api/users/schema';
import { DeleteForever } from '@material-ui/icons';
import { useHistory } from 'react-router-dom';
import { ImageField } from "./image"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    cancelButton: {
      marginRight: theme.spacing(2),
    },
  })
);

interface Props {
  model?: userType;
  setParentState: any
}

type StateType = {
  isSubmitting: boolean;
  canEdit: boolean;
  id: String
};

const FromComponent = ({ model, setParentState }: Props) => {
  const classes = useStyles();
  const history = useHistory()

  const [state, setState] = useState<StateType>({
    isSubmitting: false,
    canEdit: model ? true : false,
    id: ''
  });

  const handleSubmit = (user: userType) => {
    setState({ ...state, isSubmitting: true });
    const methodName = model ? 'user.update' : 'user.create';
    Meteor.call(
      methodName,
      { user },
      (error, result) => {
        if (result) {
          setParentState(result)
        }
        setState({ ...state, isSubmitting: false })
      }
    );
  };

  const handleDelete = (user) => {
    Meteor.call(
      'user.delete',
      { user },
      (error, result) => {
        if (result) {
          setParentState('')
        }
        setState({ ...state, isSubmitting: false })
      }
    );
  };

  const handleCancel = () => {
    setParentState('')
    setState({ ...state, isSubmitting: false })
  };

  return (
    <>
      {history.location.pathname.split('/').pop() !== "editUser" || model ?
        <AutoForm
          model={model}
          schema={userSchemaBridge}
          onSubmit={handleSubmit}
          disabled={state.canEdit}
        >
          <Grid container spacing={2} alignItems='center'>
            <Grid item >
              <ImageField name="picture" />
            </Grid>
            <Grid item container spacing={3} direction="column">
              <Grid item >
                <TextField name="username" />
              </Grid>
              <Grid item >
                <TextField
                  name="birth"
                  id="date"
                  label="Birth"
                  type="date"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
              <Grid item >
                <SelectField name="gender" allowedValues={['male', 'female']} />
              </Grid>
            </Grid>
          </Grid>
          <Grid container spacing={2} direction="row" alignItems="center" >
            <Grid container direction="row" item>
              {history.location.pathname.split('/').pop() === "editUser" && model ? (
                <>
                  <Grid item>
                    <SubmitField
                      startIcon={<EditIcon />}
                      color="primary"
                      type="reset"
                      disabled={state.isSubmitting}
                    >
                      Save
                </SubmitField>
                  </Grid>
                  <Grid item>
                    <Button
                      startIcon={<DeleteForever />}
                      color="secondary"
                      disabled={state.canEdit}
                      onClick={() => handleDelete(model)}
                    >
                      Delete
                </Button>
                  </Grid>
                </>

              ) : (
                  <>
                    <Grid item>
                      <Button
                        type="reset"
                        startIcon={<CancelIcon />}
                        className={classes.cancelButton}
                        onClick={handleCancel}
                      >
                        Cancel
                      </Button>
                    </Grid>
                    <Grid item>
                      <SubmitField
                        type="reset"
                        color="primary"
                        startIcon={<SaveIcon />}
                        disabled={state.isSubmitting}
                      >
                        Add
                      </SubmitField>
                    </Grid>
                  </>
                )
              }
            </Grid>
          </Grid>
        </AutoForm>
        :
        <></>
      }
    </>
  );
};

export default FromComponent;
