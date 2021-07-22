import React, { useReducer, useState } from "react";

const formReducer = (state, e) => {
  return {
    ...state,
    [e.name]: e.value
  }
}

const ViewSelectorMapper = ({ options }) => {
  const [formData, setFormData] = useReducer(formReducer, {})
  const [submitting, setSubmitting] = useState(false);
  const handleSubmit = e => {
    e.preventDefault();
    setSubmitting(true);
  }

  const handleChange = e => {
    setFormData({
      value: e.target.value,
    });
  }

  return (
    <div>
      {submitting &&
        <div>
          You requested the following game:
          <ul>
            {Object.entries(formData).map(([name, value]) => (
              <li key={name}><strong>{name}</strong>:{value.toString()}</li>
            ))}
          </ul>
        </div>
      }
      <form onSubmit={handleSubmit}>
        <fieldset>
          <select defaultValue="-- select a saved game --" name="gameInput" onChange={handleChange}>
            <option disabled>-- select a saved game --</option>
            {options.map(
              (option) =>
                ( <option key={option.id} value={option.id}>
                  {option.attributes.Title}
                  </option>)
            )}
          </select>
          <br /><br />
          <button>Submit</button>
        </fieldset>
      </form>
    </div>
  );
};

export {ViewSelectorMapper};
