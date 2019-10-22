/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import './FullPage.css';
import { Typography } from '@material-ui/core';

const ThanksContainer = () => {
  const classes = useStyles();
  return (
    <>
      <Typography className={classes.thanks} variant='h2' align='center'>
        <b>🙇🏻‍♂️ 감사합니다 🙇🏻‍♂️</b>
      </Typography>
    </>
  );
};

const useStyles = makeStyles(theme => ({
  thanks: {
    color: '#fff'
  }
}));

export default ThanksContainer;
