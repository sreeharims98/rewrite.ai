import { useState } from "react";
import { generateOutput } from "../services/generateOutput";

function useOpenai() {
  const [input, setInput] = useState("");
  const [method, setMethod] = useState("SUMMARIZE_TEXT");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleText = (val: string) => {
    setInput(val);
    setError("");
  };

  const handleSelect = (val: string) => {
    console.log("handle select", val);
    setMethod(val);
    setError("");
  };

  const handleGenerate = async () => {
    setLoading(true);
    setError("");

    try {
      if (method && input) {
        console.log("handle generate", { method, input });
        const res = await generateOutput({ method, input });

        if (res?.data?.choices?.length > 0) {
          const cleanedStr = res.data.choices[0]?.text?.replace(/^\n+/, "");
          setOutput(cleanedStr);
        }
      }
    } catch (error: any) {
      setError(error?.message);
    }
    setLoading(false);
  };

  const handleCopy = () => {
    console.log("handle copy");
    navigator.clipboard.writeText(output);
  };

  const handleReset = () => {
    console.log("handle Reset");
    setInput("");
    setOutput("");
    setMethod("SUMMARIZE_TEXT");
    setLoading(false);
    setError("");
  };

  return {
    loading,
    error,
    input,
    method,
    output,
    handleText,
    handleSelect,
    handleGenerate,
    handleCopy,
    handleReset,
  };
}

export default useOpenai;
