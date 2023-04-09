import { createContext, useReducer } from "react";
import modelReducer from "./ModelReducer";

const ModelContext = createContext();

export const ModelProvider = ({ children }) => {
  const initialState = {
    location: {
      LATITUDE: 43,
      LONGITUDE: -79,
    },
    cat_attribs: {
      DISTRICT: "Toronto and East York",
      IMPACTYPE: "Approaching",
      INVAGE: "0 to 4",
      INVTYPE: "Passenger",
      LIGHT: "Dark",
      LOCCOORD: "Intersection",
      RDSFCOND: "Wet",
      ROAD_CLASS: "Major Arterial",
      TRAFFCTL: "No Control",
      VEHTYPE: "Automobile, Station Wagon",
      //VISIBILITY: "Clear",
    },
    num_attribs: {
      YEAR: new Date().getFullYear(),
      TIME: 12,
      MONTH: new Date().getMonth() + 1,
      DAY: new Date().getDate(),
    },
    binary_columns: {
      PEDESTRIAN: 0,
      CYCLIST: 0,
      AUTOMOBILE: 0,
      //MOTORCYCLE: 0,
      TRUCK: 0,
      TRSN_CITY_VEH: 0,
      //EMERG_VEH: 0,
      PASSENGER: 0,
      SPEEDING: 0,
      AG_DRIV: 0,
      //REDLIGHT: 0,
      //ALCOHOL: 0,
      //DISABILITY: 0,
    },
  };

  const [state, dispatch] = useReducer(modelReducer, initialState);

  return (
    <ModelContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </ModelContext.Provider>
  );
};

export default ModelContext;
