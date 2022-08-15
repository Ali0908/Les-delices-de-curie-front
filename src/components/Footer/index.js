import { makeStyles } from '@material-ui/core';
import Link from '@mui/material/Link';

const usesStyles = makeStyles({
  mention: {
    border: 'solid black 1px',
    // position: 'absolute',
    bottom: '0',
    width: '100%',
    height: '5rem',
    backgroundColor: '#469b72',
  },
  h1: {
    textAlign: 'center',
    marginTop: '2rem',
    fontSize: '1.5rem',
  
  },
  linkMention:{
    color:'#f0eeef!important',
    textDecoration:'none',
  }

});

export default function Footer() {
  const classes = usesStyles();
  return (

    <div className={classes.mention}>
      <h1 className={classes.h1}><Link className={classes.linkMention} href="#">Mentions Legales</Link></h1>
    </div>

  );
}
