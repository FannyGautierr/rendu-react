// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const articleAPI = createApi({
  tagTypes: ['articles'],
  reducerPath: 'articleAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://iim.etherial.fr' }),
  endpoints: (builder) => ({
    getArticles: builder.query({
      query: () => `articles`,
      providesTags: ["articles"] // on set un tag pour Articles
    }),
    createArticle: builder.mutation({
        query: (data) => ({
          url: '/articles',
          method: "POST",
          body: data
        }),
        invalidatesTags: ["articles"] // on invalide le Tag -> si invalide refait le call api avec les query avec le même tag associé
      })
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetArticlesQuery, useCreateArticleMutation } = articleAPI