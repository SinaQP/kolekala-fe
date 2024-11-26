"use client"

import Image from "next/image"
import dashBg from './../../public/images/dash/Rectangle 2253.png'
import vactor from './../../public/images/dash/Vector.png'

import { useState } from "react";
export function DashboardClient (){

    const [isActiveEdit, setIsActiveEdit] = useState(false);
    const [isActiveFollowUp, setIsActiveFollowUp] = useState(false);
    const [isActiveGap, setIsActiveGap] = useState(false);
    const [isActiveComment, setIsActiveComment] = useState(false);

    function handleClickEdit () {
        setIsActiveEdit(!isActiveEdit);
      };
      function handleClickFollowUp () {
        setIsActiveFollowUp(!isActiveFollowUp);
      };
      function handleClickGap () {
        setIsActiveGap(!isActiveGap);
      };
      function handleClickComment () {
        setIsActiveComment(!isActiveComment);
      };
    return(
        
        <div className=" w-[20rem] h-[100vh] ml-auto">
           <Image alt="dash-bg" src={dashBg}className="relative h-screen"  />
           <div>
           <Image alt="vactor" src={vactor} className="absolute top-8 right-8 " />
           <p className="absolute top-[3.5rem] right-[9rem] text-white">نام کاربری</p>
           </div>
            <div className={  "flex flex-col items-end gap-12 w-[inherit] top-44  text-base text-white absolute"}>
                <div className={isActiveEdit ? 'bg-white w-[inherit] text-black flex justify-center items-center ' : ''} onClick={handleClickEdit}>
                <p >ویرایش حساب کاربری</p>
                </div>
                <div className={isActiveFollowUp ? 'bg-white w-[inherit] text-black right-[-7rem] ' : ''} onClick={handleClickFollowUp}>
                <p >پیگیری سفارشات</p>
                </div>
                <div className={isActiveGap ? 'bg-white w-[inherit] text-black right-[-7rem] ' : ''} onClick={handleClickGap}>
                <p>گفت و گو با کارشناسان</p>
                </div>
                <div className={isActiveComment ? 'bg-white w-[inherit] text-black right-[-7rem] ' : ''} onClick={handleClickComment}>
                <p>دیدگاه‌های ثبت شده</p>
                </div>
            </div>
        </div>
    )
}