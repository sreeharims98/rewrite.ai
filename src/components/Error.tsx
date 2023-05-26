interface ErrorProps {
  message: string;
}

function Error({ message }: ErrorProps) {
  if (!message) return null;
  return (
    <div
      className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg relative"
      role="alert"
    >
      <span className="block sm:inline">{message}</span>
    </div>
  );
}

export default Error;
