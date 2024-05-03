import React from 'react'
import { useState } from 'react'
import FileBase from 'react-file-base64'
import { useDispatch } from 'react-redux'
import { createPost } from '../../actions/posts'


const Form = () => {

    const [postData, setPostData] = useState({ creator: '', title: '', description: '', tags: '', link: '', selectedFile: '' })

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        // console.log("Post data is: ", postData)
        e.preventDefault();
        dispatch(createPost(postData))
    };

    const handleClear = () => { };

    return (
        <form action="" className='flex flex-col justify-start gap-4 bg-[#FFE5AD] rounded-lg pb-10 pt-10 px-4 border-[#3E001F] border-2' onSubmit={handleSubmit} >
            <p className='text-4xl mx-auto pb-3 text-[#3E001F] font-playfair'>Showcase <span className='font-bold text-[#3E001F] font-playfair'>your</span> creation</p>
            <input type="text" onChange={(e) => setPostData({ ...postData, creator: e.target.value })} placeholder='Creator' className='p-4 m-1 rounded-xl outline-1 border-2 hover:bg-[#fffaf0] border-[#3E001F]' />
            <input type="text" onChange={(e) => setPostData({ ...postData, title: e.target.value })} placeholder='Title' className='p-4 m-1 rounded-xl outline-1 border-2 hover:bg-[#fffaf0] border-[#3E001F]' />
            <input type="text" onChange={(e) => setPostData({ ...postData, description: e.target.value })} placeholder='Description' className='p-4 m-1 rounded-xl outline-1 border-2 hover:bg-[#fffaf0] border-[#3E001F]' />
            <input type="text" onChange={(e) => setPostData({ ...postData, tags: e.target.value })} placeholder='Tech Stack (comma separated)' className='p-4 m-1 rounded-xl outline-1 border-2 hover:bg-[#fffaf0] border-[#3E001F]' />
            <input type="text" onChange={(e) => setPostData({ ...postData, link: e.target.value })} placeholder='Link to repository' className='p-4 m-1 rounded-xl outline-1 border-2 hover:bg-[#fffaf0] border-[#3E001F]' />
            <div className='px-3'>
                <span className='font-semibold text-[#3E001F] font-playfair'>Upload image: </span>
                <FileBase type='file' multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} />
            </div>

            <button className='rounded-xl p-4 m-1 border-2 border-[#3E001F] w-4/5 mx-auto mt-10 hover:bg-[#982176] hover:text-[#FFE5AD] text-1xl font-playfair font-semibold'>Show it to the world</button>
            <button className='rounded-xl p-4 m-1 border-2 border-[#3E001F] w-4/5 mx-auto  hover:bg-[#982176] hover:text-[#FFE5AD] text-1xl font-playfair font-semibold' onClick={handleClear}>Start over</button>


        </form>
    )
}

export default Form