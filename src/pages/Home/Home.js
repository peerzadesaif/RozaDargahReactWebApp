/* eslint-disable */
import React, { useEffect, useState } from 'react'
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';


import Box from '@material-ui/core/Box';
import HomeStyles from './Home.styles';
import ImageCarousel from '../../components/ImageCarousel/ImageCarousel';
import AutoCarousel from '../../components/ImageCarousel/AutoCarousel';
import SlickCarousel from '../../components/SlickCarousel/SlickCarousel';

import PrayerTimes from '../../components/PrayerTimes/PrayerTimes';
import OurPhilosophy from '../../components/OurPhilosophy/OurPhilosophy';
import ServicesCard from '../../components/Services/ServicesCard';

import footerImage from '../../assets/Images/image-31.jpg';

export default function Home() {
    const classes = HomeStyles();

    const [ourPhilosophyCategory, setOurPhilosophyCategory] = useState([
        {
            title: 'Knowledge',
            description: 'A critshahal component of every Muslims journey is knowledge.',
            path: 'assets/Images/OurphilosophyImg1.png',
            icon: ''
        },
        {
            title: 'Spirituality',
            description: 'Ihsan was the way of our Messenger',
            path: 'assets/Images/OurphilosophyImg2.png',
            icon: ''
        },
        {
            title: 'Community',
            description: 'We pray together, we break our fast together, Islam is community',
            path: 'assets/Images/OurphilosophyImg3.png',
            icon: ''
        },
        {
            title: 'Service',
            description: 'Being in service to others is the duty of every Muslim',
            path: 'assets/Images/OurphilosophyImg4.png',
            icon: ''
        }
    ])

    return (
        <Box>
            <Box overflow='hidden'>
                {/* <ImageCarousel /> */}
                {/* <AutoCarousel /> */}
                <SlickCarousel />
            </Box>
            <Box py={8} px={{ xs: 3, sm: 5, md: 9 }} bgcolor='white'>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={5} md={5}>
                        <Typography variant='h2'>
                            Prayer Times
                        </Typography>
                        <Typography variant='h5'>
                            Prayer times in India, Maharashtra
                        </Typography>
                        <Typography variant='h6'>
                            {new Date().toGMTString()}
                        </Typography>
                        <PrayerTimes />
                    </Grid>
                    <Grid item xs={12} sm={7} md={7}>
                        <Typography variant='h1'>
                            Welcome to the
                            Islamic Family
                        </Typography>
                        <p>
                            Islam is nothing if not a lesson – and a drill – in good manners.
                            <br />
                            <br />
                            And honoring one’s guest is part of the defining attributes of Islam.
                            <br />
                            <br />
                            So, while you are our guest at <a>{window.location.origin}</a>, we want you to know how honored and wonderful we feel that you are visiting us.
                        </p>
                        <Button variant="contained">
                            Read More
                        </Button>
                    </Grid>
                </Grid>
            </Box>
            <Box className={classes.rootPhilosophy} py={8} px={{ xs: 3, sm: 5, md: 9 }}>
                <Typography variant='h2'>
                    Our Philosophy
                </Typography>
                <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="flex-start"
                >
                    {
                        ourPhilosophyCategory.map((x, i) => (<OurPhilosophy key={i} {...x} />))
                    }

                    {/* <Grid item xs={12} sm={3} md={3}>
                        2
                    </Grid>
                    <Grid item xs={12} sm={3} md={3}>
                        3
                    </Grid>
                    <Grid item xs={12} sm={3} md={3}>
                        4
                    </Grid> */}
                </Grid>
            </Box>
            <Box px={{ xs: 3, sm: 5, md: 9 }} bgcolor='white' overflow='hidden'>
                <Box
                    pt={{ xs: 5, md: 15 }}
                    pl={{ xs: 5, md: 15 }}
                    pr={{ xs: 5, md: 5 }}
                    pb={{ xs: 5, md: 10 }}>
                    <Box pt={3}>
                        <Typography variant='h3' gutterBottom>
                            Upcoming Event
                        </Typography>
                    </Box>
                    <Typography
                        variant='body1'
                        gutterBottom
                        className='small green300'>
                        Ramadan Prep Workshop, More Details
                    </Typography>
                    <Typography
                        variant='body1'
                        gutterBottom
                        className='large'
                        color='textSecondary'>
                        38 Days 12 Hours 12 Minutes 12 seconds
                    </Typography>
                    <Box pt={3}>
                        <Button color='secondary' variant='contained' className='alt'>
                            All Events
                        </Button>
                    </Box>
                </Box>
            </Box>
            <Box bgcolor='#FDFCFC' p={7} px={{ xs: 3, sm: 5, md: 9 }}>
                <Box textAlign='center'>
                    <Typography variant='h3'>Our Services</Typography>
                </Box>
                <Grid
                    container
                    spacing={3}
                    style={{
                        paddingTop: 30,
                        paddingBottom: 30,
                        flexWrap: 'nowrap',
                        overflow: 'scroll',
                    }}>
                    {Array(3).fill({}).map((x, i) => (
                        <Grid key={i} item xs={2} style={{ minWidth: 252 }} >
                            <ServicesCard item={null} />
                        </Grid>
                    ))}
                    {/* <Grid item xs={2} style={{ minWidth: 252 }}>
                        <LoadingCard aspectRatio={0.78} />
                    </Grid> */}
                </Grid>
                <Grid item xs={12}>
                    <Box pt={3} textAlign='center'>
                        <Button
                            color='primary'
                            variant='contained'
                        // onClick={() => handleClick()}
                        >
                            See all our services
                        </Button>
                    </Box>
                </Grid>
            </Box>

            <Box py={7} px={{ xs: 3, sm: 5, md: 9 }} bgcolor='white' overflow='hidden'>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Box pb={5}>
                            <Typography variant='h3' align='center' className='white'>
                                Our Recent News
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
                <Grid container direction='row' spacing={3}>
                    <Grid item xs={12} md={4}>
                        <CardMedia image={footerImage} title='Paella dish' />
                        <img src={footerImage} alt='footerImage' width='100%' />
                        <Typography variant='h4' className='white'>
                            Thanking the Graces of Allah
                        </Typography>
                        <Typography className='green100'>
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa
                            qui officia deserunt mollit anim id est laborum.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={8}>
                        <Box pl={{ md: 5 }} >
                            <Typography variant='subtitle1' className='white'>
                                Culpa qui officia
                        </Typography>
                            <Typography className='green100'>
                                Duis aute irure dolor in reprehenderit in voluptate velit esse
                                cillum dolore eu fugiat nulla pariatur.
                        </Typography>
                            <Divider
                                style={{
                                    border: '1px solid rgba(255, 255, 255, 0.05)',
                                    margin: '30px 0',
                                }}
                            />
                            <Typography variant='subtitle1' className='white'>
                                Deserunt mollit anim id
                        </Typography>
                            <Typography className='green100'>
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                                qui officia deserunt mollit anim id est laborum.
                        </Typography>
                            <Divider
                                style={{
                                    border: '1px solid rgba(255, 255, 255, 0.05)',
                                    margin: '30px 0',
                                }}
                            />
                            <Typography variant='subtitle1' className='white'>
                                Deserunt mollit anim id
                        </Typography>
                            <Typography className='green100'>
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                                qui officia deserunt mollit anim id est laborum.
                        </Typography>
                        </Box>
                        <Button color='primary' variant='contained'>
                            All News
                            </Button>
                    </Grid>
                </Grid>

            </Box>
        </Box >
    )
}
