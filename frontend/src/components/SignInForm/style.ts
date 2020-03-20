import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
    root: {
        width: 'fit-content',
        alignItems: 'center',
        padding: 30,
        display: 'flex',
        flexDirection: 'column',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
    },
    title: {
        marginBottom: 20,
        color: '#FF9800'
    },
    input: {
        marginBottom: 20,
    },
    button: {
        background: '#FF9800',
        color: 'white',
    }
  });