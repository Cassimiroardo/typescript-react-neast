import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
    root: {
      height:'80vh',
      width: '100%',
    },
    paper: {
      display: 'flex',
      flexDirection: 'column',
      padding: 30
    },
    paperTitle: {
      margin: 10,
      color: '#FF9800',
      fontWeight: 'bold'
    },
    textInput: {
      margin: 10,
    },
    titleInput: {
      margin: 10,
    },
    button: {
      margin: 10,
      color: '#FF9800',
      borderColor: '#FF9800'
    }
  });