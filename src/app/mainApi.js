import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";



//export const baseUrl = 'http://192.168.194.1:5000';
export const baseUrl = 'https://mern-magn.onrender.com';



export const mainApi = createApi({
  reducerPath: 'mainApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${baseUrl}/api` }),
  endpoints: (builder) => ({})
});