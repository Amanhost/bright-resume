"use client";
import { Box, Button, Typography, Stack } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import HomeLogo from "../HomeLogo/HomeLogo";

const BuildResume = () => {
  const router = useRouter();

  const handleExperience = (url) => {
    router.push(url); // Go to the previous page
  };
  return (
    <>
      <HomeLogo />

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "center",
          px: 15,
          minHeight: "90vh",
          // backgroundColor: "#fff",
        }}
      >
        {/* Left Section - Text */}
        <Box flex={1} mb={{ xs: 4, md: 0 }}>
          <Typography variant="h3" fontWeight="bold" mb={4}>
            Just three simple steps
          </Typography>

          <Stack spacing={4}>
            {["Select", "Build", "Customize"].map((action, index) => (
              <Box key={index} display="flex" alignItems="flex-start" gap={2}>
                <Typography
                  variant="h6"
                  color="primary"
                  sx={{
                    width: 30,
                    height: 30,
                    borderRadius: "50%",
                    bgcolor: "#EEF3F9",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: "bold",
                  }}
                >
                  {index + 1}
                </Typography>
                <Typography variant="body1">
                  <b>{action}</b>{" "}
                  {index === 0 &&
                    "a template from our library of professional designs"}
                  {index === 1 &&
                    "your resume with our industry-specific bullet points"}
                  {index === 2 &&
                    "the details and wrap it up. You’re ready to send!"}
                </Typography>
              </Box>
            ))}
          </Stack>
        </Box>

        <Box
          flex={1}
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Image
            src="/logo/sketchTemp.png"
            alt="Resume Animation"
            width={300}
            height={300}
            priority
          />
          <Button
            variant="contained"
            className="gradient-button"
            onClick={() => handleExperience("/template/experience-level")}
            sx={{
              mt: 4,
              borderRadius: "50px",
              fontWeight: "bold",
              px: 5,
              py: 1.5,
              textTransform: "none",
              fontSize: "1.2rem",
            }}
          >
            Start Building
          </Button>
        </Box>
      </Box>
    </>
  );
};
export default BuildResume;
