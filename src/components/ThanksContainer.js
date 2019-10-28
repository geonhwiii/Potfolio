/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import './FullPage.css';
import { Typography, Grid } from '@material-ui/core';

const ThanksContainer = () => {
  const classes = useStyles();
  return (
    <Grid>
      <Typography className={classes.thanks} variant='h4' align='center'>
        <b>🙇🏻‍♂️ 감사합니다 🙇🏻‍♂️</b>
      </Typography>
    </Grid>
  );
};

const useStyles = makeStyles(theme => ({
  thanks: {
    color: '#fff'
  }
}));

export default ThanksContainer;
