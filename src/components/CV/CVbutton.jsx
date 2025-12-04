import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CV from "./Aggelos_Kolitsis_Resume_2025.pdf";


export default function DownloadCV() {
  return (
    <Box sx={{ textAlign: "center", mt: 4 }}>
      <Button
        variant="contained"
        sx={{
          backgroundColor: "#9DB2BF",
          color: "#27374D",
          fontWeight: "bold",
          fontSize: "1rem",
          '&:hover': { backgroundColor: "#DDE6ED" },
        }}
        href={CV}
        download = "Aggelos Kolitsis CV"
      >
        Download My CV
      </Button>
    </Box>
  );
}
