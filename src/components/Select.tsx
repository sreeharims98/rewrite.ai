interface SelectProps {
  value: string;
  options: { value: string; text: string }[];
  onChange: (a: string) => void;
}

function Select({ value, options, onChange }: SelectProps) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
    >
      {options.map((o) => (
        <option value={o.value} key={o.value}>
          {o.text}
        </option>
      ))}
    </select>
  );
}

export default Select;
