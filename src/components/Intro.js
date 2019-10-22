import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import './FullPage.css';
import { Typography, Grid } from '@material-ui/core';

const Intro = () => {
  const classes = useStyles();
  return (
    <Grid>
      <Typography className={classes.titleName} component='h2' variant='h2'>
        정건휘
      </Typography>
      <Typography className={classes.titleIntro} component='h4' variant='h4'>
        항상 배움의 자세를 가지는 개발자가 되고 싶습니다.
      </Typography>
      <Typography color='error' component='h5' variant='h5'>
        강점
      </Typography>
      <Typography
        className={classes.titleDesc}
        display='block'
        component='p1'
        variant='p1'
      >
        Notion을 활용한 Agile Scrum 방식 협업 프로젝트 진행
      </Typography>
      <Typography
        className={classes.titleDesc}
        display='block'
        component='p1'
        variant='p1'
      >
        Backend의 역할을 이해하는 Front Engineer
      </Typography>
      <Typography
        className={classes.titleDesc}
        display='block'
        component='p1'
        variant='p1'
      >
        소통을 가장 중요시하는 개발자
      </Typography>
    </Grid>
  );
};

const useStyles = makeStyles(theme => ({
  titleName: {
    color: '#fff',
    fontWeight: 600,
    marginBottom: theme.spacing(4)
  },
  titleIntro: {
    color: '#77f',
    marginBottom: theme.spacing(4)
  },
  titleDesc: {
    color: '#ddd',
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2)
  }
}));

export default Intro;
