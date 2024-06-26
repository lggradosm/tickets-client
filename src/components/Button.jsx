export default function Button({ name, onclick, size = "md" }) {
  const sizes = {
    sm: "text-sm p-4 px-8",
    md: "text-md p-4 px-8",
    lg: "text-lg p-5 px-10",
  };
  return (
    <button
      className={`bg-primary h-10 flex items-center justify-center text-white text-sm  w-full  rounded-lg  ${sizes[size]} hover:scale-105 duration-200`}
      onClick={onclick}
    >
      {name}
    </button>
  );
}
