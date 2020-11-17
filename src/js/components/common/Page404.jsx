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
import Footer from "./footer";
import {Grid} from '@material-ui/core';
import Paper from "@material-ui/core/Paper";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    }
}));

export default function Page404() {
    const classes = useStyles();
    return (
     <div className={classes.root}>
        <Grid spacing={1}
              xs={12}
              style={{height: '100vh'}}
              container
              direction="column"
              justify="center"
              alignItems="center"
        >

            <Grid item >
                <Typography align={"center"} variant={'h1'}>
                    404
                </Typography>
            </Grid>
            <Grid item>
                <Typography align={"center"} variant={'h6'}>
                    {i18n.t('page_not_found')}
                </Typography>
            </Grid>
            <Grid  >
                <Link href="/signin" variant="body1">
                    {i18n.t('back_home')}
                </Link>
            </Grid>
             <Box mt={8}>
                 <Footer/>
             </Box>
        </Grid>

        </div>
    );
}
