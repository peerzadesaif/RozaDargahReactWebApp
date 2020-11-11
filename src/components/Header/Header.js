/* eslint-disable */
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
    AppBar,
    Toolbar,
    Button,
    MenuItem,
    Box,
    Link,
    Avatar,
    List,
    ListItem,
    SwipeableDrawer,
    Typography,
} from '@material-ui/core';

import styles from './Header.styles';
import Logo from '../Icons/Logo';


const renderLogo = () => (
    <>
        <Link to='/' underline='none' component={RouterLink}>
            <Logo style={{ height: 90, color: '#2F6859' }} />
        </Link>
    </>)
const Header = (props) => {
    const classes = styles();

    return (
        <div>

            <AppBar className={classes.root} position='fixed'>
                <Toolbar>
                    <Box display='flex' flexGrow={0} alignItems='center' >
                        {renderLogo()}
                    </Box>
                    <Box display='flex' flexGrow={1} alignItems='center' justifyContent='center'>
                        <MenuItem>
                            <Link
                                underline='none'
                                color='textPrimary'
                                to='/'
                                component={RouterLink}
                            >
                                Home
                    </Link>
                        </MenuItem>
                        <MenuItem>
                            <Link
                                underline='none'
                                color='textPrimary'
                                to='/about-us'
                                component={RouterLink}
                            >
                                About Us
                    </Link>
                        </MenuItem>
                    </Box>
                </Toolbar>
            </AppBar>

        </div>
    )
}

export default Header;