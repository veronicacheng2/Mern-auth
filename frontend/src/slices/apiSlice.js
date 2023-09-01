import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({ baseUrl: "" }); // baseUrl is empty string because we are using proxy

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ["User"], // for caching
  endpoints: (builder) => ({}),
});
