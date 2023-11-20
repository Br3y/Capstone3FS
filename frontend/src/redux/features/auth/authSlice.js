// Importing createSlice function from Redux Toolkit for creating a slice of the Redux store
import { createSlice } from "@reduxjs/toolkit";

// Initializing the initial state for the auth slice, retrieving user info from localStorage if available
const initialState = {
  userInfo: localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null,
};

// Creating the authSlice with a name, initial state, and reducer functions
const authSlice = createSlice({
  name: "auth", // Name of the slice for identifying in the Redux store
  initialState, // Initial state of the auth slice

  // Reducer functions to handle state changes
  reducers: {
    // Reducer for setting user credentials in the state and localStorage
    setCredientials: (state, action) => {
      state.userInfo = action.payload; // Updating user info in the state
      localStorage.setItem("userInfo", JSON.stringify(action.payload)); // Storing user info in localStorage
      const expirationTime = new Date().getTime() + 30 * 24 * 60 * 60 * 1000; // Setting expiration time (e.g., 30 days)
      localStorage.setItem("expirationTime", expirationTime); // Storing expiration time in localStorage
    },

    // Reducer for logging out, clearing user info from the state and localStorage
    logout: (state) => {
      state.userInfo = null; // Clearing user info in the state
      localStorage.clear(); // Clearing all items in localStorage
    },
  },
});

// Extracting action creators for the setCredentials and logout reducers
export const { setCredientials, logout } = authSlice.actions;

// Exporting the authSlice reducer to be used in the Redux store
export default authSlice.reducer;
