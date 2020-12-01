import { Paper } from '@material-ui/core';
import React from 'react';
import '../App.css';

function Admin() {
    return (
        <Paper elevation={3}>
            <Grid container>
                <Grid item xs={12}>
                    <DispatchForm {...({ currentId, setCurrentId })} />
                </Grid>
            </Grid>
        </Paper>
    );
}

export default Admin;