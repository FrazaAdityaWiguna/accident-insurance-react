import { Box, Typography } from "@mui/material";

export default function BoxDesc({ title, content }) {
  return (
    <>
      <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" } }}>
        <Typography
          className="color-primary"
          sx={{ minWidth: 150, fontWeight: "bold", mr: "30px" }}
        >
          {title}
        </Typography>
        <Typography sx={{ color: "#8c8b8b" }}>{content}</Typography>
      </Box>
    </>
  );
}
