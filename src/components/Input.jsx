export default function Input({ name, text, value, type = "text", onchange }) {
  return (
    <div>
      <label>{text}</label>
      <input
        type={type}
        placeholder={text}
        className="p-3 rounded-lg shadow-card outline-none w-full mt-2"
        onChange={(e) => onchange(e)}
        value={value}
        name={name}
      />
    </div>
  );
}
