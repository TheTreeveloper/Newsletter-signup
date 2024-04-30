import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default const FormValidation = () => {
  return (
    <div>
      <TextField
        error
        id="outlined-error"
        label="Error"
        defaultValue="Hello World"
      />
    </div>
  );
}
