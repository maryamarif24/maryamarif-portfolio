import React from "react";

export default function Footer () {
    return (
        <div className="flex bg-black align-items-center justify-center px-[40px] py-[40px]">
                  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
            <div>
                <h1 className="font-serif font-extrabold p-2 text-[30px] mx-[30px] my-[10px] text-slate-300">PORTFOLIO</h1>
            </div>

            <div className="ml-[140px]">
                <p className="text-slate-600 text-1xl font-bold">Check Out my Profiles!</p>
                <p className="flex p-1">
                    <a href="https://www.linkedin.com/in/maryam-arif-71b0992b5?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BHIrfapWmRayO5PP%2BUs%2F7mQ%3D%3D" className="fa fa-linkedin p-4 text-[#970747]"></a>
                    <a href="https://www.instagram.com/maryam.arif._/#" className="fa fa-instagram p-4 text-[#970747]"></a>
                    <a href="https://www.facebook.com/share/1CndFwPBLk/"className="fa fa-facebook p-4 text-[#970747]"></a>
                </p>
            </div>
        </div>
    )
}