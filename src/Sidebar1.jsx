import { useEffect, useState } from "react";

export default function Sidebar1() {
    const [open,setOpen]=useState(true);
    const [showText,setShowText]=useState(true);
    let timer=0;
    useEffect(()=>{
      if(open){
        timer=setTimeout(()=>{
          setShowText(true);
          console.log("open: "+open+" showText: "+showText);
        },700   );
      }
      else{
        setShowText(false);
        console.log("open: "+open+" showText: "+showText);
      }
        return (()=>{
            clearTimeout(timer);  
        })
    },[open])
  return (
    <div className=" w-full flex h-screen">
      <div className={`transition-all duration-500 ease-in-out delay-200 ${open? "lg:w-1/5 w-[45px]":"w-[45px]"}`}>
        <div className="flex bg-red-300 justify-between flex-row-reverse p-1" onClick={()=>{setOpen(x=>!x);}} >
            <img className="w-[40px] " src="../../sidebar-flip-svgrepo-com.svg" alt="" />
            {showText&&<div className={"w-full p-2 transition-all lg:delay-700 lg:opacity-100 lg:scale-100 opacity-0 scale-0 max-h-[48px]"} >
            {/* {showText&&<div className=" w-full p-2 lg:block hidden" > */}
                Toggle Sidebar
            </div>}

        </div>
        <SidebarOption showText={showText}/>
        <SidebarOption showText={showText}/>
        <SidebarOption showText={showText}/>
        <SidebarOption showText={showText}/>
        <SidebarOption showText={showText}/>
      </div>
      <div className="w-full bg-blue-300">hi there</div>
    </div>
  );
}

function SidebarOption({showText}) {
  return (
    <div className="flex flex-row-reverse items-center w-full justify-between ${open?m-2:m-2}">
      <img
        className="w-[35px] h-[35px] m-1 p-1"
        src="../../home-svgrepo-com.svg"
        alt="Home"
        />
        {showText?<div className="p-2 lg:block hidden">Home</div>:null}
    </div>
  );
}
