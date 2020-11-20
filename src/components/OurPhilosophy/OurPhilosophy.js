/* eslint-disable */
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

export default function OurPhilosophy({ title, description, path }) {
    console.log('require(`../../${path}`) :>> ', require(`../../${path}`));
    return (
        <>
            <Grid item xs={12} sm={3} md={3} style={{ textAlign: 'center' }}>
                <img height="64" width="80" src={require(`../../${path}`).default} className="App-logo" alt="logo" />
                <br/>
                <Typography
                    variant='subtitle2'
                    component='span'
                    className={`green400`}
                >
                    {title}
                </Typography>
                <Typography style={{ paddingTop: 19 }}>
                    {description}
                </Typography>
            </Grid>

        </>
    )
}
