import React from "react";

const DisplaySelection = ({ selection }) => {
  console.log('selection', selection)
  return (
    <div>
      <h3>Title: {selection.attributes.Title}</h3>
      <ul>
        <li>Template: {selection.attributes.Template}</li>
        <li>Player X: {selection.attributes.Player_x}</li>
        <li>Player O: {selection.attributes.Player_y}</li>
        <li>Board: {selection.attributes.board}</li>
      </ul>
    </div>
  );
};

export default DisplaySelection;
