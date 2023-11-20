// Importing necessary functions from the Redux Toolkit for API handling
import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";

// Importing the base URL from constants for API requests
import { BASE_URL } from "../constants";

// Creating a base query using the fetchBaseQuery function with the specified base URL
const baseQuery = fetchBaseQuery({ baseUrl: BASE_URL });

// Creating an API slice using createApi with the configured base query and tag types
export const apiSlice = createApi({
  baseQuery, // Configuring the API with the previously defined base query

  // Defining tag types for better organization and documentation of entities (Product, Order, User, Category)
  tagTypes: ["Product", "Order", "User", "Category"],

  // Defining endpoints (empty for now, to be extended as needed)
  endpoints: () => ({}),
});
