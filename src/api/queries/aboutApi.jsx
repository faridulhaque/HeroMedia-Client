import { apiSlice } from "../root/apiSlice";

const aboutApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({

    getUserProfile: builder.query({
      query: (email) => ({
        url: `/api/profile/me/${email}`,
        method: "GET",
      }),
      providesTags: ["profile"],
    }),


    updateUserProfile: builder.mutation({
      query: (data) => ({
        url: `/api/profile/update/${data.email}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["profile"],
    }),
  }),
});

export const { useGetUserProfileQuery, useUpdateUserProfileMutation } =
  aboutApi;
