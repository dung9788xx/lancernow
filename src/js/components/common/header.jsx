import React, {useContext, useEffect, useState} from 'react';
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import i18n from "../../i18n/i18n";
import {makeStyles} from '@material-ui/core/styles';
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Switch from "@material-ui/core/Switch";
import MenuIcon from '@material-ui/icons/Menu';
import {AccountCircle} from "@material-ui/icons";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Button from "@material-ui/core/Button";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import clsx from "clsx";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Accessibility from '@material-ui/icons/Accessibility';
import MailIcon from '@material-ui/icons/Mail';
import ListItemText from "@material-ui/core/ListItemText";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import {logout} from "../../actions/user";
import {useDispatch} from "react-redux";
import { useHistory } from "react-router";
import DialogCustom from "../dialog/DialogCustom";
import Container from "@material-ui/core/Container";
export default function Header() {
    const  dispatch =  useDispatch();
    let history = useHistory();
    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
        },
    }));
    const toggleDrawer = (anchor, open) => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({...state, [anchor]: open});
    };

    const classes = useStyles();
    const [auth, setAuth] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });
    const handleMenuSelect = (key) => {
            if (key == 'logout') {
                dispatch(logout(() => {
                    alert('a')
                    history.push('/signin')
                },()=>{
                    alert(aa)
                }));
            }
        }

    const handleChange = (event) => {
        setAuth(event.target.checked);
    };

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

        const handleClose = () => {
            setAnchorEl(null);
        };
    const list = (anchor) => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === 'top' || anchor === 'bottom',
            })}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                    <ListItem button key={'logout'} onClick={()=>handleMenuSelect('logout')}>
                        <ListItemIcon><ExitToAppIcon/></ListItemIcon>
                        <ListItemText primary={i18n.t('logout')}/>
                    </ListItem>
            </List>
            <Divider/>
        </div>
    );
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" onClick={toggleDrawer('left', true)} className={classes.menuButton}
                                color="inherit" aria-label="menu">
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Photos
                    </Typography>
                    <div>
                        <IconButton
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleMenu}
                            color="inherit"
                        >
                            <AccountCircle/>
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={open}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={handleClose}>Profile</MenuItem>
                            <MenuItem onClick={handleClose}>My account</MenuItem>
                        </Menu>
                    </div>

                </Toolbar>
            </AppBar>
            <div>
                <React.Fragment key={'left'}>
                    <SwipeableDrawer
                        anchor={"left"}
                        open={state['left']}
                        onClose={toggleDrawer('left', false)}
                        onOpen={toggleDrawer('left', true)}
                    >
                        {list('left')}
                    </SwipeableDrawer>
                </React.Fragment>
            </div>
            <DialogCustom title={i18n.t('login_failed')} ></DialogCustom>
        </div>
    );
}
