import React from 'react';
import { Typography, Link } from '@material-ui/core';

const Copyright = () => {
  return (
    <Typography variant='body2' color='primary' align='center'>
      {'Github 👉🏻 '}
      <Link color='secondary' href='https://github.com/geonhwiii'>
        https://github.com/geonhwiii
      </Link>
    </Typography>
  );
};

export default Copyright;
