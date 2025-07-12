"use client";
import Sidebar from "./Sidebar";
import ContactForm from "./ContactForm";
import { Box } from "@mui/material";
import { useResume } from "@/context/ResumeContext";

export default function MainEditingPage() {
  const { step } = useResume();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        minHeight: "100vh",
      }}
    >
      <Sidebar currentStep={step} />
      <ContactForm />
    </Box>
  );
}
