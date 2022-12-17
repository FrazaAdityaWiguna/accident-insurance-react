import { Button, Typography } from "@mui/material";
import { PlusCircle } from "react-feather";

export default function FieldUpload2({ handleChange }) {
  const handleUpload = (e) => {
    const reader = new FileReader();

    reader.onload = function () {
      handleChange(this.result, e.target.files[0]);
    };
    // Read the Files
    reader.readAsDataURL(e.target.files[0]);
  };

  return (
    <Button
      variant="outlined"
      component="label"
      onChange={(e) => handleUpload(e)}
      sx={{
        border: "1px solid #ccc",
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
  );
}
