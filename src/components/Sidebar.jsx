import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  TicketIcon,
  HomeIcon,
  UserGroupIcon,
  ChevronRightIcon,
  ArrowLeftOnRectangleIcon,
} from "@heroicons/react/24/solid";
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
  const signOut = () => {
    navigate("login");
  };
  return (
    <aside className="h-screen w-16 xl:w-80 bg-primary flex flex-col items-stretch justify-between">
      <div>
        <section>Brand</section>
        <ul className="pt-4 flex flex-col gap-1">
          <SidebarItem name="Inicio" icon={HomeIcon} link={"/"} />
          <SidebarItem name="Tickets" icon={TicketIcon} link={"/tickets"} />
          <SidebarItem
            name="Personal"
            icon={UserGroupIcon}
            link={"/personal"}
          />
        </ul>
      </div>
      <div className="relative group hover:bg-neutral-400/30">
        <div className="p-2 flex text-white gap-2 cursor-pointer ">
          <div className="rounded-full overflow-hidden w-16 ">
            <img src="/images/patty.png" alt="" className="rounded-full" />
          </div>
          <div className="hidden xl:flex flex-col">
            <p className="text-sm ">Patricia Fernanda Best Machado </p>
            <p className="text-sm text-accent font-medium ">
              Escrituras Públicas
            </p>
          </div>
          <div className="hidden xl:flex justify-center items-center">
            <ChevronRightIcon className="w-6" />
          </div>
        </div>
        <div className="absolute hidden group-hover:flex duration-200 w-[14rem] h-full bg-[#515c6a] left-full bottom-0 ">
          <ul className="w-full">
            <li
              className="p-4 cursor-pointer  w-full flex items-center justify-center h-full  text-white gap-2"
              onClick={signOut}
            >
              <ArrowLeftOnRectangleIcon className="w-6" /> Cerrar Sesión
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
}
