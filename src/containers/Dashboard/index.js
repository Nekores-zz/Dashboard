import 'date-fns';
import React from "react";
import {
  Grid,
  Container,
  Typography,
  FormControl,
  MenuItem,
  InputLabel,
  Select
} from "@material-ui/core";
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker
} from "@material-ui/pickers";
import { makeStyles } from "@material-ui/core/styles";
import Graphs from "./elements/Graphs";
import Tables from "./elements/Tables";
import Boxes from "./elements/Boxes";

import Wrapper, { Price } from "./styles";

const useStyles = makeStyles(theme => ({
  card: {
    texAlign: "center",
    padding: "15px"
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
  avatar: {
    margin: 10,
    width: 60,
    height: 60
  },
  label: {
    display: "flex",
    alignItems: "center"
  },
  title: {
    fontWeight: 400,
    fontSize: '28px',
    marginBottom: "30px"
  },
  offsetBottom:{
    marginBottom: '10px'
  },
  widthFull: {
    width: '100%',
  }
}));

const Dashboard = () => {
  const classes = useStyles();
  const [selectedDate, setSelectedDate] = React.useState(
    new Date("2014-08-18T21:11:54")
  );

  const handleDateChange = date => {
    setSelectedDate(date);
  };

  return (
    <Wrapper>
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="h6" component="h6" className={classes.title}>
            Dashboard
          </Typography>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid container justify="space-between" alignItems="center" spacing={4} className={classes.offsetBottom}>
              <Grid item xs={12} sm={6} md={6} lg={3}>
                <Typography variant="h6" component="h6">
                  Time
                </Typography>
                
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={3}>
              <KeyboardTimePicker
                margin="normal"
                id="time-picker"
                label="Current Time"
                value={selectedDate}
                onChange={handleDateChange}
                className={classes.widthFull}
                KeyboardButtonProps={{
                  "aria-label": "change time"
                }}
              />
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={3}>
              <KeyboardDatePicker
                disableToolbar
                variant="inline"
                format="MM/dd/yyyy"
                margin="normal"
                id="date-picker-inline"
                label="Current Date"
                value={selectedDate}
                onChange={handleDateChange}
                className={classes.widthFull}
                KeyboardButtonProps={{
                  "aria-label": "change date"
                }}
              />
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={3}>
              <KeyboardDatePicker
                disableToolbar
                variant="inline"
                format="MM/dd/yyyy"
                margin="normal"
                id="date-picker-inline"
                label="Current Session"
                value={selectedDate}
                onChange={handleDateChange}
                className={classes.widthFull}
                KeyboardButtonProps={{
                  "aria-label": "change date"
                }}
              />
              </Grid>
            
              
              
              
            </Grid>
          </MuiPickersUtilsProvider>
        </Grid>
      </Grid>
      <Boxes classes={classes} />
      <Graphs />
      <Tables />
    </Wrapper>
  );
};

export default Dashboard;
