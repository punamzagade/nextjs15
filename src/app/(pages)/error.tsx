'use client';


import { useRouter } from "next/navigation";
import { startTransition } from "react";

export default function ErrorPage({error,reset}:{
    error:Error;
    reset:()=>void;
}){
    const router=useRouter();

    const reload=()=>{
startTransition(()=>{
    router.refresh();
    reset();
})
    }
    return (
        <div>
  <div>errors:{error.message}</div>
  <button type="submit" className="border border-black px-3" onClick={reload}>Try again</button>
        </div>
      
    )
}