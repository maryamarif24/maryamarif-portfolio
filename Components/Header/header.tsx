import React from "react";

export default function Header () {
    return (
        <div className="flex bg-[#970747] w-full text-white align-items-center justify-between">
            <h1 className="font-serif font-extrabold p-2 text-[40px] mx-[30px] my-[10px] text-[#f5f5dc]">PORTFOLIO</h1>

            <div>
                <ul className="list-style-none flex mx-[50px] font-bold font-sans my-[20px] text-[20px]">
                    <li className="px-[20px] py-[10px]"><a href="/">Home</a></li>
                    <li className="px-[20px] py-[10px]"><a href="/About">About</a></li>
                    <li className="px-[20px] py-[10px]"><a href="/Education">Education</a></li>
                    <li className="px-[20px] py-[10px]"><a href="/Contact">Contact</a></li>
                    <li className="px-[20px] py-[10px]"><a href="/Certificates">Certificates</a></li>
                </ul>
            </div>
        </div>
    )
}