import React from "react";
import "./App.css";
import UseCallBackDemo from "./Component/UseCallBack/UseCallBackDemo";
import UseMemo from "./Component/UseMemo/UseMemo";

import UseReducerDemo from "./Component/UseReducer/UseReducerDemo";

function App() {
  return (
    <div className="App">
      <h1> useCallback Demo</h1>
      <UseCallBackDemo />
      <h1> Use Memo Demo</h1>
      <UseMemo />
      <h1> Use Reducer Demo</h1>
      <UseReducerDemo />
    </div>
  );
}

export default App;
