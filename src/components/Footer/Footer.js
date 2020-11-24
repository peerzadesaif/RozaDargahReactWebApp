import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  List,
  ListItem,
  Link,
} from '@material-ui/core';
import styles from './Footer.styles';
import Logo from '../Icons/Logo';
import appstoreIcon from '../../assets/Images/appstore.png';
import playstoreIcon from '../../assets/Images/googlestore.png';

const Footer = () => {
  const classes = styles();

  return (
    <Box bgcolor='#FDFCFC' pt={9} px={{ xs: 3, sm: 5, md: 9 }}>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={2}>
            <Box pb={3} className={classes.logoAlign}>
              <Typography>
                <Logo style={{ height: 90, color: '#0B0B0B' }} />
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={2}>
            <Box pb={5}>
              <Typography variant='subtitle1'>MENU</Typography>
              <List>
                <ListItem disableGutters={true}>
                  <Link
                    href='#'
                    color='textPrimary'
                    variant='body1'
                    underline='hover'
                  >
                    Home
                  </Link>
                </ListItem>
                <ListItem disableGutters={true}>
                  <Link
                    href='#'
                    color='textPrimary'
                    variant='body1'
                    underline='hover'
                  >
                    About
                  </Link>
                </ListItem>
                <ListItem disableGutters={true}>
                  <Link
                    href='#'
                    color='textPrimary'
                    variant='body1'
                    underline='hover'
                  >
                    Event
                  </Link>
                </ListItem>
                <ListItem disableGutters={true}>
                  <Link
                    href='#'
                    color='textPrimary'
                    variant='body1'
                    underline='hover'
                  >
                    Programs
                  </Link>
                </ListItem>
                <ListItem disableGutters={true}>
                  <Link
                    href='#'
                    color='textPrimary'
                    variant='body1'
                    underline='hover'
                  >
                    Services
                  </Link>
                </ListItem>
              </List>
            </Box>
          </Grid>
          <Grid item xs={12} md={2}>
            <Box pb={5}>
              <Typography variant='subtitle1'>Services</Typography>
              <List>
                <ListItem disableGutters={true}>
                  <Link
                    href='#'
                    color='textPrimary'
                    variant='body1'
                    underline='hover'
                  >
                    Get started
                  </Link>
                </ListItem>
              </List>
            </Box>
          </Grid>
          <Grid item xs={12} md={2}>
            <Box pb={5}>
              <Typography variant='subtitle1'>Help</Typography>
              <List>
                <ListItem disableGutters={true}>
                  <Link
                    href='#'
                    color='textPrimary'
                    variant='body1'
                    underline='hover'
                  >
                    FAQ
                  </Link>
                </ListItem>
                <ListItem disableGutters={true}>
                  <Link
                    href='#'
                    color='textPrimary'
                    variant='body1'
                    underline='hover'
                  >
                    Terms of Use
                  </Link>
                </ListItem>
                <ListItem disableGutters={true}>
                  <Link
                    href='#'
                    color='textPrimary'
                    variant='body1'
                    underline='hover'
                  >
                    Privacy Policy
                  </Link>
                </ListItem>
                <ListItem disableGutters={true}>
                  <Link
                    href='#'
                    color='textPrimary'
                    variant='body1'
                    underline='hover'
                  >
                    Contact us
                  </Link>
                </ListItem>
                <ListItem disableGutters={true}>
                  <Link
                    href='#'
                    color='textPrimary'
                    variant='body1'
                    underline='hover'
                  >
                    Login
                  </Link>
                </ListItem>
                <ListItem disableGutters={true}>
                  <Link
                    href='#'
                    color='textPrimary'
                    variant='body1'
                    underline='hover'
                  >
                    Sign up
                  </Link>
                </ListItem>
              </List>
            </Box>
          </Grid>
          
          <Grid item xs={12} md={2}>
            <Box pb={5}>
              <Typography variant='subtitle1'>Contact</Typography>
              <List>
                <ListItem disableGutters={true}>
                  <Link
                    href='#'
                    color='textPrimary'
                    variant='body1'
                    underline='hover'
                  >
                    1800 000 000
                  </Link>
                </ListItem>
                <ListItem disableGutters={true}>
                  <Link
                    href='#'
                    color='textPrimary'
                    variant='body1'
                    underline='hover'
                  >
                    info@random.com
                  </Link>
                </ListItem>
                <ListItem disableGutters={true}>
                 
                   Address
                </ListItem>
              </List>
            </Box>
          </Grid>

          <Grid item xs={12} md={2}>
            <Box pb={5}>
              <Typography variant='subtitle1'>Get the app</Typography>
              <List>
                <ListItem disableGutters={true}>
                  <Link
                    href='#'
                    color='textPrimary'
                    variant='body1'
                    underline='hover'
                  >
                    <img
                      src={appstoreIcon}
                      alt='appstoreicon'
                      style={{ width: 141 }}
                    />
                  </Link>
                </ListItem>
                <ListItem disableGutters={true}>
                  <Link
                    href='#'
                    color='textPrimary'
                    variant='body1'
                    underline='hover'
                  >
                    <img
                      src={playstoreIcon}
                      alt='playstoreicon'
                      style={{ width: 141 }}
                    />
                  </Link>
                </ListItem>
              </List>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
