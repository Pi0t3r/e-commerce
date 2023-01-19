import React, { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function MyDropdown({ name, number }) {
  const [expanded, setExpanded] = useState(false);
  const options = [
    [
      "Rolex",
      "A. Lange and Sohne",
      "IWC",
      "Omega",
      "Vacheron Constantin",
      "Tag Heuer",
    ],
    ["option 3", "option 4"],
    ["10", "11", "12", "13", "14", "15", "16", "17", "18"],
    ["option 7", "option 8"],
    ["option 10", "option 9"],
  ];
  return (
    <div>
      <button
        class="border-solid border-2 p-2 rounded-md"
        onClick={() => setExpanded(!expanded)}
      >
        {name} <ExpandMoreIcon />
      </button>
      {expanded && (
        <ul class="border-solid border-2 mt-2 rounded-md text-center absolute w-28">
          {options[number].map((option, index) => (
            <li key={index} class="hover:bg-slate-100 cursor-pointer">
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default MyDropdown;
