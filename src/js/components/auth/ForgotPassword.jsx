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
import callApi from "../../services/callApi";
import {FORGOT_PASSWORD_API, RESET_PASSWORD_API} from "../../constansts/apiConstants";
import {openDialog} from "../../actions/dialog";
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

export default function ForgotPassword(props) {
    const classes = useStyles();
    const [email, setEmail] = useState("admin@gmail.com");
    const [isEmptyEmail, setEmptyEmail] = useState(false);
    const [password, setPassword] = useState('');
    const [isEmptyPassword, setIsEmptyPassword] = useState(false);
    const [helpTextPassword, setHelpTextPassword] = useState('');
    const [rePassword, setRePassword] = useState('');
    const [isEmptyRePassword, setIsEmptyRePassword] = useState(false);
    const [helpTextRePassword, setHelpTextRePassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const  dispatch =  useDispatch();
    let history = useHistory();
    const  token = props.match.params.token;
    const onSuccess = (res)=>{
        if(res.data.code==200){
            setErrorMessage('');
            dispatch(openDialog(res.data.data));
        }else{
            setErrorMessage(res.data.message)
        }

    }
    const onSuccessChangePassword = (res) => {
        if(res.data.code==200){
            dispatch(openDialog(res.data.data, true));
        }else{
            setErrorMessage(res.data.message)
        }
    }
    const renderInsertEmail = () => {
        return (
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Box m={2} textAlign="center" fontWeight="fontWeightRegular" fontSize={16}>
                    {i18n.t('enter_email')}
                </Box>

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
                        if(email.length ==0 ){
                            if(email.length==0) setEmptyEmail(true);
                        }else {
                            callApi(FORGOT_PASSWORD_API,"POST",{email:email},onSuccess);
                        }
                    }}
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                >
                    {i18n.t('reset_password')}
                </Button>
                <Box fontFamily="Arial" textAlign="center" fontWeight="fontWeightMedium" fontSize={16} color="error.main">
                    {errorMessage}
                </Box>

            </div>
        )
    }
    const renderChangePassword = ()=>{
        return (
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Box m={2} textAlign="center" fontWeight="fontWeightRegular" fontSize={16}>
                    {i18n.t('new_password')}
                </Box>

                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    error={isEmptyPassword}
                    fullWidth
                    id="password"
                    value={password}
                    onChange={e => {setPassword(e.target.value);setIsEmptyPassword(false);setHelpTextPassword('')}}
                    label= {i18n.t('password')}
                    name="password"
                    autoComplete="password"
                    autoFocus
                    helperText={helpTextPassword}
                    type="password"
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
                        if(password.length == 0 || password.length <6 || rePassword.length==0 ||rePassword.length <6){
                           if(password.length == 0) setIsEmptyPassword(true);
                           if( rePassword.length==0) setIsEmptyRePassword(true);
                           if(password.length <6) {setIsEmptyPassword(true);setHelpTextPassword(i18n.t('password_length'));}
                           if(rePassword.length <6) {setIsEmptyRePassword(true); setHelpTextRePassword(i18n.t('password_length'));}
                        }else if(password !== rePassword) {
                            setErrorMessage(i18n.t('password_not_match'))
                        }else{
                            setErrorMessage('');
                            callApi(RESET_PASSWORD_API,"POST",{token:token,password: password},onSuccessChangePassword);
                        }
                    }}
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                >
                    {i18n.t('change_password')}
                </Button>
                <Box fontFamily="Arial" textAlign="center" fontWeight="fontWeightMedium" fontSize={16} color="error.main">
                    {errorMessage}
                </Box>

            </div>
        )
    }
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            {typeof token === 'undefined' ? renderInsertEmail(): renderChangePassword()}
            <Box mt={8}>
                <Footer />
            </Box>
            <DialogCustom title={i18n.t('success')} ></DialogCustom>
            <Progress />

        </Container>
    );
}
