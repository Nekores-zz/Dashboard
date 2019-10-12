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
    { name: "Pakistan", code: "PK1", population: 1324171354 },
    { name: "Pakistan", code: "PK2", population: 1324171354 },
    { name: "Pakistan", code: "PK3", population: 1324171354 },
    { name: "Pakistan", code: "PK4", population: 1324171354 },
    { name: "Pakistan", code: "PK5", population: 1324171354 },
    { name: "Pakistan", code: "PK6", population: 1324171354 },
    { name: "Pakistan", code: "PK7", population: 1324171354 },
    { name: "Pakistan", code: "PK8", population: 1324171354 },
    { name: "Pakistan", code: "PK9", population: 1324171354 },
    { name: "Pakistan", code: "PK10", population: 1324171354 }
  ];

  return (
    <Card>
      <CardContent className={classes.backgroundDark}>
      <Typography component="p" variant="h6" className={classes.fontRegular}>
          Outflow
        </Typography>
      </CardContent>
      <Table rows={rows} columns={columns} />
    </Card>
  );
};
