import { useState } from "react"

export default function Input ({label, name, value, onChange ,placeholder = label,className, message, error, type="text", autocomplete="off", disabled = false, iconShowPassword, icon}) {
  const Icon = icon || null;
  const IconPassword = iconShowPassword || null;
  const [typeInput,setTypeInput] = useState(type)
  const showPasswordHandler = () => {
    setTypeInput(prev=> prev==="text"? "password":"text" )
    console.log(typeInput);
  }

  return <div className="w-full flex flex-col gap-2 select-none">
    <label htmlFor="" className="font-bold">{label}</label>
    <div className="w-full group relative text-neutral-500">
      <input  value={value} onChange={onChange} disabled={disabled} name={name} type={type} autoComplete={autocomplete} placeholder={placeholder} className={`w-full 
      ${disabled?"bg-neutral-50 cursor-not-allowed":""} outline-none   text-sm  border-2 border-neutral-200
       focus:border-primary  h-10 px-2 rounded-md duration-75
       ${icon?"pl-7":""} ${iconShowPassword?"pr-9":""}`}/>
      {icon && (<Icon className="w-4 left-[10px] absolute top-[12px]"/>)}
      {iconShowPassword && type ==="password" && (<IconPassword className="w-5 right-3 absolute top-[10px] cursor-pointer" 
        onMouseLeave={()=>setTypeInput("password")} onMouseUp={showPasswordHandler}  onMouseDown={showPasswordHandler}/>)}
    </div>
    {(message || error) && (<small className={`text-xs text-neutral-400 h-4  ${message || error? "text-neutral-400":""} ${error? " text-red-500":""}`}>{message}{error}</small>) }
  </div>
}