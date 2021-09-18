import React, { useMemo, useState } from "react";

export default function UseMemo() {
  const [value, setValue] = useState(0);
  const [textValue, setTextValue] = useState(0);

  function calculate() {
    const hash = value * 1000;
    console.log("Computation Done:" + hash);
    return hash;
  }

  useMemo(() => calculate(), [value]);

  return (
    <div className="App">
      <input
        type="number"
        value={textValue}
        onChange={(e) => setTextValue(e.target.value)}
      />
      <button onClick={() => setValue(textValue)}>Calculate</button>
    </div>
  );
}
