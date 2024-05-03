import React from 'react'

const Post = ({ post }) => {
    return (
        <>
            <div className='relative w-[330px] h-[350px] bg-[#FFE5AD] rounded-xl mb-5 border-[#3E001F] border-2'>
                <div className='h-2/5 bg-yellow-400 rounded-t-xl'>
                    <div className='p-3 flex flex-col justify-start'>
                        <span className='font-bold font-playfair text-2xl text-[#3E001F]'>{post?.title}</span>
                        <span className=' font-playfair text-lg text-[#3E001F]'>{post?.creator}</span>
                    </div>

                </div>
                <div className='flex flex-col justify-start py-5 px-5 gap-2 text-[#3E001F]'>
                    <p className='text-md font-light -mt-1 mb-2'>{post?.tags}</p>
                    <p>{post?.description}</p>
                    <p>jkh{post?.link}</p>

                </div>
                <div className='absolute bottom-5 px-5 '>
                    <div className='flex flex-row justify-center items-end gap-5'>
                        <button className=' rounded-xl border-[#3E001F] border-2 px-2 py-1 hover:bg-[#982176] hover:text-[#FFE3AD]'>👍 {post?.likeCount}</button>
                        <button className=' rounded-xl border-[#3E001F] border-2 px-2 py-1 hover:bg-[#982176] hover:text-[#FFE3AD]' >🗑️</button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Post