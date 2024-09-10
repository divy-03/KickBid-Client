import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_SERVER_BASE_URL,
    credentials: "include",
  }),
  endpoints: (builder) => ({
    hello: builder.query({
      query: () => "/",
    }),

    registerUser: builder.mutation({
      query: (user) => ({
        url: "/api/auth/register",
        method: "POST",
        body: user,
      }),
    }),

    loginUser: builder.mutation({
      query: (user) => ({
        url: "/api/auth/login",
        method: "POST",
        body: user,
      }),
    }),

    logoutUser: builder.mutation({
      query: () => ({
        url: "/api/auth/logout",
        method: "GET",
      }),
    }),

    getUserProfile: builder.query({
      query: () => "/api/auth/profile",
    }),
  }),
});

export const {
  useHelloQuery,
  useRegisterUserMutation,
  useLoginUserMutation,
  useLogoutUserMutation,
  useGetUserProfileQuery,
} = userApi;
