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
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import i18n from "../../i18n/i18n";
import {useSelector, useDispatch} from "react-redux";
import {requestLogin, userLogin} from "../../actions/user";
import { useHistory } from "react-router";
import DialogCustom from "../dialog/DialogCustom";
import Progress from "../dialog/Progress";
import {getBearerToken, setUserInfo} from "../../services/storageUtils";
import {startProgress} from "../../actions/progressDialog";

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                {"aaa"}
            </Link>
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
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
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function ForgotPassword() {
    const classes = useStyles();
    const [email, setEmail] = useState("admin@gmail.com");
    const [isOpen, setOpen] = useState(false);
    const [isLoading, setLoading] = useState(false);
    const [isEmptyEmail, setEmptyEmail] = useState(false);
    const  dispatch =  useDispatch();
    let history = useHistory();
    const onSuccess = (res)=>{
        setLoading(false);
        if(res.data.code==200){
          //  dispatch(userLogin({username:res.data,password:'pass'}))
            const user = {
                token:res.data.data,
                email:email
            }
            setUserInfo(user, isRemberme);
            history.push('/');
        }else{
            dispatch(progressDialog(res.data.message));
            setOpen(true);
        }

    }
    const handleClose = () =>{
        setOpen(false);
    }
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    {i18n.t('login')}
                </Typography>

                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        error={isEmptyEmail}
                        fullWidth
                        id="email"
                        value={email}
                        onChange={e => {setEmail(e.target.value);setEmptyEmail(false)}}
                        label= {i18n.t('email')}
                        name="email"
                        autoComplete="email"
                        autoFocus
                    />
                    <Button
                        onClick={()=>{
                            if(email.length ==0 || password.length ==0){
                                if(email.length==0) setEmptyEmail(true);
                                if(password.length==0) setEmptyPassword(true);
                            }else {
                                const user = {
                                    email: email,
                                    password: password
                                }
                                dispatch(requestLogin(user, onSuccess))
                            }
                        }}
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        {i18n.t('login')}
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link href="#" variant="body2">
                                {i18n.t('forgot_password')}
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href="#" variant="body2">
                                {i18n.t('need_account')}
                            </Link>
                        </Grid>
                    </Grid>
            </div>
            <Box mt={8}>
                <Copyright />
            </Box>
            <DialogCustom title={i18n.t('login_failed')} ></DialogCustom>
            <Progress />

        </Container>
    );
}
