import React, { useState } from "react";
import { ViewGame } from "./ViewGame.js"
import '../../Styling/ViewSelectorMapper.css'

const ViewSelectorMapper = ({ options }) => {
  const [submitting, setSubmitting] = useState(false);
  const [tempGameID, setTempGameID] = useState(null);
  const [gameID, setGameID] = useState(null);

  const handleSubmit = e => {
    e.preventDefault();
    if (tempGameID == null) {
      alert("Pick a game to view.");
    }
    else {
      setGameID(tempGameID);
      setSubmitting(true);
    }
  }

  const handleChange = e => {
    setTempGameID(e.target.value);
  }

  return (
    <div id="select">
      <form onSubmit={handleSubmit} id="form">
        <fieldset>
          <select defaultValue="-- select a saved game --" name="game" onChange={handleChange}>
            <option key="default" disabled>-- select a saved game --</option>
            {options.length && options.map(
              (option, index) =>
                ( <option key={index} value={option.id}>
                  {option.attributes.Title}
                  </option>)
            )}
          </select>
          <button id="submit">Submit</button>
        </fieldset>
      </form>
      {submitting &&
        <div>
          <ViewGame id={gameID} />
        </div>
      }
    </div>
  );
};

export {ViewSelectorMapper};
