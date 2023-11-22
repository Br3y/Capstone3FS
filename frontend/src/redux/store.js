// Importing configureStore function from Redux Toolkit for creating a Redux store
import { configureStore } from "@reduxjs/toolkit";

// Importing setupListeners function from Redux Toolkit for setting up API query listeners
import { setupListeners } from "@reduxjs/toolkit/query/react";

// Importing the API slice created using createApi from the apiSlice file
import { apiSlice } from "./api/apiSlice";

// Importing the authReducer from the authSlice file
import authReducer from "./features/auth/authSlice";

import favoritesReducer from "../redux/features/favorites/favoriteSlice";
import { getFavoritesFromLocalStorage } from "../Utils/localStorage";
const initialFavorites = getFavoritesFromLocalStorage() || [];

// Creating the Redux store with the configured reducers, middleware, and devTools settings
const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer, // Including the API slice reducer under a specific key
    auth: authReducer, // Including the authReducer for handling authentication state
    favorites: favoritesReducer,
  },

  preloadedState: {
    favorites: initialFavorites,
  },

  // Configuring middleware to include the API middleware along with the default middleware
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),

  // Enabling Redux DevTools extension for debugging
  devTools: true,
});

// Setting up API query listeners with the Redux store's dispatch function
setupListeners(store.dispatch);

// Exporting the configured Redux store for use in the application
export default store;
