import React from "react";
import "date-fns";
import { Grid, Typography } from "@material-ui/core";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker
} from "@material-ui/pickers";

export default ({classes}) => {
  const [selectedDate, setSelectedDate] = React.useState(
    new Date("2014-08-18T21:11:54")
  );

  const handleDateChange = date => {
    setSelectedDate(date);
  };
  return (
    <Grid container className={classes.offsetBottom}>
      <Grid item xs={12} >
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Grid
            container
            justify="space-between"
            alignItems="center"
            spacing={4}
          >
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
  );
};
