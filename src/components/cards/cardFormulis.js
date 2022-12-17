import { Box, Card, Typography } from "@mui/material";

export default function CardFormulir({ title, icon, bgColor }) {
  return (
    <Card sx={{ marginBottom: "20px" }}>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            marginRight: "20px",
            padding: "15px 20px",
            borderRadius: "5px",
            position: "relative",
            backgroundColor: bgColor,
          }}
        >
          {icon}
        </Box>
        <Typography sx={{ color: "#8c8b8b" }}>{title}</Typography>
      </Box>
    </Card>
  );
}
