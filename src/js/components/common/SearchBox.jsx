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
import withWidth from "@material-ui/core/withWidth";
import {mobileSize} from "../../constansts/constCommon";
import Input from "@material-ui/core/Input";
import withStyles from "@material-ui/core/styles/withStyles";
import InputBase from "@material-ui/core/InputBase";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    button: {
        padding: '10px',
        width: '100%',
        height: '3.0em',
        'line-height': '1.1em',
        background: '#4A90E2',
    },
}));
const BootstrapInput = withStyles((theme) => ({
    root: {
        width: '100%',
    },
    input: {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: theme.palette.common.white,
        border: '1px solid #ced4da',
        fontSize: 20,
        textAlign: 'center',
        padding: '10px 12px',
        '&:focus': {
            borderColor: theme.palette.primary.main,
        },
    },
}))(InputBase);

function SearchBox(props) {
    const classes = useStyles();
    const [search, setSearch] = useState('');
    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && search.trim().length>0) {
            props.onClick(search)
        }
    }
    return (
        <Grid xs={mobileSize.indexOf(props.width) > -1 ? 12 : 7} container
              alignContent='center'
              spacing={1}
              justify='center'>
            <Grid  xs={8} item>
                <BootstrapInput onKeyDown={handleKeyDown} value={search}  onE onChange={
                    (e) => {
                        setSearch(e.target.value)
                    }
                }  defaultValue="react-bootstrap" id="bootstrap-input"/>
            </Grid>
            <Grid xs={2} item>
                <Button onClick={()=>props.onClick(search)} fullWidth variant="contained" className={classes.button} color="primary">
                    {i18n.t('search')}
                </Button>
            </Grid>
        </Grid>

    );
}

export default withWidth()(SearchBox);
