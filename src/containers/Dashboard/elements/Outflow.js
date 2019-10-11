import React from "react";
import { Card, Typography, CardContent } from "@material-ui/core";
import Table from "../../../components/common/Table";

export default () => {
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
    { name: "India", code: "IN", population: 1324171354 },
    { name: "India", code: "IN", population: 1324171354 },
    { name: "India", code: "IN", population: 1324171354 },
    { name: "India", code: "IN", population: 1324171354 },
    { name: "India", code: "IN", population: 1324171354 },
    { name: "India", code: "IN", population: 1324171354 },
    { name: "India", code: "IN", population: 1324171354 },
    { name: "India", code: "IN", population: 1324171354 },
    { name: "India", code: "IN", population: 1324171354 },
    { name: "India", code: "IN", population: 1324171354 }
  ];

  return (
    <Card>
      <CardContent>
      <Typography component="p" variant="h6">
          Outflow
        </Typography>
      </CardContent>
      <Table rows={rows} columns={columns} />
    </Card>
  );
};