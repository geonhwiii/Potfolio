/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid } from '@material-ui/core';

const ScrumContainer = () => {
  const classes = useStyles();
  return (
    <Grid max='lg'>
      <Typography className={classes.scrumTitle} component='h3' variant='h3'>
        <b
          style={{
            borderTop: '1px solid lightGray',
            borderBottom: '1px solid lightGray'
          }}
        >
          Agile Scrum
        </b>
      </Typography>
      <Grid container xs={12}>
        <Grid className={classes.imgContainer} item sm={5}>
          <Typography className={classes.imgTitle} component='h5' variant='h5'>
            Sprint 🚦
          </Typography>
          <img
            style={{ width: '100%', height: '20rem' }}
            src='https://images.velog.io/post-images/geonhwi/d0bac950-f4de-11e9-9a0b-2f3b1723e3f3/image.png'
            alt='scrum'
          />
          <Typography
            className={classes.imgDesc}
            display='block'
            component='p1'
            variant='p1'
          >
            프로젝트의 구성요소를 각 단계별로 나누어 우선 순위를 정합니다.
          </Typography>
        </Grid>
        <Grid className={classes.imgContainer} item sm={5}>
          <Typography className={classes.imgTitle} component='h5' variant='h5'>
            TaskCard 📚
          </Typography>
          <img
            style={{ width: '100%', height: '20rem' }}
            src='https://images.velog.io/post-images/geonhwi/d7df3f40-f4de-11e9-9a0b-2f3b1723e3f3/image.png'
            alt='scrum'
          />
          <Typography
            className={classes.imgDesc}
            display='block'
            component='p1'
            variant='p1'
          >
            Backlog, Todo, Doing, Complete 등으로 각 TaskCard를 작성합니다.
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

const useStyles = makeStyles(theme => ({
  scrumTitle: {
    color: '#fff',
    marginBottom: theme.spacing(4)
  },
  imgContainer: {
    margin: theme.spacing(6.5)
  },
  imgTitle: {
    color: '#fff',
    fontWeight: 600,
    marginBottom: theme.spacing(2)
  },
  imgDesc: {
    color: '#eee',
    marginTop: theme.spacing(2)
  }
}));

export default ScrumContainer;
