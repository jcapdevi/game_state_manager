import React from "react";

// Display Selection for ViewSelector
const DisplaySelection = ({ selection }) => {
  console.log('selection', selection)
  return (
    <div>
      <h3>Title: {selection.attributes.Title}</h3>
      <ul>
        <li>Template: {selection.attributes.Template}</li>
        <li>Player X: {selection.attributes.Player_x}</li>
        <li>Player O: {selection.attributes.Player_y}</li>
        <li>Board:
          <p>{selection.attributes.A1} {selection.attributes.A2} {selection.attributes.A3}</p>
          <p>{selection.attributes.B1} {selection.attributes.B2} {selection.attributes.B3}</p>
          <p>{selection.attributes.C1} {selection.attributes.C2} {selection.attributes.C3}</p>
        </li>

        {/* TODO: Improve Board Display Method */}

      </ul>
    </div>
  );
};

export default DisplaySelection;
