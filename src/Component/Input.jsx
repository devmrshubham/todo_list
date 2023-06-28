import React from "react";

function Input({ sendData }) {
  const Handler = (e) => {
    if (e.key == "Enter") {
      sendData(e.target.value);
      e.target.value = "";
    }
  };
  return (
    <div>
      <input
        type="text"
        className=" w-[90%] shadow-2xl mt-3 outline-none block mx-auto p-3 text-[20px] "
        placeholder="enter your name"
        autoFocus={true}
        onKeyUp={Handler}
      />
    </div>
  );
}

export default Input;
