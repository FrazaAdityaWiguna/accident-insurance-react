import { Box, Button, Typography } from "@mui/material";
import { PlusCircle, Trash2 } from "react-feather";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

export default function FieldUpload({
  title,
  content,
  info,
  handleChange,
  contentImg,
}) {
  const handleUpload = async (e) => {
    const reader = new FileReader();

    reader.onload = function () {
      handleChange(this.result);
    };
    // Read the Files
    reader.readAsDataURL(e.target.files[0]);
  };
  return (
    <Box>
      <Typography className="color-primary" mb="10px">
        {title}
      </Typography>
      {contentImg ? (
        <Box
          sx={{
            position: "relative",
            maxHeight: "fit-content",
            maxWidth: "fit-content",
            overflow: "hidden",
          }}
        >
          <Zoom>
            <img
              src={contentImg}
              alt=""
              style={{ maxHeight: "300px", maxWidth: "100%" }}
            />
          </Zoom>
          <Box
            sx={{
              position: "absolute",
              bottom: "3px",
              right: 0,
              p: { xs: "10px", sm: "20px" },
              borderTopLeftRadius: "10px",
              backgroundColor: "rgba(250, 2, 23, 0.4)",
              cursor: "pointer",
            }}
            onClick={() => handleChange(null)}
          >
            <Trash2 color="#fff" />
          </Box>
        </Box>
      ) : (
        <Button
          variant="outlined"
          component="label"
          onChange={(e) => handleUpload(e)}
          sx={{
            border: "1px solid #eee",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            minHeight: "150px",
            textTransform: "capitalize",
          }}
        >
          <input
            hidden
            accept="image/*"
            type="file"
            sx={{ display: "none" }}
            required
          />
          <PlusCircle color="#5f52eb" size={35} />
          <Typography color="#8c8b8b" mt="10px">
            {content}
          </Typography>
        </Button>
      )}
      <Typography
        className="color-primary"
        mt="5px"
        sx={{ fontWeight: "200", fontSize: "14px" }}
      >
        {info}
      </Typography>
    </Box>
  );
}
