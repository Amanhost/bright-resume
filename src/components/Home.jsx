"use client";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { styled, keyframes } from "@mui/system";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Type from "./Type/Type";

import mainimg from "../../public/logo/mainimg.webp";
import logo2 from "../../public/logo/image2.webp";
import logo5 from "../../public/logo/image5.webp";
import homeanimation from "../../public/logo/homeanimations.svg";
import { useRouter } from "next/navigation";

const images = [mainimg, logo2, logo5];

const rotate360 = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(90deg); }
`;

const RotatingImage = styled("div")({
  animation: `${rotate360} 20s linear infinite`,
  maxWidth: "100%",
});

export default function Home() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  const router = useRouter();
  const handeClickopenTemplate = (url) => {
    router.push(url);
  };
  return (
    <Container
      maxWidth="xl"
      sx={{
        minHeight: "80vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid container spacing={6} alignItems="center">
        <Grid item xs={12} md={6} display="flex" justifyContent="center">
          <Box
            sx={{
              position: "relative",
              width: { xs: 240, sm: 300 },
              height: { xs: 300, sm: 360 },
              borderRadius: 4,
              display: "flex",
              gap: 5,
            }}
          >
            <Image
              src={homeanimation}
              alt="Background"
              width={300}
              height={250}
              style={{
                // objectFit: "cover",
                zIndex: 0,
                position: "absolute",
              }}
            />

            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 1 }}
                animate={{ opacity: 1, scale: 1.5 }}
                exit={{ opacity: 0, scale: 1.02 }}
                transition={{ duration: 0.8 }}
                style={{
                  width: "100%",
                  height: "100%",
                  position: "absolute",
                  top: 0,
                  left: 0,
                  zIndex: 2,
                }}
              >
                <motion.div
                  animate={{ rotateY: 360 }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                >
                  {images[index] && (
                    <Image
                      src={images[index]}
                      alt="Resume Preview"
                      width={450}
                      height={500}
                      style={{
                        maxWidth: "100%",
                        height: "100%",
                        objectFit: "contain",
                      }}
                    />
                  )}
                </motion.div>
              </motion.div>
            </AnimatePresence>

            <motion.div
              initial={{ opacity: 0.4, scale: 1 }}
              animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.05, 1] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{
                position: "absolute",
                bottom: -20,
                left: "50%",
                transform: "translateX(-50%)",
                width: 200,
                height: 40,
                background: "linear-gradient(to right, #11998e, #38ef7d)",
                borderRadius: "50%",
                filter: "blur(25px)",
                zIndex: 1,
              }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography
            variant="h3"
            fontWeight="bold"
            gutterBottom
            textAlign={{ xs: "center", md: "left" }}
          >
            The Best Online Resume Builder
          </Typography>
          <Typography
            variant="subtitle"
            color="text.secondary"
            paragraph
            textAlign={{ xs: "center", md: "left" }}
          >
            Easily create a resume for any job using our best-in-class resume
            builder platform.
          </Typography>

          <Typography
            variant="h5"
            color="#11998e"
            textAlign={{ xs: "center", md: "left" }}
          >
            <Type />
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              gap: 2,
              my: 3,
              justifyContent: { xs: "center", md: "flex-start" },
            }}
          >
            <Button
              variant="contained"
              className="gradient-button"
              size="large"
              onClick={() => handeClickopenTemplate("/template")}
              sx={{
                px: 4,
              }}
            >
              Create My Resume Now
            </Button>
            <Button
              variant="outlined"
              size="large"
              sx={{
                px: 4,
                borderColor: "#11998e",
                color: "#11998e",
              }}
            >
              Import Resume
            </Button>
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: 4,
              my: 4,
              justifyContent: { xs: "center", md: "flex-start" },
              flexWrap: "wrap",
            }}
          >
            <Box textAlign="center">
              <Typography variant="h5" color="#11998e">
                ↑ 38%
              </Typography>
              <Typography color="text.secondary">more interviews</Typography>
            </Box>
            <Box textAlign="center">
              <Typography variant="h5" color="#11998e">
                ↑ 23%
              </Typography>
              <Typography color="text.secondary">
                more likely to get a job offer
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{
              mt: 2,
              width: "100%",
              maxWidth: 500,
              overflow: "hidden",
              mx: { xs: "auto", md: 0 },
            }}
          ></Box>
        </Grid>
      </Grid>
    </Container>
  );
}
