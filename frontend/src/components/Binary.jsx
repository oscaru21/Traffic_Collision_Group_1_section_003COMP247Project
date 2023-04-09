import React, { useContext, useEffect, useState } from "react";
import { Checkbox, FormControlLabel } from "@mui/material";
import ModelContext from "../context/ModelContext";

function Binary() {
  const { dispatch, binary_columns } = useContext(ModelContext);
  const [state, setState] = useState(binary_columns);

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked ? 1 : 0 });
  };

  useEffect(() => {
    dispatch({
      type: "UPDATE_VALUE",
      payload: { property: "binary_columns", value: state },
    });
  }, [state, dispatch]);
  return (
    <div>
      {Object.keys(state).map((key) => (
        <FormControlLabel
          key={key}
          control={
            <Checkbox
              checked={state[key] === 1}
              onChange={handleChange}
              name={key}
            />
          }
          label={key}
        />
      ))}
    </div>
  );
}

export default Binary;
