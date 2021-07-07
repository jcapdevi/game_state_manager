import React from "react";

const ViewSelectorMapper = ({ options }) => {
  return (
    <div>
      <form>
        <select defaultValue="-- select a saved game --">
          <option disabled>-- select a saved game --</option>
          {options.map(
            (option) =>
              ( <option key={option.id} value={option}>
                {option.attributes.Title}
                </option>)
          )}
        </select>
        <br /><br />
        <button type="submit" name="button">Submit</button>
      </form>
    </div>
  );
};

export {ViewSelectorMapper};
