import React from "react";

const FormField = ({ label, id, handleChange, handleBlur, value, error }) => {
  return (
    <div className="form-group">
      <label htmlFor={id}>{label}:</label>
      <input
        className="input"
        type="text"
        id={id}
        onChange={handleChange}
        onBlur={handleBlur}
        value={value}
      />
      {error && <div style={{ color: "red" }}>{error}</div>}
    </div>
  );
};

export default FormField;
