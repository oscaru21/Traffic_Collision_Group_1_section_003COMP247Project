import React, { useContext, useEffect, useState } from "react";
import { Grid, TextField } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import ModelContext from "../context/ModelContext";


const Numerical = () => {
  const {dispatch, num_attribs} = useContext(ModelContext);
  const [formState, setFormState] = useState(num_attribs);
  const [value, setValue] = React.useState(dayjs(`${formState.YEAR}-${formState.MONTH}-${formState.DAY}`));

  const handleMonthChange = (date) => {
    setFormState({ ...formState, MONTH: Number(date.month().toString()) + 1});
  };

  const handleDayChange = (date) => {
    setValue(date)
    setFormState({ ...formState, DAY: Number(date.date())  });
  }

  const handleTimeChange = (event) => {
    const newValue = event.target.value;
    if (newValue >= 0 && newValue <= 24) {
        setFormState({ ...formState, TIME: Number(newValue) })
    }
  };

  useEffect(() => {
    dispatch({type: "UPDATE_VALUE", payload:{property:'num_attribs', value:formState}})
  }, [formState,dispatch])

  return (
    <Grid container spacing={2} sx={{ padding: "20px 0" }}>
      <Grid item xs={12} sm={6}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label={'"month" and "day"'}
            views={["day", "month"]}
            value={value}
            onMonthChange={handleMonthChange}
            onChange={handleDayChange}
          />
        </LocalizationProvider>
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          label="TIME"
          type="number"
          value={formState.TIME}
          onChange={handleTimeChange}
          inputProps={{
            min: 0,
            max: 24,
            step: 1,
          }}
          variant="outlined"
        />
      </Grid>
    </Grid>
  );
};

export default Numerical;
