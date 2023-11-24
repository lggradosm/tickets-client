export default function TextArea({ text, placeholder, name }) {
  return (
    <div className="flex flex-col text-highlight">
      <label htmlFor="" className="mb-2">
        {text}
      </label>
      <textarea
        name={name}
        placeholder={placeholder}
        className={
          "outline-none rounded-lg flex-grow min-h-[200px] h-fit text-sm text-neutral-300 p-3 bg-secondary"
        }
      ></textarea>
    </div>
  );
}
