interface TextAreaProps {
  value: string;
  setValue?: (a: string) => void;
  placeholder: string;
}

function TextArea({ value, setValue, placeholder }: TextAreaProps) {
  return (
    <textarea
      rows={4}
      className="block p-2.5 w-full text-sm rounded-lg text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
      placeholder={placeholder}
      value={value}
      onChange={(e) => (setValue ? setValue(e.target.value) : null)}
    />
  );
}

export default TextArea;
