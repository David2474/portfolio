import React from "react"

interface InputProps{
    id: string;
    name: string;
    plceholder?: string;
    type: 'text' | 'email'; 

}

export default function Input({id, name, plceholder, type}:InputProps) {
  return (
    <input
      id={id}
      name={name}
      placeholder={plceholder}
      type={type}
      className="border border-black w-11/12 sm:w-8/12 my-6 text-black pl-1 border-none h-9 rounded-sm focus:outline-[#7E00DE] focus:outline-none"
    />
  )
}
