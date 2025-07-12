"use client";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";

const HomeLogo = () => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <Box sx={{ mt: 1, ml: 13, cursor: "pointer", display: "flex" }}>
      <Image
        src={"/logo/homeanimations.svg"}
        alt={"logo"}
        width={30}
        height={30}
      />
      <Typography
        variant="h6"
        sx={{ fontWeight: "bold", color: "#11998e" }}
        onClick={handleBack}
      >
        Bright Resume
      </Typography>
    </Box>
  );
};

export default HomeLogo;
