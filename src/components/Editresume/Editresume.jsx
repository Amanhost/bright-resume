"use client";

import { Box, Typography } from "@mui/material";
import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";

export default function EditResume() {
  const { quill, quillRef } = useQuill();

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h5" mb={2}>
        Edit Your Resume
      </Typography>
      <Box
        ref={quillRef}
        sx={{
          height: "400px",
          backgroundColor: "white",
          borderRadius: 2,
          overflow: "hidden",
        }}
      />
    </Box>
  );
}
