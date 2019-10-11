import React from "react";
import { Card, Typography, CardContent } from "@material-ui/core";
import Table from "../../../../components/common/Table";

export default ({classes}) => {
  const columns = [
    { id: "name", label: "Name", minWidth: 170 },
    { id: "code", label: "ISO\u00a0Code", minWidth: 100 },
    {
      id: "population",
      label: "Population",
      minWidth: 170,
      align: "right",
      format: value => value.toLocaleString()
    }
  ];

  const rows = [
    { name: "Pakistan", code: "PK", population: 1324171354 },
    { name: "India", code: "IN", population: 1324171354 },
    { name: "United State", code: "US", population: 1324171354 },
    { name: "England", code: "EN", population: 1324171354 },
    { name: "Pakistan", code: "PK", population: 1324171354 },
    { name: "India", code: "IN", population: 1324171354 },
    { name: "United State", code: "US", population: 1324171354 },
    { name: "England", code: "EN", population: 1324171354 },
  ];

  return (
    <Card>
      <CardContent className={classes.backgroundDark}>
        <Typography component="p" variant="h6" className={classes.fontRegular}>
          Inflow
        </Typography>
      </CardContent>
      <Table rows={rows} columns={columns} />
    </Card>
  );
};
