import Button from "./Button"

export default function Modal () {
  const save = () => {

  }
  return <div className="absolute bg-neutral-900/50 w-screen h-screen left-0 top-0 flex justify-center items-center">
    <div className=" w-1/4 bg-white rounded-md p-4">
      <div className="flex">
        <p>Empezar en:</p>
        <input type="text" />
      </div>
      <Button name={'Guardar'}  onclick={save}/>

    </div>
  </div>
}