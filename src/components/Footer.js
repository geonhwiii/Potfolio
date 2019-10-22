import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import './FullPage.css';
import { Typography, Container, Link, Grid } from '@material-ui/core';
import Copyright from './Copyright';

const Footer = () => {
  const classes = useStyles();
  return (
    <Grid className={classes.footer}>
      <Container maxWidth='lg'>
        <Copyright />
        <Typography variant='body2' color='primary' align='center'>
          {'Belog 👉🏻 '}
          <Link color='secondary' href='https://velog.io/@geonhwi'>
            https://velog.io/@geonhwi
          </Link>
        </Typography>
        <Typography variant='body2' color='primary' align='center'>
          {'Phone 👉🏻'}
          <Typography
            display='inline'
            variant='body2'
            color='secondary'
            align='center'
          >
            010-6396-2671
          </Typography>
        </Typography>
      </Container>
    </Grid>
  );
};

const useStyles = makeStyles(theme => ({
  footer: {
    backgroundColor: 'inherit',
    marginTop: theme.spacing(4),
    padding: theme.spacing(3, 0)
  }
}));

export default Footer;
