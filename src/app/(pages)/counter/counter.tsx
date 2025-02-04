'use client'
import { useState } from "react"


export default function CounterPage(){
    const [count,setCount]=useState(0);
    return (
      <div>
        <h1>Counter</h1>
        <div>{count}</div>
        <button onClick={()=>setCount(count+1)}>Increament</button>
      </div>
    )
}