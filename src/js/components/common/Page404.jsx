import React, {useEffect, useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import i18n from "../../i18n/i18n";
import Footer from "../footer/footer";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: "center",
        color: theme.palette.text.secondary
    }
}));

export default function Page404() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid
                xs={12}
                style={{'height':'50vh'}}
                container
                direction="row"
                justify="center"
                alignItems="center"
            >

                <Grid  xs={12}>
                    <Typography align={"center"} variant={'h1'}>
                        404
                    </Typography>
                </Grid>
                    <Typography variant={'h6'}>
                        {i18n.t('page_not_found')}
                    </Typography>

            </Grid>
            <Box mt={8}>
                <Footer/>
            </Box>
        </div>
    );
}
