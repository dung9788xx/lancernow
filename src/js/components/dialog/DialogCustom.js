
import React from "react";
import Dialog  from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    paper: {
        'text-align': 'center'
    }
}));
function DialogCustom(props) {
    const classes = useStyles();
    return (
        <Dialog
            fullWidth={true}
            maxWidth={"xs"}
            open={props.open}
            onClose={props.handClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description">
            <DialogTitle className={classes.paper}  >{props.title}</DialogTitle>
            <DialogContent>
                <DialogContentText className={classes.paper}  id="alert-dialog-description">
                    {props.children}
                </DialogContentText>
            </DialogContent>
            <div  className={classes.paper} >
                <Button onClick={props.handClose}  color="primary">
                    OK
                </Button>
            </div>
        </Dialog>

    );
}
export default DialogCustom;
