import { UserPlusIcon } from "@heroicons/react/24/solid";
import EmployeeModal from "../components/EmployeeModal";
import { useState } from "react";
export default function Team() {
  const [employeeModalVisibility, setEmployeeModalVisibility] = useState(false);

  const closeModal = () => {
    setEmployeeModalVisibility(false);
  };

  const openModal = () => {
    setEmployeeModalVisibility(true);
  };
  return (
    <div className="page">
      <h2 className="text-4xl font-bold file:">Personal</h2>
      <div className="group bg-primary h-16 flex justify-center items-center  w-16 shadow-md shadow-black/40 rounded-full fixed bottom-4 right-4 hover:scale-105 duration-200">
        <button
          className=" cursor-pointer w-full h-full flex justify-center items-center"
          onClick={openModal}
        >
          <UserPlusIcon className="w-6 text-white" />
        </button>
        <span className="group-hover:flex select-none hidden text-white absolute right-[calc(100%+4px)] text-sm bg-neutral-900 rounded-xl p-3 px-7">
          Crear
        </span>
      </div>
      <EmployeeModal
        visibility={employeeModalVisibility}
        onclick={closeModal}
      />
    </div>
  );
}
