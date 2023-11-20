export default function Input({ name, type = "text" }) {
  return (
    <div>
      <label>{name}</label>
      <input
        type={type}
        placeholder={name}
        className="p-3 rounded-lg shadow-card outline-none w-full mt-2"
      />
    </div>
  );
}
