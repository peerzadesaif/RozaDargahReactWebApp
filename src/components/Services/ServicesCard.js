/* eslint-disable */
import React from 'react';
import {
  Typography,
  Card,
  CardMedia,
  CardContent,
  Grid,
  CardActionArea,
} from '@material-ui/core';
import Image from 'material-ui-image';

import styles from './ServicesCard.styles.js';
import { useHistory } from 'react-router-dom';

export default function ServicesCard({ item }) {
  const classes = styles();
  const history = useHistory();


  const handleClick = () => {
    history.push({
      pathname: `/service/marraige`,
    });
  };

  return (
    <Card className={classes.card} onClick={handleClick}>
      <CardActionArea className={classes.actionArea}>
        <CardMedia >
              <Image alt={'name'}
            src={require('../../assets/Images/OurphilosophyImg1.png').default}
            title={'name'}
            aspectRatio={0.78}
            imageStyle={{ borderRadius: 4 }}
            disableSpinner
            disableTransition/>
        </CardMedia>
        <CardContent className={classes.content}>
          <Typography variant='h6' className={classes.name} noWrap>
          Marriage
          </Typography>
          <Typography color='textSecondary' className='small'>
          Islam teaches us that
          marriage is an important
          part of our life
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
