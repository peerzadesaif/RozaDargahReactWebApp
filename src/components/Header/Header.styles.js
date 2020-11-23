import { makeStyles } from '@material-ui/core';


const styles = makeStyles((theme) => ({
    root: {
        justifyContent: 'center',
        height: 92.7,
        // boxShadow: '0px 0px 12px rgba(0, 0, 0, 0.07)',
        // background: '#FFFFFF',
        boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)',
        background: 'transparent',
    },
    white: theme.white[0] + ' !important',

}))

export default styles;