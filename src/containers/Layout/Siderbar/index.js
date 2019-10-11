import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Grid,
  Typography,
  MenuList,
  MenuItem,
  ListItemIcon
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import DashboardIcon from "@material-ui/icons/Dashboard";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";
import FormatIndentDecreaseIcon from '@material-ui/icons/FormatIndentDecrease';
import FormatIndentIncreaseIcon from '@material-ui/icons/FormatIndentIncrease';
import MenuIcon from '@material-ui/icons/Menu';
import PaletteIcon from "@material-ui/icons/Palette";
import DeckIcon from "@material-ui/icons/Deck";
import SettingsIcon from "@material-ui/icons/Settings";
import { Sidebar, Item, Menu, Toggler } from "./styles";

const useStyles = makeStyles(theme => ({
  label: {
    fontWeight: "400",
    color: "#777"
  }
}));

const routes = [
  {
    to: "/",
    label: "Dashboard",
    icon: <DashboardIcon color="" style={{ fontSize: "24" }} />,
    active: true
  },
  {
    to: "/",
    label: "Users",
    icon: <PeopleAltIcon color="" style={{ fontSize: "24" }} />,
    active: false
  },
  {
    to: "/",
    label: "Stores",
    icon: <DeckIcon color="" style={{ fontSize: "24" }} />,
    active: false
  },
  {
    to: "/",
    label: "Settings",
    icon: <SettingsIcon color="" style={{ fontSize: "24" }} />,
    active: false
  }
];

export default props => {
  const classes = useStyles();

  const [toggle, setToggle] = useState(false);

  return (
    <>
      <Toggler onClick={() => setToggle(!toggle)}>
        {toggle ? (
          <FormatIndentDecreaseIcon style={{ fontSize: "30", color: "#00203f" }} />
        ) : (
          <FormatIndentIncreaseIcon
            style={{ fontSize: "30", color: "#00203f" }}
          />
        )}
      </Toggler>
      <Sidebar toggle={toggle}>
        <Menu>
          {/* <div className="button-toggler">SLIDE Button</div> */}
          {routes.map(({ to, label, icon, active }, index) => (
            <Item key={index} active={active}>
              <Link to={to} className={classes.link}>
                <ListItemIcon>{icon}</ListItemIcon>
                <Typography variant="inherit">{label}</Typography>
              </Link>
            </Item>
          ))}
        </Menu>
      </Sidebar>
    </>
  );
};
