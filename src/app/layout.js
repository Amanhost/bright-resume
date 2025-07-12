import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@mui/material";
import "@mui/joy/styles"; // for Joy UI
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ResumeProvider } from "@/context/ResumeContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Resume Builder",
  description: "Create professional resumes in minutes.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable}`}
        style={{ overflow: "hidden" }}
      >
        {/* Background layer */}
        <div
          style={{
            position: "fixed",
            inset: 0.5,
            opacity: 0.5,
            zIndex: -1,
            backgroundImage: "url('/logo/bg4.png')",
            backgroundSize: "auto",
            backgroundRepeat: "repeat", // Repeats the background image across the screen
            backgroundAttachment: "fixed", // Keeps the background fixed while scrolling
          }}
        />
        s
        <ResumeProvider>
          <div style={{ position: "relative", zIndex: 10 }}>{children}</div>
        </ResumeProvider>
      </body>
    </html>
  );
}
