import { Paper, Grid } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import '../App.css';
import DispatchForm from "./DispatchForm";
import * as actions from "../actions/dispatch";
import { connect } from "react-redux";


const Admin = ({ classes, ...props }) => {
    const [currentId, setCurrentId] = useState(0)

    const { fetchAllDispatches } = props;

    useEffect(() => {
        fetchAllDispatches();
    }, [fetchAllDispatches]);

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

const mapStateToProps = state => ({
    dispatchList: state.dispatch.list
})

const mapActionToProps = {
    fetchAllDispatches: actions.fetchAll,
    deleteDispatch: actions.Delete
}

export default connect(mapStateToProps, mapActionToProps)(Admin);