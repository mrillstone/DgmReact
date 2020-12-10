import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/dispatch";
import { Grid , Paper, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, withStyles, ButtonGroup, Button} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { useToasts } from "react-toast-notifications";
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
    const [currentId, setCurrentId] = useState(0)

    useEffect(() => {
        props.fetchAllDispatches()
    }, [])

    //toast msg.
    const { addToast } = useToasts()

    const onDelete = id => {
        if (window.confirm('Are you sure to delete this record?'))
            props.deleteDispatch(id,()=>addToast("Deleted successfully", { appearance: 'info' }))
    }

    return (
        <Paper className={classes.paper} elevation={3}>
            <Grid container>
                {/* <DispatchForm {...({ currentId, setCurrentId })} /> */}
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
                                    <TableCell></TableCell>
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
                                            <TableCell>
                                                <ButtonGroup variant="text">
                                                    <Button><EditIcon color="primary"
                                                        onClick={() => { setCurrentId(record.id) }} /></Button>
                                                    <Button><DeleteIcon color="secondary"
                                                        onClick={() => onDelete(record.id)} /></Button>
                                                </ButtonGroup>
                                            </TableCell>
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
    dispatchList: state.dispatch.list
})

const mapActionToProps = {
    fetchAllDispatches: actions.fetchAll,
    deleteDispatch: actions.Delete
}

export default connect(mapStateToProps, mapActionToProps)(withStyles(styles)(Dispatches));