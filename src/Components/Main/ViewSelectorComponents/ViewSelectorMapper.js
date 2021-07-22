import React from "react";

const ViewSelectorMapper = ({ options, onChange, onSubmit }) => {
  console.log(options)
  return (
    <div>
      <form onSubmit={onSubmit}>
        <select name="selection" defaultValue="-- select a saved game --" onChange={onChange}>
          <option disabled>-- select a saved game --</option>
          {options.map(
            (option) =>
              ( <option key={option.id} value={option.id}>
                {option.attributes.Title}
                </option>)
          )}
        </select>
        <br /><br />
        <button type="submit" name="button" onSubmit={onSubmit}>Submit</button>
      </form>
    </div>
  );
};

export default ViewSelectorMapper;
