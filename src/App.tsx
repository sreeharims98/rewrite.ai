import TextArea from "./components/TextArea";
import Button from "./components/Button";
import Select from "./components/Select";
import { selectOptions } from "./data/constants";
import useOpenai from "./hooks/useOpenAi";
import Error from "./components/Error";

function App() {
  const {
    loading,
    error,
    input,
    method,
    output,
    handleCopy,
    handleGenerate,
    handleSelect,
    handleText,
    handleReset,
  } = useOpenai();

  return (
    <div className="flex flex-col gap-4  bg-neutral-200 p-4 w-[30rem]">
      <h2 className="text-center font-bold text-4xl text-neutral-500 font-mono">
        rewrite<span className="text-blue-700">.</span>ai
      </h2>
      <TextArea
        value={input}
        setValue={handleText}
        placeholder="Write here..."
      />
      <Select options={selectOptions} value={method} onChange={handleSelect} />
      <Button
        text="Generate"
        onClick={handleGenerate}
        disabled={!(method && input && !loading)}
        loading={loading}
      />
      {/* {error && */}
      <Error message={error} />
      {/* } */}
      {output && (
        <TextArea value={output} placeholder="Output generated here." />
      )}
      <div className="flex items-center gap-4">
        {output && (
          <Button
            text="Reset"
            onClick={handleReset}
            disabled={!output}
            loading={false}
          />
        )}
        {output && (
          <Button
            text="Copy"
            onClick={handleCopy}
            disabled={!output}
            loading={false}
          />
        )}
      </div>
    </div>
  );
}

export default App;
