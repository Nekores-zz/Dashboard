import React from "react";
import { Grid } from "@material-ui/core";
import Header from "./Header";
import Siderbar from "./Siderbar";
import Layout, { Main, Content } from "./styles";

export default props => (
  <Layout>
        <Header />
    <Main>
      <Grid container wrap="nowrap"  className="h-100">
        <Siderbar />
        <Content>{props.children}</Content>
      </Grid>
    </Main>
  </Layout>
);
