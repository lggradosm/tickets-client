export default function InputForm({
  text,
  placeholder,
  name,
  autocomplete = false,
  required = false,
  type = "text",
}) {
  <div className="w-full flex flex-col text-highlight">
    <label htmlFor="" className="mb-2">
      {text}
    </label>
    <input
      autoComplete={`${autocomplete ? "on" : "off"}`}
      name={name}
      id={name}
      type={type}
      placeholder={placeholder}
      max={2500}
      className={`outline-none rounded-lg w-full h-10 text-sm text-neutral-300 px-3 bg-secondary ${
        type === "number" ? "" : ""
      }`}
    />
    <small
      className={`text-red-800 text-end ${required ? "visible" : "invisible"}`}
    >
      *Requerido
    </small>
  </div>;
}
