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
        url: "/auth/register",
        method: "POST",
        body: user,
      }),
    }),
  }),
});

export const { useHelloQuery, useRegisterUserMutation } = userApi;
