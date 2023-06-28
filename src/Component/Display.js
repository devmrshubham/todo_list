import React from "react";
import { useState } from "react";

function Display({ event, remove }) {
  let listItem;

  if (event.length > 0) {
    listItem = event.map((d, i) => {
      return <Item task={d} index={i} id={i} icon={remove} />;
    });
  } else {
    listItem = (
      <h1
        style={{ textShadow: "0px 0px 5px black", textTransform: "capitalize" }}
        className=" text-[yellow] mt-2 text-[20px] font-[bolder]"
      >
        start your day...
      </h1>
    );
  }
  return (
    <div className=" w-[90%]  mx-auto">
      <ul>{listItem}</ul>
    </div>
  );
}

function Item({ task, index, icon }) {
  const [Toggle, SetToggle] = useState(false);

  return (
    <li
      className={` w-[100%] bg-red-700 text-white my-5 p-2 text-[22px] flex justify-between bor items-center rounded ${
        Toggle ? "line-through" : ""
      }   `}
      onClick={() => SetToggle(!Toggle)}
    >
      {task}
      <span>
        <i
          class="fa-regular fa-rectangle-xmark text-[30px] text-[yellow]  cursor-pointer  "
          onClick={() => icon(index)}
        ></i>
      </span>
    </li>
  );
}

export default Display;
