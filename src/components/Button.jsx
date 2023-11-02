export default function Button ({name,onclick}) {
  return  <button className="bg-primary text-white p-3   rounded-lg w-60 text-2xl hover:scale-105 duration-200 " onClick={onclick}>{name}</button>

}