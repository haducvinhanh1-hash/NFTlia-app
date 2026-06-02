import React from 'react';
import LayoutDashboard from '../layout/layoutDashboard';
import CardCollection from '../components/card/CardCollection';
import { v4 } from 'uuid';
import { Grid } from '@mui/material';

const MyCollectionPage = () => {
  return (
    <LayoutDashboard>
      <h1 className="text-black1 dark:text-white font-bold text-3xl ml-10 mt-[2.625rem] mb-1 z-10 w-[20rem]">
        My Collections
      </h1>
      <p className="font-semibold text-base text-naturalcolor2 ml-10 w-[35rem] mb-[2.5rem]">
        The top NFTs on mxama, ranked by volume, floor price and other
        statistics
      </p>
      <Grid container>
        {Array(6)
          .fill(0)
          .map((item) => (
            <CardCollection key={v4()}></CardCollection>
          ))}
      </Grid>
    </LayoutDashboard>
  );
};

export default MyCollectionPage;
