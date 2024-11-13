import React from "react";

export default function Certificates () {
    return (
        <div className="bg-[#970747] p-[10px] w-full h-[1040px]">
            
            <div className="m-5 bg-white rounded-tl-[20px] rounded-br-[20px]">
                <h1 className="p-2 text-[50px] font-sans font-bold px-[440px]">Certificates</h1>
            </div>
            
            <div className="m-10 p-4 bg-white rounded-tl-[20px] rounded-br-[20px] flex ">
                
                <div className="m-5">
                    <p className="font-bold font-serif p-2 px-[94px] text-[30px]">
                        <a href="https://coursera.org/verify/PTCC66P37UTJ" target="_blank">Array Mastery</a>
                    </p>
                    <div className="bg-[#970747] w-[410px] rounded-tl-[30px] rounded-br-[30px]">
                        <div className="p-2">
                            <img src="/Images/array.png" alt="Array Certificate" height={400} width={400} className="rounded-tl-[30px] rounded-br-[30px]"/>
                        </div>
                    </div>
                </div>
                
                <div className="m-2 mt-[25px]">
                    <p className="font-bold font-serif px-[1px] text-[30px] mb-[10px]">
                        <a href="https://coursera.org/verify/9B3YXWFSGHC2" target="_blank">TypeScript String Properties & Methods</a>
                    </p>
                    <div className="bg-[#970747] w-[410px] rounded-tl-[30px] rounded-br-[30px] ml-[80px]">
                        <div className="p-2">
                            <img src="/Images/TSStrings.png" alt="String Certificate" height={400} width={400} className="rounded-tl-[30px] rounded-br-[30px]"/>
                        </div>
                    </div>
                </div>

            </div>

            <div className="m-10 p-4 bg-white rounded-tl-[20px] rounded-br-[20px] flex ">
                
                <div className="m-5">
                    <p className="font-bold font-serif p-2 px-[38px] text-[30px]" >
                        <a href="https://coursera.org/verify/THKK22WDZNW4" target="_blank">TypeScript Operators</a>
                    </p>
                    <div className="bg-[#970747] w-[410px] rounded-tl-[30px] rounded-br-[30px]">
                        <div className="p-2">
                            <img src="/Images/TSO.png" alt="Operators Certificate" height={400} width={400} className="rounded-tl-[30px] rounded-br-[30px]"/>
                        </div>
                    </div>
                </div>
                
                <div className="m-5">
                    <p className="font-bold font-serif p-2 px-[25px] text-[30px]">
                        <a href="https://coursera.org/verify/QRYS3WK2XX96" target="_blank">TypeScript Variables & Data Types</a>
                    </p>
                    <div className="bg-[#970747] w-[410px] rounded-tl-[30px] rounded-br-[30px] ml-[80px]">
                        <div className="p-2">
                            <img src="/Images/TSVariables.png" alt="Variables Certificate" height={400} width={400} className="rounded-tl-[30px] rounded-br-[30px]"/>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}