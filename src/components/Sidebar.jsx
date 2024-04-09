import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  TicketIcon,
  HomeIcon,
  UserGroupIcon,
  ChevronRightIcon,
  ArrowLeftOnRectangleIcon,
} from "@heroicons/react/24/solid";
import { useUserContext } from "../context/UserContext"
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
        <Icon className="w-6" />
        <span className="hidden xl:inline-block"> {name}</span>
        <span className="hidden absolute left-full top-0 select-none bg-neutral-900 text-white h-full group-hover:flex items-center rounded-r-lg ´">
          <span className="p-4">{name}</span>
        </span>
      </Link>
    </li>
  );
};
export default function Sidebar() {
  const navigate = useNavigate();
  const {logout} = useUserContext()

  const signOut = () => {
    window.localStorage.removeItem("procedure");
    navigate("login");
  };
  return (
    <aside className="h-screen w-16 xl:w-80 bg-primary flex flex-col items-stretch justify-between">
      <div>
        <section className="w-full flex items-center justify-center mt-4"><img src="/images/logo.png" /></section>
        <ul className="pt-4 flex flex-col gap-1">
          <SidebarItem name="Tickets" icon={TicketIcon} link={"/"} />
        </ul>
      </div>
      <div className="relative group hover:bg-neutral-400/30">
      <li
              className="p-4 cursor-pointer  w-full flex items-center justify-center h-full  text-white gap-2"
              onClick={()=>logout(navigate)}
            >
              <ArrowLeftOnRectangleIcon className="w-6" /> Cerrar Sesión
            </li>
      </div>
    </aside>
  );
}
