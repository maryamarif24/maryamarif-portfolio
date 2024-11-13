import React from "react";

export default function Contact () {
    return (
        <div className="bg-[#970747] p-[10px] w-full h-[1040px]">
            <div className="m-5 bg-white rounded-tl-[20px] rounded-br-[20px]">
                <h1 className="p-2 text-[50px] font-sans font-bold px-[440px]">Contact Me</h1>
            </div>

            {/* <div className="m-10 p-4 bg-white rounded-tl-[20px] rounded-br-[20px]">
                <form>
                    <input type="text" className="border-black rounded-2xl" placeholder="Full Name"/>
                    <input type="text" className="border-black rounded-2xl" placeholder="Email"/>
                    <input type="message" placeholder="Message"/>
                </form>
            </div> */}

<div className="border-3 border-zinc-950 mx-[100px]">
           <form action="">
              <input type="text" placeholder="Full Name" className="p-[10px] rounded-2xl pl-[30px] px-[600px] mx-[100px] border-2 border-zinc-950 my-2 hover:bg-[#970747] hover:border-white"/>
              <input type="text" placeholder="Email" className="p-[10px] rounded-2xl pl-[30px] px-[600px] mx-[100px] border-2 border-zinc-950 my-2 hover:bg-[#970747] hover:border-white"/>
              <input type="text" placeholder="Message" className="p-[10px] rounded-2xl pl-[30px] px-[600px] mx-[100px] border-2 border-zinc-950 my-2 hover:bg-[#970747] hover:border-white py-10"/>
              <button className="bg-white text-black font-bold  p-4 px-[340px] rounded-full mx-[50px] ml-[120px] hover:text-slate-900 hover:bg-[#970747] border-zinc-950 border-2 hover:border-white hover:text-white">Send Message</button>
          </form>
      </div>
        </div>
    )
}