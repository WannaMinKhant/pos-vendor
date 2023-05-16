import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl:'http://192.168.8.123/posCode/public/api/'}),
    endpoints:(builder) => ({
        getUser: builder.query({
            query:()=> '/user'
        }),
        getCategory: builder.query({
            query:()=> '/category/showAll'
        }),
    })
})


export const { useGetUserQuery, useGetCategoryQuery } = apiSlice;