import React from 'react';
import { useGetAllBlogsQuery, useGetOneBlogQuery, useLikeControlMutation } from '../../api/queries/blogPost';
import { useParams } from 'react-router-dom';
import moment from 'moment';
import { useGetUserProfileQuery } from '../../api/queries/aboutApi';
import {AiFillHeart} from "react-icons/ai"
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase.init';
import CommentForm from './CommentForm';
import DisplayComments from './DisplayComments';

const BlogContainer = () => {

    const {id} = useParams();
    const {data: blog, isLoading:blogLoading} = useGetOneBlogQuery(id);

    const [loggedInUser] = useAuthState(auth)

    const { data: bloggerData, isLoading:userLoading } = useGetUserProfileQuery(
        blog?.userEmail
      );
    
    const [likeUnlike, {isLoading}] = useLikeControlMutation()

    if(isLoading || blogLoading) {
        return <></>
    }

    const likeControl = (id) =>{
        const data = {email:loggedInUser?.email, id};
        likeUnlike(data)
    }

    const comments = blog?.comments?.length ? blog?.comments : []

    const reversedComments = [...comments]?.reverse()

    
  

    return (
    
        <div className="lg:w-2/4 sm:w-4/5 shadow-md p-5 rounded-md bg-white mx-auto">
            <div className="flex">
                <div className="h-12 w-12">
                    <img className="h-full w-full rounded-full" src="https://i.ibb.co/6YK1cXs/avatar.jpg" alt="" />
                </div>

                <div className='ml-5'>
                    <p className="text-lg text-black capitalize bold">{bloggerData?.displayName}</p>
                    <p className=" text-black capitalize text-sm">{moment(blog?.date).format("MMMM Do YYYY, h:mm:ss a")}</p>
                </div>
            </div>

            {/* title wll be there */}
            <h2 className="text-2xl my-4">{blog?.title}</h2>
            <div className="mt-2 w-full h-[500px]">
                <img className='w-full h-full rounded-md' src={blog?.imagePath} alt="" />
            </div>
            <p className='text-xl mt-5'>{blog?.blog}</p>
            <div className='flex items-center mt-5'>
                <AiFillHeart onClick={()=>likeControl(blog?._id)} className={`${blog?.likes?.includes(loggedInUser?.email) ? "text-red-400" : "text-slate-400"} cursor-pointer text-xl`}></AiFillHeart> 
                <span className='text-blue-500 text-lg ml-5'>{blog?.likes?.length} Likes</span>
            </div>

            {/* form for making comment */}
            <CommentForm userEmail={loggedInUser?.email} postId={id}></CommentForm>
            {
                reversedComments?.map(comment => <DisplayComments comment={comment} ></DisplayComments>)
            }
        </div>
    );
};

export default BlogContainer;