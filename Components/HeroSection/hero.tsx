"use client"
import React from "react";
import {TypeAnimation} from 'react-type-animation';

export default function Hero () {
    return (
        <div className="flex justify-between align-items-center mx-[1px] my-[1px] px-[170px] py-[105px] bg-[url('/Images/bg.jpg')] bg-no-repeat bg-cover">
            <div className="font-bold p-4 m-4 ml-[60px] align-items-center justify-center relative">
                <p className="font-sans text-5xl font-extrabold px-[230px]">Hello! I am </p>
                <p className="text-[#970747] font-extrabold font-sans text-7xl my-[20px]">
                    <TypeAnimation
                        sequence = {["Maryam Arif!", 2000 , "" , 500]}
                        style = {{fontSize : "1.5em"}}
                        speed = {40}
                        repeat = {Infinity}
                    />
                </p>
                <p className="text-slate-500 px-[270px]">
                    <TypeAnimation
                        sequence={["Web Developer" , 500 , "Frontend Developer", 500 , "Backend Developer", 500 , "UI/UX Designer", 500 , "Graphic Designer", 500]}
                        style={{fontSize : "1.5em", fontFamily: "rye"}}
                        speed={40}
                        repeat={Infinity}
                    />
                </p>
            </div>
        </div>
    )    
}