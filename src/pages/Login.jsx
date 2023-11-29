import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Input from "../components/Input";
import { useEffect, useState } from "react";
import { LoginService } from "../services/LoginService";
export default function Login() {
  const { login } = LoginService();
  const navigate = useNavigate();
  const token = window.localStorage.getItem("token");
  const [error, setError] = useState(false);
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  useEffect(() => {
    if (token) navigate("/");
  }, []);

  const errorHandler = () => {
    setUser((prev) => ({ ...prev, password: "" }));
    setError(true);
  };

  const loginHandler = async () => {
    const tokenUser = await login(user);
    if (tokenUser) {
      window.localStorage.setItem("token", tokenUser);
      setError(false);
      navigate("/");
    } else errorHandler();
  };

  const onChange = (event) => {
    const { name, value } = event.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  if (!token)
    return (
      <section className="bg-primary w-screen h-screen flex flex-col justify-center items-center">
        <div className="bg-white w-[40rem] h-[40rem] rounded-lg p-20 flex flex-col  justify-center gap-8">
          <h3 className="text-3xl font-bold">Inicio de sesión</h3>
          <Input
            text={"Usuario"}
            name={"username"}
            value={user.username}
            onchange={onChange}
          />
          <Input
            text={"Contraseña"}
            name={"password"}
            value={user.password}
            onchange={onChange}
            type="password"
          />
          {error && (
            <small className="text-red-700">
              Usuario y/o contraseña incorrecta
            </small>
          )}
          <div className="flex justify-center items-center">
            <p className="w-full underline cursor-pointer">
              Olvidé mi contraseña
            </p>
            <Button name={"Ingresar"} onclick={loginHandler} />
          </div>
        </div>
      </section>
    );
}
