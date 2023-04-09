import { Grid, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import ModelContext from "../context/ModelContext";

const options = {
  VEHTYPE: [
    "Automobile, Station Wagon",
    "Bicycle",
    "Municipal Transit Bus (TTC)",
    "Truck - Open",
    "Motorcycle",
    "Taxi",
    "Passenger Van",
    "Delivery Van",
    "Moped",
    "Pick Up Truck",
    "Police Vehicle",
    "Truck-Tractor",
    "Truck - Closed (Blazer, etc)",
    "Street Car",
    "Truck - Dump",
    "Bus (Other) (Go Bus, Gray Coach)",
    "Intercity Bus",
    "Construction Equipment",
    "Truck (other)",
    "Truck - Tank",
    "Off Road - 2 Wheels",
    "Other Emergency Vehicle",
    "Fire Vehicle",
    "School Bus",
    "Tow Truck",
    "Truck - Car Carrier",
    "Ambulance",
    "Railway Train",
    "Off Road - 4 Wheels",
    "Other",
  ],
  ROAD_CLASS: [
    "Major Arterial",
    "Local",
    "Minor Arterial",
    "Collector",
    "Other",
    "Pending",
    "Laneway",
    "Expressway",
    "Expressway Ramp",
    "Major Arterial Ramp",
  ],
  LOCCOORD: [
    "Intersection",
    "Mid-Block",
    "Exit Ramp Westbound",
    "Exit Ramp Southbound",
    "Mid-Block (Abnormal)",
    "Entrance Ramp Westbound",
    "Park, Private Property, Public Lane",
  ],
  DISTRICT: [
    "Toronto and East York",
    "Etobicoke York",
    "Scarborough",
    "North York",
  ],
  TRAFFCTL: [
    "No Control",
    "Stop Sign",
    "Traffic Signal",
    "Pedestrian Crossover",
    "Traffic Controller",
    "Yield Sign",
    "School Guard",
    "Traffic Gate",
    "Police Control",
    "Streetcar (Stop for)",
  ],
  LIGHT: [
    "Dark",
    "Dusk",
    "Daylight",
    "Dark, artificial",
    "Dawn",
    "Dusk, artificial",
    "Dawn, artificial",
    "Daylight, artificial",
    "Other",
  ],
  RDSFCOND: [
    "Wet",
    "Dry",
    "Slush",
    "Ice",
    "Loose Snow",
    "Packed Snow",
    "Spilled liquid",
    "Loose Sand or Gravel",
    "Other",
  ],
  // VISIBILITY: [
  //   "Clear",
  //   "Rain",
  //   "Snow",
  //   "Strong wind",
  //   "Freezing Rain",
  //   "Fog, Mist, Smoke, Dust",
  //   "Drifting Snow",
  //   "Other",
  // ],
  INVTYPE: [
    "Passenger",
    "Driver",
    "Vehicle Owner",
    "Cyclist",
    "Pedestrian",
    "Truck Driver",
    "Other Property Owner",
    "Motorcycle Driver",
    "Motorcycle Passenger",
    "In-Line Skater",
    "Driver - Not Hit",
    "Moped Driver",
    "Wheelchair",
    "Pedestrian - Not Hit",
    "Trailer Owner",
    "Witness",
    "Cyclist Passenger",
    "Moped Passenger",
    "Other",
  ],
  IMPACTYPE: [
    "Approaching",
    "Cyclist Collisions",
    "Pedestrian Collisions",
    "Rear End",
    "Angle",
    "SMV Other",
    "Turning Movement",
    "Sideswipe",
    "SMV Unattended Vehicle",
    "Other",
  ],
  INVAGE: [
    "0 to 4",
    "5 to 9",
    "10 to 14",
    "15 to 19",
    "20 to 24",
    "25 to 29",
    "30 to 34",
    "35 to 39",
    "40 to 44",
    "45 to 49",
    "50 to 54",
    "55 to 59",
    "60 to 64",
    "65 to 69",
    "70 to 74",
    "75 to 79",
    "80 to 84",
    "85 to 89",
    "90 to 94",
    "Over 95",
  ],
};


export default function Categorical() {
  const {cat_attribs, dispatch} = useContext(ModelContext);
  const [inputValues, setInputValues] = useState(cat_attribs);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputValues(prev => ({ ...prev, [name]: value }));
  };

  useEffect(()=>{
    dispatch({type: 'UPDATE_VALUE', payload: {property: 'cat_attribs', value: inputValues}})
  }, [dispatch, inputValues])

  return (
    <Grid container spacing={2} sx={{padding: "20px 0"}}>
      {Object.entries(options).map(([label, values]) => (
        <Grid item xs={12} sm={6} md={4} key={label}>
          <FormControl fullWidth>
            <InputLabel>{label}</InputLabel>
            <Select
              label={label}
              name={label}
              value={inputValues[label]}
              onChange={handleInputChange}
              fullWidth
            >
              {values.map((value) => (
                <MenuItem key={value} value={value}>
                  {value}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      ))}
    </Grid>
  );
}
