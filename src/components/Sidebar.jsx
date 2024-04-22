import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  TicketIcon,
  ArrowLeftOnRectangleIcon,
  TrashIcon,
} from "@heroicons/react/24/solid";
import { useUserContext } from "../context/UserContext";
const SidebarItem = ({ icon, name, link }) => {
  const location = useLocation().pathname;
  const Icon = icon;
  return (
    <li className="relative group">
      <Link
        to={link}
        className={`p-4  duration-200 flex gap-4 ${
          location === link
            ? "bg-accent/80 text-white"
            : "hover:text-white hover:bg-neutral-400/30 text-neutral-400 "
        }`}
      >
        <Icon className="w-4" />
        <span className="hidden xl:inline-block"> {name}</span>
      </Link>
    </li>
  );
};
export default function Sidebar() {
  const navigate = useNavigate();
  const { logout } = useUserContext();

  const signOut = () => {
    window.localStorage.removeItem("procedure");
    navigate("login");
  };
  return (
    <aside className="h-screen w-16 xl:w-80 bg-primary flex flex-col items-stretch justify-between">
      <div>
        <section className="hidden lg:flex w-full   items-center justify-center mt-0 lg:mt-4">
          <img src="/images/logo.png" />
        </section>
        <ul className="pt-0 lg:pt-4 flex flex-col gap-1">
          <SidebarItem name="Tickets" icon={TicketIcon} link={"/"} />
          <SidebarItem
            name="Reiniciar Tickets"
            icon={TrashIcon}
            link={"/tickets/reiniciar"}
          />
        </ul>
      </div>
      <div className="relative group hover:bg-neutral-400/30">
        <li
          className="p-4 cursor-pointer  w-full flex items-center justify-center h-full  text-white gap-2"
          onClick={() => logout(navigate)}
        >
          <ArrowLeftOnRectangleIcon className="w-6" />{" "}
          <span className="hidden xl:inline-block">Cerrar Sesión</span>
        </li>
      </div>
    </aside>
  );
}
