import React from 'react'
import { useSelector } from 'react-redux';
import Post from './Post/Post';


const Posts = () => {
    const posts = useSelector((state) => state.posts);

    console.log("This is coming in from herE", posts);

    return (
        !posts.length ? (<button type="button" className="bg-[#FFE5AD] p-3 m-3 ..." disabled>
            <svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
            </svg>
            Processing...
        </button>) : (
            <div className='flex flex-row flex-wrap h-[100%] gap-11 m-2 ml-0 pl-0 p-2 mt-0 pt-0'>
                {posts.map((post, id) => (
                    <Post post={post} key={id} />
                ))}
            </div>

        )
    )
}

export default Posts