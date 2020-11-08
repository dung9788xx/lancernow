
import React from "react";
import Dialog  from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import CircularProgress from '@material-ui/core/CircularProgress';
import {useSelector} from "react-redux";
function Progress(props) {
    const isStart =  useSelector(state => state.progress.isStart)
    return (
        <Dialog
            PaperProps={{
                style: {
                    backgroundColor: 'transparent',
                    boxShadow: 'none',
                    color: 'red'
                },
            }}
            open={isStart}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">{props.title}</DialogTitle>
            <DialogContent>
                   <CircularProgress color="secondary" />
            </DialogContent>
        </Dialog>


    );
}
export default Progress;
