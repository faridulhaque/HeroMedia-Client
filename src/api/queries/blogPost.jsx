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
  


    }),
  });


export const {useSaveBlogPostMutation} = blogPostApi; 