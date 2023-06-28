import React from "react";
import Display from "./Component/Display";
import Input from "./Component/Input";
import { useState } from "react";
import "./App.css";

function App(props) {
  const [currentData, setData] = useState([]);

  const listData = (d) => {
    if (d.length == "") {
      return false;
    } else {
      setData([...currentData, d]);
    }
  };

  const removeData = (index) => {
    const DeletData = currentData.filter((d, i) => {
      if (i == index) {
        return false;
      } else {
        return true;
      }
    });
    setData(DeletData);
  };
  return (
    <div className="w-[62.5rem] bg-gray-200  flex flex-col mx-auto mt-3 pt-6 ">
      <Input sendData={listData} />
      <Display event={currentData} remove={removeData} />
    </div>
  );
}

export default App;
