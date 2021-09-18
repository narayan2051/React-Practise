import React, {useCallback, useMemo, useState } from "react";
import Test from "./Test";

export default function UseCallBackDemo(props) {
  const [number, setNumber] = useState(0);
  const [toggle, setToggle] = useState(false);

  const getItems = useMemo(() => {
    return [number, number + 1, number + 2];
  },[number]);

  const color = {
    backgroundColor: toggle ? "red" : "white",
  };

  return (
    <div style={color}>
      <input
        type="number"
        value={number}
        onChange={(event) => setNumber(parseInt(event.target.value))}
      />
      <button onClick={()=>setToggle(!toggle)}>toggle Bg color</button>
      <Test items={getItems} />
    </div>
  );
}
