import Button from "../components/Button";
import Input from "../components/Input";

export default function Login() {
  return (
    <section className="bg-primary w-screen h-screen flex flex-col justify-center items-center">
      <div className="bg-white w-[40rem] h-[40rem] rounded-lg p-20 flex flex-col  justify-center gap-8">
        <h3 className="text-3xl font-bold">Inicio de sesión</h3>
        <Input name={"Usuario"} />
        <Input name={"Contraseña"} type="password" />
        <div className="flex justify-center items-center">
          <p className="w-full underline cursor-pointer">
            Olvidé mi contraseña
          </p>
          <Button name={"Ingresar"} onclick={() => {}} />
        </div>
      </div>
    </section>
  );
}
