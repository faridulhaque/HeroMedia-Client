import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({ baseUrl: "https://lapel-adder.cyclic.app/" }),
    tagTypes: ["profile", "blog"],
    endpoints: (build) => ({})
})