/* eslint-disable */
import React, { useEffect, useState } from 'react'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import Box from '@material-ui/core/Box';
import HomeStyles from './Home.styles';
import ImageCarousel from '../../components/ImageCarousel/ImageCarousel';
import PrayerTimes from '../../components/PrayerTimes/PrayerTimes';
import OurPhilosophy from '../../components/OurPhilosophy/OurPhilosophy';


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
                <ImageCarousel />
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
                    {/* {
                        ourPhilosophyCategory.map((x, i) => (<OurPhilosophy key={i} {...x} />))
                    } */}

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
              pb={{ xs: 5, md: 10 }}
            >
              
              <Box pt={3}>
                <Typography variant='h3' gutterBottom>
                Upcoming Event
                </Typography>
              </Box>
              <Typography
                variant='body1'
                gutterBottom
                className='small green300'
              >
               Ramadan Prep Workshop, More Details
              </Typography>
              <Typography
                variant='body1'
                gutterBottom
                className='large'
                color='textSecondary'
              >
               38 Days 12 Hours 12 Minutes 12 seconds
              </Typography>
              <Box pt={3}>
                <Button color='secondary' variant='contained' className='alt'>
                 All Events
                </Button>
              </Box>
            </Box>
            </Box>
            <Box px={{ xs: 3, sm: 5, md: 9 }} bgcolor='white' overflow='hidden'>
                4
            </Box>
        </Box>
    )
}
