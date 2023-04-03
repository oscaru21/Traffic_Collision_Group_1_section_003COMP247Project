import React from 'react';
import { Grid, Paper } from '@mui/material';
import BarChart from '../components/BarChart';

const Stats = () => {
  return (
    <Grid container spacing={2} justifyContent="center">
      <Grid item xs={12} md={6} lg={4}>
        <BarChart data={{labels: ['Monday','Tuesday','Wednesday','Thursday','Friday'], frequency: [100,200,50,0,500], title: "Injuries per day"}}/>
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
      <BarChart data={{labels: ['Monday','Tuesday','Wednesday','Thursday','Friday'], frequency: [100,200,50,0,500], title: "Injuries per day"}}/>
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
      <BarChart data={{labels: ['Monday','Tuesday','Wednesday','Thursday','Friday'], frequency: [100,200,50,0,500], title: "Injuries per day"}}/>
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
      <BarChart data={{labels: ['Monday','Tuesday','Wednesday','Thursday','Friday'], frequency: [100,200,50,0,500], title: "Injuries per day"}}/>
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
      <BarChart data={{labels: ['Monday','Tuesday','Wednesday','Thursday','Friday'], frequency: [100,200,50,0,500], title: "Injuries per day"}}/>
      </Grid>
     
    </Grid>
  );
};

export default Stats;
