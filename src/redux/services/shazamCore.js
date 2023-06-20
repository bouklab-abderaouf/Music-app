import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const shazamCoreApi = createApi({
  reducerPath: 'shazamCoreApi',
  baseQuery: fetchBaseQuery({ 
    baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key', 'e640827c79mshdb7099e9f16a86bp100c3cjsne414a985a046');
      headers.set('X-RapidAPI-Host', 'shazam-core.p.rapidapi.com');
      return headers;
    },
  }),

  endpoints: (builder) => ({
    getTopCharts: builder.query({ query: '/charts/world' }), 
  })
});

export const {
  useGetTopChartsQuery,
} = shazamCoreApi;