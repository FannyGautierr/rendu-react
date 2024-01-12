import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const productAPI = createApi({
  tagTypes: ['products', 'comments'],
  reducerPath: 'productAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://iim.etherial.fr' }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => `/products`,
      providesTags: ["products"], // on set un tag pour Articles
    }),
    getComments: builder.query({
      query: (id) => `/products/${id}/comments`,
      providesTags: ["comments"]
    }),
    createComment: builder.mutation({
      query: ({data,id}) => ({
        url:`/products/${id}/comments`,
        method:"POST",
        body: data
      }),
      invalidatesTags: ["comments"]
    })
  }),
})



export const { useGetProductsQuery, useGetCommentsQuery, useCreateCommentMutation } = productAPI