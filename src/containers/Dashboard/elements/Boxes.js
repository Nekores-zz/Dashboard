import React from "react";
import { Grid, Typography, Card, CardContent } from "@material-ui/core";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";

import { Price } from "./styles";

export default props => {
  const labels = [
    {
      title: "Begining Balance",
      description: "lorem inspum emit set",
      count: 300
    },
    {
      title: "Cash Income",
      description: "lorem inspum emit set",
      count: 400
    },
    {
      title: "Expenses Paid",
      description: "lorem inspum emit set",
      count: 350
    },
    {
      title: "Ending Balance",
      description: "lorem inspum emit set",
      count: 100
    }
  ];

  const { classes } = props;

  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      spacing={4}
    >
      {labels.map(({ title, count, description }, index) => (
        <Grid item xs={12} sm={6} md={6} lg={3} key={index}>
          <Card className={classes.card}>
            <CardContent className={classes.left}>
              <div>
                <Typography
                  className={classes.subHeading}
                  variant="h6"
                  component="h6"
                >
                  {title}
                </Typography>
                <Typography
                  variant="h4"
                  component="h6"
                  className={classes.label}
                >
                  <Price>$ {count}</Price>
                </Typography>
              </div>
              <div className={classes.left}>
                {(index < 1 )? (
                  <ArrowDownwardIcon
                    color="secondary"
                    style={{ fontSize: 24 }}
                  />
                ) : (
                  <ArrowUpwardIcon color="primary" style={{ fontSize: 24 }} />
                )}
                2%
              </div>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};
