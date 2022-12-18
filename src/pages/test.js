import { Button, TextField } from "@mui/material";
import React, { useRef, useState } from "react";

const Test = () => {
  const formRef = useRef(null);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [emptyFields, setEmptyFields] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    username: "",
  });

  const handleInputChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

    if (!e.target.value) {
      setEmptyFields(emptyFields + 1);
    } else {
      setEmptyFields(emptyFields - 1);
    }
  };

  return (
    <>
      <form ref={formRef} style={{ display: "flex", flexDirection: "column" }}>
        <TextField
          id="outlined-multiline-flexible"
          label="Nama: "
          multiline
          maxRows={4}
          variant="standard"
          value={formData.name}
          sx={{ color: "#5f52eb", mb: "10px" }}
          placeholder="Masukan Nama: "
          name="name"
          onChange={(e) => handleInputChange(e)}
          required
        />
        <TextField
          id="outlined-multiline-flexible"
          label="Username: "
          multiline
          maxRows={4}
          variant="standard"
          value={formData.username}
          sx={{ color: "#5f52eb", mb: "10px" }}
          placeholder="Masukan Username: "
          name="username"
          onChange={(e) => handleInputChange(e)}
          required
        />

        <br />

        <Button
          type="submit"
          variant="contained"
          disabled={emptyFields > 0}
          sx={{
            backgroundColor: "#0fba09",
            width: "100%",
            m: "20px 0",
            textTransform: "capitalize",
          }}
        >
          Simpan
        </Button>
      </form>
    </>
  );
};

export default Test;
