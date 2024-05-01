import React, { useRef, useState } from "react";
import "./search.css";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export function Search() {
  const inputValue = useRef(null);
  const [error, setError] = useState("");
  const handleChange = (event) => {
    console.log(event.target.value);
  };
  const handleError = () => {
    if (inputValue.current.value === "") {
      setError("Valid email required");
      console.log(error);
    } else {
      setError("");
    }
  };
  return (
    <div className="form-container">
      <div className="form">
        <label htmlFor="email" className="email-label">
          Email Address
        </label>
        <input
          id="email"
          type="text"
          placeholder="email@company.com"
          ref={inputValue}
          onChange={handleChange}
        />
        <Button variant="contained" onClick={handleError}>
          Subscribe to monthly newsletter
        </Button>
      </div>
      <p className="error">{error}</p>
    </div>
  );
}
