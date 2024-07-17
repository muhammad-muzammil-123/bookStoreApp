import { useState } from "react"

export default function Input({type,placeholder,value,onChange}){
  
    // console.log(props.type)
    return(
        <div>
            <input value={value} onChange={(e) => onChange(e.target.value)}   className="input bordered border-none py-2 mt-2 w-full max-w-xs" type={type} placeholder={placeholder} />
            
        </div>
    )
}