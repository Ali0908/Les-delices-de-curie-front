import { makeStyles } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import logo from './logo.png';

const usesStyles = makeStyles((theme) => ({

  logo: {
    width: '8rem',
      [theme.breakpoints.down('sm')]: {
      // flexDirection: 'column',
      margin: 'auto',
    },

    
  },

}));
export default function Logo() {
  const navigate = useNavigate();
  const routeChange = () => {
    const path = '/';
    navigate(path);
  };

  const classes = usesStyles();
  return (
    <div >
      <img onClick={routeChange} className={classes.logo} src={logo} alt="logo" />
    </div>
  );
}
