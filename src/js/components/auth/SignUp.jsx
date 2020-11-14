import React, {useEffect, useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
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
import {getBearerToken, setUserInfo} from "../../services/storageUtils";import {openDialog} from "../../actions/dialog";
import Footer from "../footer/footer";
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

export default function SignUp() {
    const classes = useStyles();
    const [email, setEmail] = useState('');
    const [isEmptyEmail, setIsEmptyEmail] = useState(false);
    const [password, setPassword] = useState('');
    const [isEmptyPassword, setIsEmptyPassword] = useState(false);
    const [helpTextPassword, setHelpTextPassword] = useState('');
    const [rePassword, setRePassword] = useState('');
    const [isEmptyRePassword, setIsEmptyRePassword] = useState(false);
    const [helpTextRePassword, setHelpTextRePassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('aaaa');
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
            dispatch(openDialog(res.data.message));
        }

    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    {i18n.t('register')}
                </Typography>

                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        error={isEmptyEmail}
                        fullWidth
                        id="email"
                        value={email}
                        onChange={e => {setEmail(e.target.value);setIsEmptyEmail(false)}}
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
                        onChange={e => {setPassword(e.target.value);setIsEmptyPassword(false)}}
                        label= {i18n.t('password')}
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    error={isEmptyRePassword}
                    fullWidth
                    id="repassword"
                    value={rePassword}
                    onChange={e => {setRePassword(e.target.value);setIsEmptyRePassword(false);setHelpTextRePassword('')}}
                    label= {i18n.t('repassword')}
                    name="repassword"
                    autoComplete="password"
                    autoFocus
                    helperText={helpTextRePassword}
                    type="password"
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
                        {i18n.t('register')}
                    </Button>
                <Box fontFamily="Arial" textAlign="center" fontWeight="fontWeightMedium" fontSize={16} color="error.main">
                    {errorMessage}
                </Box>
            </div>
            <Box mt={8}>
               <Footer/>
            </Box>
            <DialogCustom title={i18n.t('login_failed')} ></DialogCustom>
            <Progress />

        </Container>
    );
}
