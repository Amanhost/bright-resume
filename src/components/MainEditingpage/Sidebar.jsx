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

        <List sx={{ position: "relative", pl: 0 }}>
          {steps.map((label, index) => (
            <ListItem
              key={label}
              sx={{
                p: 0,
                alignItems: "flex-start",
                position: "relative",
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  mr: 2,
                }}
              >
                <Box
                  sx={{
                    width: 28,
                    height: 28,
                    borderRadius: "50%",
                    bgcolor: index === currentStep ? "#f59523" : "transparent",
                    border: "2px solid white",
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "14px",
                    fontWeight: "bold",
                    zIndex: 2,
                  }}
                >
                  {index + 1}
                </Box>

                {index < steps.length - 1 && (
                  <Box
                    sx={{
                      width: "2px",
                      flex: 1,
                      mt: 0.5,
                      bgcolor: "white",
                      borderLeft: "2px dotted white",
                      minHeight: 32,
                    }}
                  />
                )}
              </Box>

              {/* Step label */}
              <ListItemText
                primary={
                  <Typography variant="body1" sx={{ color: "white", pt: 0.5 }}>
                    {label}
                  </Typography>
                }
              />
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
