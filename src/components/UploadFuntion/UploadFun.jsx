"use client";
import { Card, CardContent, Typography, Button, Box } from "@mui/material";
import { useState } from "react";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import DescriptionIcon from "@mui/icons-material/Description";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import HomeLogo from "../HomeLogo/HomeLogo";
import { useRouter } from "next/navigation";

const UploadFun = ({ setSelectedPage }) => {
  const [selectedOption, setSelectedOption] = useState(null); // ✅ correct
  const router = useRouter();
  const habdleRoute = () => {
    if (selectedOption === "upload") {
      router.push("/upload");
    } else if (selectedOption === "scratch") {
      router.push("/rbs");
    }
  };

  return (
    <>
      <Box sx={{ mt: 3, ml: 4 }}>
        <HomeLogo />
      </Box>
      <Box sx={{ px: 2, py: 6, mx: "auto", textAlign: "center" }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Are you uploading an existing resume?
        </Typography>
        <Typography variant="subtitle1" mb={6}>
          Just review, edit, and update it with new information
        </Typography>

        {/* Updated Flex Layout with Responsive Flex Direction */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 4, // Gap between cards
            flexWrap: "wrap", // Ensures responsiveness
            flexDirection: { xs: "column", md: "row" }, // Column on small screens, row on medium screens and above
          }}
        >
          {/* Upload Resume Option */}
          <Card
            onClick={() => setSelectedOption("upload")}
            sx={{
              cursor: "pointer",
              border:
                selectedOption === "upload"
                  ? "3px solid #00A651"
                  : "1px solid #ccc",
              borderRadius: 3,
              position: "relative",
              p: 3,
              width: "100%", // Full width on small screens
              maxWidth: 500, // Limit width on larger screens
              transition: "0.3s",
              "&:hover": {
                boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
              },
            }}
          >
            {/* Recommended Tag */}
            {selectedOption !== "scratch" && (
              <Box
                sx={{
                  position: "relative",
                  top: -25,
                  left: "50%",
                  transform: "translateX(-50%)",
                  bgcolor: "#00A651",
                  color: "white",
                  px: 2,
                  py: 0.8,
                  borderRadius: 20,
                  fontSize: 12,
                  fontWeight: "bold",
                }}
              >
                Recommended option to save you time
              </Box>
            )}
            <CardContent>
              <CloudUploadIcon sx={{ fontSize: 50, color: "#FF7A59", mb: 2 }} />
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                Yes, upload my resume
              </Typography>
              <Typography variant="body2" color="text.secondary">
                We'll give you expert guidance to fill out your info and enhance
                your resume, from start to finish
              </Typography>
            </CardContent>
          </Card>

          {/* Start From Scratch Option */}
          <Card
            onClick={() => setSelectedOption("scratch")}
            sx={{
              cursor: "pointer",
              border:
                selectedOption === "scratch"
                  ? "3px solid #0070F3"
                  : "1px solid #ccc",
              borderRadius: 3,
              p: 3,
              width: "100%", // Full width on small screens
              maxWidth: 500, // Limit width on larger screens
              transition: "0.3s",
              "&:hover": {
                boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
              },
            }}
          >
            <CardContent>
              <DescriptionIcon sx={{ fontSize: 50, color: "#FF7A59", mb: 2 }} />
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                No, start from scratch
              </Typography>
              <Typography variant="body2" color="text.secondary">
                We'll guide you through the whole process so your skills can
                shine
              </Typography>
            </CardContent>
          </Card>
        </Box>

        {/* Navigation Buttons */}
        <Box sx={{ display: "flex", justifyContent: "space-around", mt: 6 }}>
          <Button
            variant="outlined"
            startIcon={<ArrowBackIcon />}
            onClick={() => setSelectedPage("select-resume")}
            sx={{
              borderRadius: 10,
              px: 4,
              py: 1.5,
              fontWeight: "bold",
              fontSize: 16,
            }}
          >
            Back
          </Button>
          {/* <Button
          variant="contained"
          sx={{
            borderRadius: 10,
            bgcolor: "#D10071",
            px: 6,
            py: 1.5,
            fontWeight: "bold",
            fontSize: 16,
            "&:hover": {
              bgcolor: "#b80061",
            },
          }}
          disabled={!selectedOption}
        >
          Next
        </Button> */}

          <Button
            variant="contained"
            className={selectedOption && "gradient-button"}
            sx={{
              borderRadius: 10,
              bgcolor: "#D10071",
              px: 6,
              py: 1.5,
              fontWeight: "bold",
              fontSize: 16,
              "&:hover": {
                bgcolor: "#b80061",
              },
            }}
            onClick={habdleRoute}
            disabled={!selectedOption}
          >
            Next
          </Button>
        </Box>

        {/* Footer Links */}
        <Box sx={{ mt: 8 }}>
          <Typography variant="caption" color="text.secondary">
            TERMS & CONDITIONS &nbsp; | &nbsp; PRIVACY POLICY &nbsp; | &nbsp;
            ACCESSIBILITY &nbsp; | &nbsp; CONTACT US
          </Typography>
          <Typography
            variant="caption"
            display="block"
            color="text.secondary"
            mt={2}
          >
            © 2025, Bold Limited. All rights reserved.
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default UploadFun;
