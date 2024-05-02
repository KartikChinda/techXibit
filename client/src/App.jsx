import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";



function App() {


  return (
    <>
      <div className="bg-[#F11A7B]">
        <div className="w-[100%] m-0 mx-auto p-2 pb-4 text-7xl bg-[#9821765b] flex justify-center items-center gap-10 text-[#3E001F]"> T E C H  <span className="font-bold text-8xl text-[#3E001F]"> X </span>  I B I T</div>
        <section className="w-full h-[100vh] bg-[#F11A7B] mt-20 px-20 flex flex-row justify-between ">
          <div className="w-4/5 bg-slate-200 p-5 mr-3">
            <Posts />

          </div>
          <div className="bg-yellow-400 w-1/5 p-5 ml-3">
            <Form />

          </div>

        </section>

      </div>

    </>
  )
}

export default App
