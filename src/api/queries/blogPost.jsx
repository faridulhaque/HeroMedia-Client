import { apiSlice } from "../root/apiSlice";

const blogPostApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
      

      saveBlogPost: builder.mutation({
        query: (data) => ({
          url: "/api/blogPost/new",
          method: "POST",
          body: data,
        }),
      }),


      getAllBlogs: builder.query({
        query: () => ({
          url: `/api/blogPost/all`,
          method: "GET",
        }),
        providesTags: ["blog"],
      }),
  


    }),
  });


export const {useSaveBlogPostMutation, useGetAllBlogsQuery} = blogPostApi; 