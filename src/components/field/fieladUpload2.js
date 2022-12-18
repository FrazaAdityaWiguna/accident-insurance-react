import { Button, Typography } from "@mui/material";
import { useState } from "react";
import { PlusCircle } from "react-feather";

export default function FieldUpload2({ handleChange }) {
  const [dataImg, setDataImg] = useState(null);

  const handleUpload = (e) => {
    setDataImg(e.target.files[0]);
    if (e.target.files[0].size <= 5000000) {
      const reader = new FileReader();

      reader.onload = function () {
        handleChange(this.result, e.target.files[0]);
      };
      // Read the Files
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  return (
    <>
      <Button
        variant="outlined"
        component="label"
        onChange={(e) => handleUpload(e)}
        sx={{
          border: `1px solid ${dataImg?.size > 5000000 ? "#ff0000" : "#ccc"}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100px",
          textTransform: "capitalize",
          mt: 4,
        }}
      >
        <input hidden accept="image/*" type="file" />
        <PlusCircle color="#5f52eb" size={35} />
        <Typography color="#8c8b8b" ml={2}>
          Tambah Foto
        </Typography>
      </Button>

      {dataImg?.size > 5000000 && (
        <Typography
          mt="5px"
          sx={{ fontWeight: "200", fontSize: "14px", color: "#ff0000" }}
        >
          Max image hanya 5 mb
        </Typography>
      )}
    </>
  );
}
