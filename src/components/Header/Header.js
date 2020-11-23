/* eslint-disable */
import React, { useEffect, useState } from 'react';
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
    const [headerPosition, setHeaderPosition] = useState('absolute');
    const [offsetTop, setOffsetTop] = useState(170);

    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        // Update the document title using the browser API
        // document.title = `You clicked ${count} times`;
    });


    const handleScroll = (event) => {
        if (window.pageYOffset > offsetTop) {
            setHeaderPosition("fixed");
            setOffsetTop(0)
        } else {
            setHeaderPosition("absolute");
            setOffsetTop(170)
        }
    }
    window.addEventListener('scroll', handleScroll);
    // var header = document.getElementById("myHeader");
    return (
        // <AppBar id="myHeader" className={classes.root} position={headerPosition} style={{ top: offsetTop }}>
        <AppBar id="myHeader" className={classes.root} position="fixed" style={{ backgroundColor: '#ffffff' }}>
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
    )
}

export default Header;