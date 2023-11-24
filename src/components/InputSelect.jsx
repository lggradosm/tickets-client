import { ChevronDownIcon } from "@heroicons/react/24/solid";
import useVisibility from "../hooks/useVisibility";
import useClickOutsideToClose from "../hooks/useClickOutsideToClose";

export default function InputSelect({
  options,
  placeholder,
  selected,
  onClick,
  required = false,
  className = "",
}) {
  const { visibility, toggle, disable } = useVisibility();
  const { ref } = useClickOutsideToClose(disable);
  const clickHandler = (item) => {
    onClick(item);
    disable();
  };

  return (
    <div
      ref={ref}
      className="w-full h-full flex  select-none  flex-col text-highlight"
    >
      <div className="relative">
        <label htmlFor="" className="mb-2 block">
          Categoría
        </label>
        <span
          onClick={toggle}
          className="text-sm w-full bg-secondary rounded-lg  flex justify-end cursor-pointer gap-2 items-center p-3 "
        >
          {" "}
          {selected}
          <ChevronDownIcon
            className={`h-4 duration-200 ${visibility ? "rotate-180" : ""}`}
          />
        </span>
        {visibility && (
          <ul className="absolute w-full   rounded-lg overflow-hidden border-[1px] border-borderColor  top-full text-sm">
            {options.map((item, index) => (
              <li
                key={index}
                className="p-4 cursor-pointer bg-dropdown hover:bg-highlight text-highlight duration-200  text-right"
                onClick={() => {
                  clickHandler(item);
                }}
              >
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
      <small
        className={`text-red-800 text-end ${
          required ? "visible" : "invisible"
        }`}
      >
        *Requerido
      </small>
    </div>
  );
}
