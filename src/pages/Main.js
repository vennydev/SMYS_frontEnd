import React from "react";

import Card from "../elements/Card";
import Header from "../components/Header";
import Header2 from "../components/Header2"
import Grid from '@mui/material/Grid';

const Main = () => {

  return(
    <>
    <Header />
    <Header2 />
    <Grid container spacing={2}>
    <Card style={{
      width: '70vw'}}/>
      <Card/>
      <Card/>
      <Card/>
    </Grid>
    </>
  )

  
};

export default Main;
