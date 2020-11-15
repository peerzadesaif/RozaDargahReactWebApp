import { makeStyles } from '@material-ui/core';
import { grey } from '../../theme/colors';

const styles = makeStyles((theme) => ({
  card: {
    boxShadow: 'none',
    backgroundColor: 'transparent',
    width: '100%',
  },
  content: {
    padding: 0,
  },
  name: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  actions: {
    padding: 0,
    marginTop: theme.spacing(1),
    paddingTop: theme.spacing(1),
    borderTopStyle: 'solid',
    borderTopWidth: 1,
    borderTopColor: grey[300],
  },
  actionArea: {
    '&:hover .MuiCardActionArea-focusHighlight': {
      opacity: 0,
    },
    '&:hover h6': {
      textDecoration: 'underline',
    },
  },
  tagRow: {
    marginTop: theme.spacing(1),
  },
  tagImage: {
    verticalAlign: 'bottom',
  },
}));

export default styles;
