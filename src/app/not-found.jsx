"use client";

import Link from "next/link";
import { Button } from "@mui/material";
import { useEffect } from "react";

export default function NotFound() {
  useEffect(() => {
    console.warn("404 - Page not found");
  }, []);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>404 - Page Not Found</h1>
      <p style={styles.message}>
        Sorry, the page you are looking for doesn't exist.
      </p>
      <Link href="/" passHref>
        <Button variant="contained" color="primary">
          Go Home
        </Button>
      </Link>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    padding: "100px 20px",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: "2.5rem",
    fontWeight: "bold",
  },
  message: {
    fontSize: "1.2rem",
    color: "#666",
  },
};
