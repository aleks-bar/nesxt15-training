import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({ baseUrl: '/api' });


const delay = (msMin: number, msMax?: number) => new Promise((resolve) => setTimeout(resolve, !!msMax ? Math.floor(msMin + Math.random() * (msMax + 1 - msMin)) : msMin));


export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery,
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => '/products',
    }),
    getProductById: builder.query({
      query: (id) => `/products/${id}`,
    }),
  }),
});

export const { useGetProductsQuery, useGetProductByIdQuery } = productsApi;


    // const delay = Math.floor(100 + Math.random() * (2000 + 1 - 100))

    // setTimeout(() => {
    // }, delay)