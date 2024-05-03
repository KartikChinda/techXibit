import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import Post from "./components/Posts/Post/Post";

import { getPosts } from './actions/posts'



function App() {

  // dispatch is what you call when you want to send a query to the store, be it a get or a post query. 
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());

  }, [])



  return (
    <>
      <div className="bg-[#F11A7B]">
        <div className="w-[100%] m-0 mx-auto p-2 pb-4 text-7xl bg-[#9821765b] flex justify-center items-center gap-10 text-[#3E001F] font-playfair"> T E C H  <span className="font-bold text-8xl text-[#3E001F] font-playfair"> X </span>  I B I T</div>
        <section className="w-full h-[100%] bg-[#F11A7B] mt-20 px-20 flex flex-row justify-between ">
          <div className="w-4/6 p-0 pl-0 mr-3 ">
            <Posts />
          </div>
          <div className="w-2/6 p-5 pt-0 ml-3">
            <Form />
          </div>

        </section>

      </div>

    </>
  )
}

export default App
