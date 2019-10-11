import React from "react";
import { Grid, Card, Typography } from "@material-ui/core";
import FlowChart from "./FlowChart";
import Report from "./ReportCard";
import { GraphsWrapper } from "../styles";

export default ({classes}) => (
  <GraphsWrapper>
    <Card style={{ padding: "16px" }} >
      <Grid container spacing={4}>
        <Grid item xs={12} sm={12} md={12} lg={12} className={classes.backgroundDark}>
          <Typography component="p" variant="h6" className={classes.fontRegular}>
            Outflow vs Inflow
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={7}>
          <FlowChart />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={5}>
          <Report />
        </Grid>
      </Grid>
    </Card>
  </GraphsWrapper>
);
