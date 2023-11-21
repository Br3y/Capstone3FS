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
        url: `${USERS_URL}/login`, // Constructing the URL for the login endpoint
        method: "POST", // Setting the HTTP method to POST for login
        body: data, // Including the request data in the body
      }),
    }),

    logout: builder.mutation({
      query: () => ({
        url: `${USERS_URL}/logout`,
        method: "POST",
      }),
    }),

    register: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/register`,
        method: "POST",
        body: data,
      }),
    }),

    profile: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/profile`,
        method: "PUT",
        body: data,
      }),
    }),

    getUsers: builder.query({
      query: () => ({
        url: `${USERS_URL}/getAllUsers`,
      }),
      providesTags: ["User"],
      keepUnusedDataFor: 5,
    }),

    deleteUser: builder.mutation({
      query: (userId) => ({
        url: `${USERS_URL}/${userId}`,
        method: "DELETE",
      }),
    }),

    getUserDetails: builder.query({
      query: (id) => ({
        url: `${USERS_URL}/${id}`,
      }),
      keepUnusedDataFor: 5,
    }),

    updateUser: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/${data.userId}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["User"],
    }),
  }),
});
  
// Extracting the generated hook for the login mutation from the userApiSlice
export const {
  useLoginMutation,
  useLogoutMutation,
  useRegisterMutation,
  useProfileMutation,
  useGetUsersQuery,
  useDeleteUserMutation,
  useGetUserDetailsQuery,
  useUpdateUserMutation

} = userApiSlice;
