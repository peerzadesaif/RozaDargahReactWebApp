import { makeStyles } from '@material-ui/core';

const styles = makeStyles((theme) => ({
  logoAlign: {
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
    },
  },
}));

export default styles;
