import React from 'react'

import Box from '@material-ui/core/Box';
import HomeStyles from './Home.styles';

export default function Home() {
    const classes = HomeStyles();

    return (
        <Box>
            <Box px={{ xs: 3, sm: 5, md: 9 }} overflow='hidden'>
                Home Banner
            </Box>
            <Box py={8} px={{ xs: 3, sm: 5, md: 9 }} bgcolor='white'>
                1
            </Box>
            <Box py={8} px={{ xs: 3, sm: 5, md: 9 }}>
                2
            </Box>
            <Box px={{ xs: 3, sm: 5, md: 9 }} bgcolor='white' overflow='hidden'>
                4
            </Box>
        </Box>
    )
}
