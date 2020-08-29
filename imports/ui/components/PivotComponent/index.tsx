import React, { useState } from "react";
import { Grid, TextField } from '@material-ui/core';

const PivotComponent = () => {
    const [state, setState] = useState({
        index: null,
        error: null
    });

    const findPivotIndex = async (event) => {
        try {
            const numbers = event.target.value.trim().split(' ').map(number => parseInt(number))
            Meteor.call('findPivotIndex', numbers, (error, index) => error ? setState({ ...state, error }) : setState({ ...state, index }))
        } catch (error) {
            setState({ ...state, error })
        }
    }

    return (
        <>
            <Grid container spacing={2} justify="space-between" direction="row" alignItems="center">
                <Grid item>
                    <TextField
                        id='numbersInput'
                        label="NumbersInput"
                        onChange={findPivotIndex}
                        variant="outlined"
                    />
                    <TextField
                        id='pivotIndex'
                        label="PivotIndex"
                        variant="outlined"
                        value={state.index !== null ? state.index : ''}
                    />
                </Grid>
            </Grid>
        </>
    );
}

export default PivotComponent;