import { Box, Button, Paper, Typography } from "@mui/material";
import React from "react";
import template from "../../../public/logo/temp7.png";
import Image from "next/image";
import { useRouter } from "next/navigation";

const TemplatePopover = ({ setHovered }) => {
  const router = useRouter();
  const handeClickopenTemplate = (url) => {
    router.push(url);
  };
  return (
    <Box
      onMouseEnter={() => setHovered("Resume Templates")}
      onMouseLeave={() => setHovered(null)}
      sx={{
        position: "absolute",
        top: "100%",
        left: "50%",
        transform: "translateX(-50%)",
        mt: 1,
        zIndex: 1200,
        backgroundImage: "url('/logo/bg4.png')",
        display: "inline-block",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          background: "linear-gradient(to bottom right, #fff, #f9f9f9)",
          minWidth: 900,
          maxWidth: "90vw",
          p: 3,
          pointerEvents: "auto",
        }}
      >
        <Box>
          <Typography variant="h6" sx={{ mb: 1 }}>
            Top Resume Templates
          </Typography>
          <Typography variant="body2" sx={{ mb: 2, maxWidth: 400 }}>
            Browse our top-rated resume templates tailored for every profession
            and career stage.
          </Typography>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
            {[
              "Functional Resume Templates",
              "Combination Resume Templates",
              "General Resume Templates",
              "Hybrid Resume Templates",
              "Skills-Based Resume Templates",
              "Traditional Resume Templates",
              "Basic and Simple Resume Templates",
              "Modern Resume Templates",
              "Reverse-Chronological Resume Templates",
              "Professional Resume Templates",
              "Google Docs Resume Templates",
              "Word Resume Templates",
            ].map((template) => (
              <Typography
                key={template}
                variant="body2"
                sx={{ width: "45%", cursor: "pointer" }}
              >
                {template}
              </Typography>
            ))}
          </Box>
        </Box>

        {/* Right Section */}
        <Box sx={{ textAlign: "center" }}>
          <Image
            src={template}
            alt="Templates"
            style={{ width: 300, height: "auto", marginBottom: 12 }}
          />

          <Button
            className="gradient-button"
            variant="contained"
            size="small"
            onClick={() => handeClickopenTemplate("/template")}
            sx={{
              color: "#fff",
              borderRadius: 3,
              textTransform: "none",
              px: 3,
            }}
          >
            Create My Resume
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default TemplatePopover;
