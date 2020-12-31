
import React from "react";
import Dialog  from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
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
