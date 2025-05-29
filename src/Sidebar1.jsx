import { useEffect, useState } from "react";

export default function Sidebar1() {
    const [open,setOpen]=useState(true);
    
  return (
    <div className=" w-full flex h-screen">
      <div className={`transition-all bg-red-100 duration-500 ease-in-out delay-200 ${open? "lg:w-1/5 w-[45px]":"w-[45px]"}`}>
        <div className="flex bg-red-200 max-h-[48px] justify-between flex-row-reverse p-1"  >
            <img className="bg-red-300 w-[40px] rounded-xl" src="../../sidebar-flip-svgrepo-com.svg" alt="" onClick={()=>{setOpen(x=>!x);}}/>
            <div className={`w-full p-2 transition-all  ${open?"lg:opacity-100 lg:scale-100 lg:delay-700":""} opacity-0 scale-0 `} >
                Toggle Sidebar
            </div>

        </div>
        <SidebarOption open={open}/>
        <SidebarOption open={open}/>
        <SidebarOption open={open}/>
        <SidebarOption open={open}/>
        <SidebarOption open={open}/>
      </div>
      <div className="w-full bg-blue-300">hi there</div>
    </div>
  );
}

function SidebarOption({open}) {
  return (
    <div className="flex bg-red-200 rounded-xl mb-2 mt-2 flex-row-reverse items-center w-full justify-between ${open?m-2:m-2}">
      <img
        className="w-[35px] h-[35px] m-1 p-1"
        src="../../home-svgrepo-com.svg"
        alt="Home"
        />
        <div className="w-full grid grid-cols-12">
        <div className={`p-2 col-start-3 col-span-3 transition-all ${open?"lg:scale-100 lg:delay-700 lg:opacity-100":""} scale-0 opacity-0`}>Home</div>

        </div>
    </div>
  );
}
