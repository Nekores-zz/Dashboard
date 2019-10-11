import React from "react";
import { Grid, Avatar } from "@material-ui/core";
import EmojiNatureIcon from "@material-ui/icons/EmojiNature";
import { Header, Logo, User } from "./styles";

export default props => (
  <Header>
    <Grid container justify="space-between">
      <Logo>
        <EmojiNatureIcon color="white" style={{ fontSize: 30 }} /> Mui-Theme
      </Logo>
      <User>
        John Doe
        <Avatar alt="Remy Sharp" height="60">
          Us
        </Avatar>
      </User>
    </Grid>
  </Header>
);
