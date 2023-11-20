// Importing the apiSlice to extend and create a user-specific API slice
import { apiSlice } from "./apiSlice";

// Importing the constant for the users' URL from the constants file
import { USERS_URL } from "../constants";

// Creating a user-specific API slice by injecting endpoints into the base apiSlice
export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // Defining a login endpoint as a mutation with specified query details
    login: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/auth`, // Constructing the URL for the login endpoint
        method: "POST", // Setting the HTTP method to POST for login
        body: data, // Including the request data in the body
      }),
    }),
  }),
});

// Extracting the generated hook for the login mutation from the userApiSlice
export const { useLoginMutation } = userApiSlice;
