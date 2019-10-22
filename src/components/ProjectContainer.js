/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Typography,
  Grid,
  CardActionArea,
  Card,
  CardContent,
  Hidden,
  CardMedia,
  Link
} from '@material-ui/core';

const featuredPosts = [
  {
    title: 'CORUM',
    date: 'Main: FrontEnd / Sub: BackEnd',
    description: `부트캠프 졸업생들의 기술 블로그
    `,
    imgUrl:
      'https://images.velog.io/post-images/geonhwi/52d0c0c0-d649-11e9-84eb-95c4f3997475/image.png',
    link: 'https://github.com/geonhwiii/CORUM_client',
    preUrl: 'https://slides.com/geonhwi/deck'
  },
  {
    title: 'HOLLYSHIP',
    date: 'Main: BackEnd / Sub: FrontEnd',
    description: `감정에 기반한 글을 쓰고 음악을 추천하는 소셜SNS.
      `,
    imgUrl:
      'https://images.velog.io/post-images/geonhwi/2ccdaaf0-f4a8-11e9-a140-6b1908547cb1/image.png',
    link: 'https://github.com/geonhwiii/HOLLYSHIP_server',
    preUrl: 'https://slides.com/geonhwi/deck-1#/'
  }
];

const ProjectContainer = () => {
  const classes = useStyles();
  return (
    <>
      <Typography className={classes.projectTitle} component='h2' variant='h2'>
        <b
          style={{
            borderTop: '1px solid lightGray',
            borderBottom: '1px solid lightGray'
          }}
        >
          Project
        </b>
      </Typography>
      <Grid container spacing={4}>
        {featuredPosts.map(post => (
          <Grid item key={post.title} xs={12} md={6}>
            <CardActionArea component='a' href={post.link}>
              <Card className={classes.card}>
                <div className={classes.cardDetails}>
                  <CardContent>
                    <Typography component='h2' variant='h5'>
                      {post.title}
                    </Typography>
                    <Typography variant='subtitle1' color='textSecondary'>
                      {post.date}
                    </Typography>
                    <Typography variant='subtitle1' paragraph>
                      {post.description}
                    </Typography>
                    <Typography variant='subtitle1' color='primary'>
                      Click here to Github Code...!
                    </Typography>
                  </CardContent>
                </div>
                <Hidden xsDown>
                  <CardMedia
                    className={classes.cardMedia}
                    image={post.imgUrl}
                    title='Image title'
                  />
                </Hidden>
              </Card>
            </CardActionArea>
            <Typography className={classes.cardFooter} variant='h6'>
              <Link color='inherit' href={post.preUrl}>
                👉🏻 발표자료 링크
              </Link>
            </Typography>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

const useStyles = makeStyles(theme => ({
  projectTitle: {
    color: '#fff',
    marginBottom: theme.spacing(8)
  },
  card: {
    display: 'flex'
  },
  cardDetails: {
    flex: 1,
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(10)
  },
  cardMedia: {
    width: 250
  },
  cardFooter: {
    color: '#eee',
    marginBottom: theme.spacing(3)
  }
}));

export default ProjectContainer;
