interface ButtonProps {
  text: string;
  onClick: () => void;
  disabled: boolean;
  loading: boolean;
}

function Button({ text, onClick, disabled, loading }: ButtonProps) {
  return (
    <button
      type="button"
      className={`w-full h-[43px] text-white focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 rounded-lg
        ${
          disabled
            ? "bg-neutral-300 cursor-not-allowed"
            : "bg-blue-700 hover:bg-blue-800"
        }
      `}
      onClick={onClick}
      disabled={disabled}
    >
      {loading ? "Loading..." : text}
    </button>
  );
}

export default Button;
