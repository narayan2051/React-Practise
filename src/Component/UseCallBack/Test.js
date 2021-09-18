import React, { useEffect, useState } from "react";

export default function Test(props) {
  const [items, setItems] = useState([]);

  useEffect(() => {
      setItems(props.items);
      console.log("Updated")
  }, [props.items]);

  return (
    <>
      {items.map((item) => (
        <div>{item}</div>
      ))}
    </>
  );
}
