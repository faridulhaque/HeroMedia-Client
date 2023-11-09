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

      saveComment: builder.mutation({
        query: (data) => ({
          url: "/api/blogPost/comment",
          method: "POST",
          body: data,
        }),
        invalidatesTags:['blog']
      }),


      getCommentatorProfile: builder.query({
        query: (email) => {
          const url = `/api/blogPost/commentator/${email}`;
          const method = "GET";
      
      
          return {
            url,
            method,
          };
        },
        providesTags: ["profile"],
      }),


      getOneBlog : builder.query({
        query: (id) => ({
          url: `/api/blogPost/${id}`,
          method: "GET",
        }),
        providesTags: ["blog"]
      }),

      likeControl : builder.mutation({
        query: (data) => ({
          url: `/api/blogPost/like/${data?.id}`,
          method: "PUT",
          body: data
        }),
        invalidatesTags:["blog"]
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


export const {useSaveBlogPostMutation, useGetAllBlogsQuery, useGetOneBlogQuery, useLikeControlMutation, useSaveCommentMutation, useGetCommentatorProfileQuery} = blogPostApi; 