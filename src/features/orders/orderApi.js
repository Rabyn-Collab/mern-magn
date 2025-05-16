import { mainApi } from "../../app/mainApi.js";



const orderApi = mainApi.injectEndpoints({
  endpoints: (builder) => ({



    getUserOrder: builder.query({
      query: (token) => ({
        url: '/orders/users',
        headers: {
          Authorization: token
        },
        method: 'GET',
      }),
      providesTags: ['User']
    }),



    addOrder: builder.mutation({
      query: (query) => ({
        url: '/orders',
        body: query.body,
        headers: {
          Authorization: query.token
        },
        method: 'POST',
      }),
      providesTags: ['User']
    }),

  })
});


export const { useGetOrdersQuery, useGetUserOrderQuery, useAddOrderMutation } = orderApi;