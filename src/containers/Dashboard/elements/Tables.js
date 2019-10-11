import React from "react";
import { Grid } from "@material-ui/core";
import Inflow from "./Inflow";
import Outflow from "./Outflow";
import Wrapper from "./styles.js";

export default ({classes})=> {
  return (
    <Grid container spacing={4}>
      <Grid item xs={12} ms={12} md={12} lg={6}>
        <Inflow classes={classes} />
      </Grid>
      <Grid item xs={12} ms={12} md={12} lg={6}>
        <Outflow classes={classes} />
      </Grid>
    </Grid>
  );
};
