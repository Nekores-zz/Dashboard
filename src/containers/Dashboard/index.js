import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Graphs from "./elements/Graphs";
import Tables from "./elements/Tables";
import Boxes from "./elements/Boxes";
import Session from "./elements/Session";

import Wrapper, { Title } from "./styles";

const useStyles = makeStyles(theme => ({
  card: {
    texAlign: "center",
    padding: "16px"
  },
  left: {
    display: "flex",
    justifyContent: "space-between"
  },
  subHeading: {
    color: "#666464",
    fontSize: "14px",
    fontWeight: "400"
  },
  label: {
    display: "flex",
    alignItems: "center"
  },
  offsetBottom: {
    marginBottom: "25px"
  },
  widthFull: {
    width: "100%"
  },
  backgroundDark: {
    background: "#00203f",
    color: '#fff'
  },
  fontRegular: {
    fontWeight: 400,
  }
}));

const Dashboard = () => {
  const classes = useStyles();

  return (
    <Wrapper>
      <Grid container>
        <Grid item xs={12}>
          <Title variant="h6" component="h6">
            Dashboard
          </Title>
        </Grid>
      </Grid>
      <Session classes={classes} />
      <Boxes classes={classes} />
      <Graphs classes={classes} />
      <Tables classes={classes} />
    </Wrapper>
  );
};

export default Dashboard;
