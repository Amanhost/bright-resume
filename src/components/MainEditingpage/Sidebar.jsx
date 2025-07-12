// components/Sidebar.js
"use client";
import React from "react";
import {
  Box,
  Typography,
  LinearProgress,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import HomeLogo from "../HomeLogo/HomeLogo";

const steps = [
  "Heading",
  "Work history",
  "Education",
  "Skills",
  "Summary",
  "Finalize",
];

export default function Sidebar({ currentStep = 0 }) {
  return (
    <Box
      //   className="gradient-button"
      sx={{
        width: 280,
        bgcolor: "#103478",
        color: "white",
        p: 3,
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Box>
        <HomeLogo />
        {/* <Typography variant="h6" sx={{ mb: 4, color: "#B95AD8" }}> */}
        {/* </Typography> */}
        <List>
          {steps.map((label, index) => (
            <ListItem key={label} sx={{ p: "6px 0" }}>
              <Box
                sx={{
                  width: 24,
                  height: 24,
                  borderRadius: "50%",
                  bgcolor: index === currentStep ? "#f59523" : "transparent",
                  border: "2px solid white",
                  color: "white",
                  textAlign: "center",
                  fontSize: "14px",
                  fontWeight: "bold",
                  mr: 2,
                  lineHeight: "20px",
                }}
              >
                {index + 1}
              </Box>
              <ListItemText primary={label} />
            </ListItem>
          ))}
        </List>
      </Box>
      <Box>
        <Typography variant="caption" sx={{ mb: 1, display: "block" }}>
          RESUME COMPLETENESS:
        </Typography>
        <LinearProgress
          variant="determinate"
          value={(currentStep / steps.length) * 100}
        />
        <Box sx={{ mt: 4, fontSize: 12, color: "#36b14a" }}>
          <div>Terms & Conditions</div>
          <div>Privacy Policy</div>
          <div>Accessibility</div>
          <div>Contact Us</div>
        </Box>
        <Typography variant="caption" sx={{ mt: 3, display: "block" }}>
          © 2025, Bold Limited. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
}
