"use client";
import React from "react";
import { Box, Typography, Card, Button } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import HomeLogo from "../HomeLogo/HomeLogo";

const templates = [
  { src: "/logo/temp1.png", alt: "Resume 1" },
  { src: "/logo/temp2.png", alt: "Resume 2" },
  { src: "/logo/temp4.png", alt: "Resume 4" },
  { src: "/logo/temp5.png", alt: "Resume 5" },
  { src: "/logo/temp6.png", alt: "Resume 6" },
  { src: "/logo/temp7.png", alt: "Resume 7" },
  { src: "/logo/temp8.png", alt: "Resume 8" },
  { src: "/logo/temp9.png", alt: "Resume 9" },
];

const TempletCarousel = () => {
  return (
    <Box
      sx={{
        px: { xs: 2, md: 6 },
        py: 4,
        width: "95%",
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <HomeLogo />

      <Typography
        variant="h5"
        sx={{ mb: 3, fontWeight: "bold", textAlign: "center" }}
      >
        Explore Resume Templates
      </Typography>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={16}
        slidesPerView={1.2}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        breakpoints={{
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        style={{ paddingBottom: "40px" }}
      >
        {templates.map((template, index) => (
          <SwiperSlide key={index}>
            <Card
              sx={{
                boxShadow: 3,
                overflow: "hidden",
                bgcolor: "#fff",
                maxWidth: 350,
                mx: "auto",
                boxShadow: 3,
                overflow: "hidden",
                p: 1,
                background:
                  "linear-gradient(135deg, rgba(243, 147, 30, 0.3), rgba(135, 206, 250, 0.3))",
              }}
            >
              <Box sx={{ position: "relative", aspectRatio: "3/4" }}>
                <Image src={template.src} alt={template.alt} fill style={{}} />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  alignItems: "center",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                  gap: 1,
                  pt: 2,
                }}
              >
                <Typography variant="subtitle1" color="green" fontWeight={600}>
                  Free
                </Typography>
                <Button
                  variant="outlined"
                  sx={{
                    borderColor: "#11998e",
                    color: "#11998e",
                    fontWeight: "bold",
                    textTransform: "none",
                    px: 3,
                    "&:hover": {
                      background: "linear-gradient(to right, #11998e, #38ef7d)",
                      borderColor: "#11998e",
                      color: "#fff",
                    },
                  }}
                >
                  Use This Template
                </Button>
              </Box>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default TempletCarousel;
