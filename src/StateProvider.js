// CONTEXT REACT API

// Setup the DATA LAYER
//We need this to track the basket
import React, { createContext, useContext, useReducer } from "react";
import reducer from "./reducer";

// This is the data layer
export const StateContext = createContext();


// Build a  PROVIDER
// Wrap our app and provide the Data layer to every component inside the app

// reducer = Controls the action we take like adding or removing items to the basket
// initialState = How the Data Layer look in the beginning
// Children= It is the APP("<App />") [in index.js file App is made the children of the StateProvider]
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// Pull information from the data layer
export const useStateValue = () => useContext(StateContext);