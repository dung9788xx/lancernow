import React, {useEffect, useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import i18n from "../../i18n/i18n";
import {useSelector, useDispatch} from "react-redux";
import {requestLogin, userLogin} from "../../actions/user";
import {useHistory} from "react-router";
import DialogCustom from "../dialog/DialogCustom";
import Progress from "../dialog/Progress";
import {getBearerToken, setUserInfo} from "../../services/storageUtils";
import {startProgress} from "../../actions/progressDialog";
import {openDialog} from "../../actions/dialog";
import Footer from "../common/footer";
import {PASSWORD_LENGTH} from "../../constansts/apiConstants";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardPost from "./CardPost";
import Dashboard from "../dashboard/Dashboard";
import Header from "./header";
import SearchBox from "./SearchBox";

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(3),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function HomePage() {
    const classes = useStyles();
    const [search, setSearch] = useState('');
    return (
        // <div style={{width:'100vw',background:'red'}}  component="main">
        <div>
            <Header/>
            <div className={classes.paper}>
                <SearchBox value={search} onChange={
                    (e) => {
                        setSearch(e.target.value)
                    }
                } placeholder={i18n.t('search')}/>
                <CardPost/>
            </div>
        </div>
    );
}
