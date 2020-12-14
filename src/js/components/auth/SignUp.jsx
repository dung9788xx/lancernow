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
import Footer from "../common/footer";
import {EMAIL_REGEX, PASSWORD_LENGTH, RESET_PASSWORD_API, SIGNUP_API} from "../../constansts/apiConstants";
import callApi from "../../services/callApi";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import InputLabel from "@material-ui/core/InputLabel";
import NativeSelect from "@material-ui/core/NativeSelect";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
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
    selectBox: {
        width: 200,
        padding:2
    },
}));

export default function SignUp() {
    const classes = useStyles();
    const [name, setName] = useState('');
    const [role, setRole] = useState(2);
    const [isEmptyName, setIsEmptyName] = useState(false);
    const [helpTextName, setHelpTextName] = useState('');
    const [email, setEmail] = useState('');
    const [helpTextEmail, setHelpTextEmail] = useState('');
    const [isEmptyEmail, setIsEmptyEmail] = useState(false);
    const [password, setPassword] = useState('');
    const [isEmptyPassword, setIsEmptyPassword] = useState(false);
    const [helpTextPassword, setHelpTextPassword] = useState('');
    const [rePassword, setRePassword] = useState('');
    const [isEmptyRePassword, setIsEmptyRePassword] = useState(false);
    const [helpTextRePassword, setHelpTextRePassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const  dispatch =  useDispatch();
    let history = useHistory();
    const onSuccess = (res)=>{
        if(res.data.code==200){
          //  dispatch(userLogin({username:res.data,password:'pass'}))
            dispatch(openDialog(res.data.data));
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
                <form className={classes.root} onSubmit={(e)=>{
                    e.preventDefault();
                    if(password.length === 0 || password.length <PASSWORD_LENGTH || rePassword.length===0 ||rePassword.length <PASSWORD_LENGTH){
                        if(password.length == 0) setIsEmptyPassword(true);
                        if( rePassword.length==0) setIsEmptyRePassword(true);
                        if(password.length < PASSWORD_LENGTH) {setIsEmptyPassword(true);setHelpTextPassword(i18n.t('password_length'));}
                        if(rePassword.length < PASSWORD_LENGTH) {setIsEmptyRePassword(true); setHelpTextRePassword(i18n.t('password_length'));}
                    }else if(password !== rePassword) {
                        setErrorMessage(i18n.t('password_not_match'))
                    }else{
                        setErrorMessage('');
                        callApi(SIGNUP_API,"POST",{email:email,name:name,password: password, role : role}, onSuccess);
                    }
                }} >
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        error={isEmptyName}
                        fullWidth
                        id="email"
                        value={name}
                        onChange={e => {setName(e.target.value);setIsEmptyName(false)}}
                        label= {i18n.t('name')}
                        name="name"
                        autoComplete="name"
                        type='name'
                        helperText={helpTextName}
                        autoFocus
                    />
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
                        type='email'
                        helperText={helpTextEmail}
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
                        onChange={e => {setPassword(e.target.value);setIsEmptyPassword(false);setHelpTextPassword('')}}
                        label= {i18n.t('password')}
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        helperText={helpTextPassword}
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
                    <InputLabel style={{marginTop:10}} shrink >
                        {i18n.t('you_are')}
                    </InputLabel>
                    <NativeSelect className={classes.selectBox}
                        value={role}
                        onChange={(e)=>{
                            setRole(e.target.value)
                        }}
                    >
                        <option className={classes.selectItem} value={2}>{i18n.t('hirer')}</option>
                        <option className={classes.selectItem} value={3}>{i18n.t('lancer')}</option>
                    </NativeSelect>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        {i18n.t('register')}
                    </Button>
                    <Typography align="center">
                            <Link href="/signin" variant="body2">
                                {i18n.t('login')}
                            </Link>
                    </Typography>
                </form>
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
