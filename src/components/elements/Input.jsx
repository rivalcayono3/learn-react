function Label(props) {
  const { label, name, placeholder, type } = props;
  return (
    <div className="mb-4">
      <label className="block font-bold text-slate-600" htmlFor={name}>
        {label}
      </label>
      <input id={name} type={type} name={name} placeholder={placeholder} className="w-full px-3 py-2 border border-solid rounded-md outline-blue-400 border-slate-300" />
    </div>
  );
}

export default Label;
