"use client";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

import amazone from "../../../public/logo/amazone.jpg";
import google from "../../../public/logo/google2.png";
import tesla from "../../../public/logo/tesla2.webp";
import facebook from "../../../public/logo/Facebook.png";
import jpmorgan from "../../../public/logo/JPMorgan.png";
import deloitte from "../../../public/logo/Deloitte.png";

const companies = [
  { name: "Google", src: google },
  { name: "Amazon", src: amazone },
  { name: "Tesla", src: tesla },
  { name: "Facebook", src: facebook },
  { name: "JPMorgan", src: jpmorgan },
  { name: "Deloitte", src: deloitte },
];

export default function HiredCompanys() {
  return (
    <Box
      sx={{
        bgcolor: "black",
        color: "white",
        py: 8,
        px: 4,
        borderRadius: 8,
        textAlign: "center",
      }}
    >
      <Typography variant="h5" sx={{ mb: 6 }}>
        Join thousands of Bright users who’ve been hired by top companies across
        the globe.
      </Typography>

      {/* Horizontal scroll container */}
      <marquee direction="left" height="100px">
        <Box
          sx={{
            display: "flex",
            overflowX: "auto",
            gap: 4,
            px: 2,
            scrollSnapType: "x mandatory",
            "&::-webkit-scrollbar": { display: "none" },
          }}
        >
          {companies.map(({ name, src }) => (
            <Box
              key={name}
              sx={{
                flex: "0 0 auto",
                scrollSnapAlign: "start",
                textAlign: "center",
                width: { xs: 120, sm: 150, md: 180 },
              }}
            >
              <Image
                src={src}
                alt={name}
                width={150}
                height={80}
                style={{
                  objectFit: "contain",
                  width: "100%",
                  height: "auto",
                }}
              />
            </Box>
          ))}
        </Box>
      </marquee>
    </Box>
  );
}
