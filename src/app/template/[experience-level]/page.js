"use client";
import React from "react";
import HomeLogo from "@/components/HomeLogo/HomeLogo";
import { Box, Typography, Button, Stack } from "@mui/material";
import { InfoOutline } from "@mui/icons-material";
import { useRouter } from "next/navigation";

const ExperienceLevel = () => {
  const experienceOptions = [
    "No Experience",
    "Less Than 3 Years",
    "3-5 Years",
    "5-10 Years",
    "10+ Years",
  ];
  const router = useRouter();

  const handleExperience = (url) => {
    router.push(url); // Go to the previous page
  };
  return (
    <div>
      <Box sx={{ mt: 3, ml: 4 }}>
        <HomeLogo />
      </Box>
      {/* <BuildResume /> */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "90vh",
          // px: 3,
          textAlign: "center",
        }}
      >
        {/* Title and Subtitle */}
        <Typography variant="h4" fontWeight="bold" mb={2}>
          How long have you been working?{" "}
          {/* <InfoOutline
            sx={{
              fontSize: 24,
              verticalAlign: "middle",
              color: "primary.main",
              ml: 1,
            }}
          /> */}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" mb={5}>
          We'll find the best templates for your experience level.
        </Typography>

        {/* Buttons */}
        <Stack
          direction="row"
          spacing={3}
          flexWrap="wrap"
          justifyContent="center"
          alignItems="center"
          gap={2}
        >
          {experienceOptions.map((option, index) => (
            <Button
              key={index}
              variant="outlined"
              onClick={() =>
                handleExperience("/template/experience-level/select-template")
              }
              sx={{
                borderColor: "#11998e",
                color: "#11998e",
                fontWeight: "bold",
                borderRadius: 3,
                textTransform: "none",
                px: 3,
                "&:hover": {
                  background: "linear-gradient(to right, #11998e, #38ef7d)",
                  borderColor: "transparent",
                  color: "#fff",
                },
              }}
            >
              {option}
            </Button>
          ))}
        </Stack>
      </Box>
    </div>
  );
};

export default ExperienceLevel;
