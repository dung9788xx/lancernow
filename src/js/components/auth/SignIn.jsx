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
import {setUserInfo} from "../../services/storageUtils";

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

export default function SignIn() {
    const classes = useStyles();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isOpen, setOpen] = useState(false);
    const [isLoading, setLoading] = useState(false);
    const [isEmptyEmail, setEmptyEmail] = useState(false);
    const [isEmptyPassword, setEmptyPassword] = useState(false);
    const [errorMessage, setMessage] = useState('');
    const [isRemberme, setRememberme] =useState(false);
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
            setMessage(res.data.message);
            setOpen(true);
        }

    }
    const onFail = (res)=>{
        setMessage(i18n.exists(res.message) ? i18n.t(res.message) : res.message);
        setOpen(true);
        setLoading(false);
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
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        error={isEmptyPassword}
                        name="password"
                        value={password}
                        onChange={e => {setPassword(e.target.value);setEmptyPassword(false)}}
                        label= {i18n.t('password')}
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                    <FormControlLabel
                        control={<Checkbox value="remember" checked={isRemberme} onChange={()=>setRememberme(!isRemberme)} color="primary" />}
                        label={i18n.t('remember_me')}
                    />

                    <Button
                        onClick={()=>{
                            if(email.length ==0 || password.length ==0){
                                if(email.length==0) setEmptyEmail(true);
                                if(password.length==0) setEmptyPassword(true);
                            }else {
                                setLoading(true);
                                const user = {
                                    email: email,
                                    password: password
                                }
                                dispatch(requestLogin(user, onSuccess, onFail))
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
            <DialogCustom open={isOpen} handClose={handleClose} title={i18n.t('login_failed')} >{errorMessage}</DialogCustom>
            <Progress open={isLoading}/>

        </Container>
    );
}
