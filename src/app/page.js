"use client";
import TopNav from "@/components/TopNav/TopNav";
import "../styles/style.css";
import { Box, Typography } from "@mui/material";
import HiredCompanys from "@/components/hiredCompany/HiredCompanys";
import Home from "@/components/Home";
import TempletCarousel from "@/components/carousel/TempletCarousel";
import Editresume from "@/components/Editresume/Editresume";

export default function Parent() {
  return (
    <>
      <TopNav />
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          textAlign: "center",
          px: 2,
        }}
      >
        <Home />
        <Box
          sx={{
            py: 4,
            px: { xs: 2, md: 6 },
            width: "90%",
            textAlign: "left",
          }}
        >
          <Typography variant="h6" sx={{ mb: 2, fontWeight: 500 }}>
            Build a professional resume quickly and easily with our online
            resume builder. Choose from 25+ stylish templates to create a resume
            from scratch or polish up an existing one. Get expert guidance at
            every step to help you stand out.
          </Typography>

          <Typography variant="h6" sx={{ fontWeight: 500 }}>
            Use our AI-powered resume builder to get smart suggestions, edit
            your resume effortlessly, and customize modern, professional
            templates. Free users can easily create and download their resume as
            a TXT file.
          </Typography>
        </Box>
        <HiredCompanys />
        <TempletCarousel />
        <Editresume />
      </Box>
    </>
  );
}
