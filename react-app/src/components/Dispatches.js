import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/dispatch";
import { Grid , Paper, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, withStyles} from "@material-ui/core";
import DispatchForm from "./DispatchForm";


const styles = theme => ({
    root: {
        "& .MuiTableCell-head": {
            fontSize: "1.25rem"
        }
    },
    paper: {
        margin: theme.spacing(2),
        padding: theme.spacing(2)
    }
})

const Dispatches = ({ classes, ...props }) => {
    // const [x, setx] = useState(0)
    // setx(5)

    useEffect(() => {
        props.fetchAllDispatches()
    }, [])

    return (
        <Paper className={classes.paper} elevation={3}>
            <Grid container>
                <Grid item xs={12}>
                    <DispatchForm />
                </Grid>
                <Grid item xs={12}>
                    <TableContainer>
                        <Table>
                            <TableHead className={classes.root}>
                                <TableRow>
                                    <TableCell>Title</TableCell>
                                    <TableCell>Author</TableCell>
                                    <TableCell>Photograper</TableCell>
                                    <TableCell>Location</TableCell>
                                    <TableCell>Description</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    props.dispatchList.map((record, index) => {
                                        return (<TableRow key={index} hover>
                                            <TableCell>{record.title}</TableCell>
                                            <TableCell>{record.author}</TableCell>
                                            <TableCell>{record.photographer}</TableCell>
                                            <TableCell>{record.location}</TableCell>
                                            <TableCell>{record.description}</TableCell>
                                        </TableRow>)
                                    })
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>
        </Paper>
    );
}

const mapStateToProps = state => ({
    dispatchList:state.dispatch.list
})

const mapActionToProps = {
    fetchAllDispatches : actions.fetchAll
}

export default connect(mapStateToProps, mapActionToProps)(withStyles(styles)(Dispatches));