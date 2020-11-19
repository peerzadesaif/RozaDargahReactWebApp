/* eslint-disable */

import React, { useEffect, useState } from 'react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

export default function PrayerTimes() {

    const [prayerTimes, setPrayerTimes] = useState([
        {
            name: 'Fajr',
            time: '05.20'
        },
        {
            name: 'Sunrise',
            time: '06.36'
        },
        {
            name: 'Dhuhr',
            time: '12.10'
        },
        {
            name: 'Asr',
            time: '15.14'
        },
        {
            name: 'Maghrib',
            time: '17.38'
        },
        {
            name: 'Isha\'a',
            time: '18.54'
        }
    ]);
    return (
        <>
            <List >
                {
                    prayerTimes.map((x) => (
                        <ListItem key={x.name} alignItems="flex-start">
                            <ListItemText>
                                <Grid container >
                                    <Grid item xs={6}>
                                        {x.name}
                                    </Grid>
                                    <Grid item xs={6}>
                                        {x.time}
                                    </Grid>
                                </Grid>
                                <Divider component="div" />
                            </ListItemText>
                        </ListItem>
                    ))
                }
            </List>
        </>
    )
}
