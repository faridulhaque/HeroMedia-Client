import { apiSlice } from "../root/apiSlice";

const registerApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
      

      registerUser: builder.mutation({
        query: (data) => ({
          url: "/api/register/new",
          method: "PATCH",
          body: data,
        }),
      }),
  


    }),
  });


export const {useRegisterUserMutation} = registerApi; 