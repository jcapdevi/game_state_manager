import React, { useState } from "react";
import { ViewGame } from "./ViewGame.js"

const ViewSelectorMapper = ({ options }) => {
  const [submitting, setSubmitting] = useState(false);
  const [gameID, setGameID] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (gameID == null) {
      alert("Pick a game to view.");
    }
    else {
      setSubmitting(true);
    }
  }

  const handleChange = e => {
    setGameID(e.target.value);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
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
          <br /><br />
          <button>Submit</button>
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
