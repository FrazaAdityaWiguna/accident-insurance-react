import { Box } from "@mui/material";
import { ArrowLeft } from "react-feather";
import { useNavigate } from "react-router-dom";

export default function BackHeader({ title, prevPage }) {
  const navigate = useNavigate();
  return (
    <header>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          padding: "30px 0",
          cursor: "pointer",
        }}
        className="color-primary"
        onClick={() => {
          navigate(prevPage);
        }}
      >
        <ArrowLeft color="#1103a6" />
        <Box sx={{ marginLeft: "10px", fontWeight: "bold" }}>{title}</Box>
      </Box>
    </header>
  );
}
