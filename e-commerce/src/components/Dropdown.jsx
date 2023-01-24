import React, { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function MyDropdown({ name, number, handleSort }) {
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
    [
      "by name (A-Z)",
      "by name (Z-A)",
      "by price(low to hight)",
      "by price(high to low)",
      "by year (low to hight)",
      "by year (high to low)",
    ],
  ];
  return (
    <div>
      <button
        class="border-solid border-2 p-2 rounded-md z-2"
        onClick={() => setExpanded(!expanded)}
      >
        {name} <ExpandMoreIcon />
      </button>
      {expanded && (
        <ul class="border-solid border-2 mt-2 rounded-md text-center absolute w-36 bg-slate-100">
          {options[number].map((option) => (
            <li
              class="hover:bg-slate-200 cursor-pointer"
              onClick={() => handleSort(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default MyDropdown;
