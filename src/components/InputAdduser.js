export default function InputAdduser({ onChange, error, placeholder, type }) {
  return (
    <>
      <input
        type={type || "text"}
        placeholder={placeholder}
        className="border-2 border-gray-400 focus:ring-0 focus:border-black rounded-xl"
        onChange={onChange}
      />
      {error && <div className="text-red-600 text-[12px]">{error}</div>}
    </>
  );
}
