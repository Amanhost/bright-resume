import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  useTheme,
  useMediaQuery,
  Paper,
} from "@mui/material";
import TemplatePopover from "./TemplatePopover";
import { useRouter } from "next/navigation";
import HomeLogo from "../HomeLogo/HomeLogo";

const navItems = [
  "Bright Resume App",
  "Resume Examples",
  "Resume Templates",
  "Bright Cover Letter",
  "Career Center",
  "My Account",
];

const TopNav = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [hovered, setHovered] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const toggleDrawer = () => setDrawerOpen(!drawerOpen);

  const router = useRouter();
  const handeClickopenTemplate = (url) => {
    router.push(url);
  };

  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{ bgcolor: "#fff", color: "#000", boxShadow: 1 }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <HomeLogo />

        {!isMobile ? (
          <Box sx={{ display: "flex", gap: 4, alignItems: "center" }}>
            {navItems.map((item) => (
              <Box
                key={item}
                onMouseEnter={() => setHovered(item)}
                onMouseLeave={() => setHovered(null)}
                sx={{
                  position: "relative",
                  cursor: "pointer",
                }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    borderBottom:
                      hovered === item
                        ? "2px solid #11998e"
                        : "2px solid transparent",
                    pb: 0.5,
                    transition: "border 0.3s",
                  }}
                >
                  {item}
                </Typography>

                {/* Dropdown for Resume Templates */}
                {item === "Resume Templates" &&
                  hovered === "Resume Templates" && (
                    <TemplatePopover setHovered={setHovered} />
                  )}
              </Box>
            ))}

            <Button
              onClick={() => handeClickopenTemplate("/template")}
              variant="outlined"
              sx={{
                borderColor: "#11998e",
                color: "#11998e",
                fontWeight: "bold",
                borderRadius: 3,
                textTransform: "none",
                px: 3,
                "&:hover": {
                  background: "linear-gradient(to right, #11998e, #38ef7d)",
                  borderColor: "transparent",
                  color: "#fff",
                },
              }}
            >
              Generate My Resume
            </Button>
          </Box>
        ) : (
          <>
            <IconButton onClick={toggleDrawer} edge="end">
              ☰
            </IconButton>
            <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer}>
              <Box
                sx={{
                  width: 250,
                  p: 2,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      mb: 2,
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{ fontWeight: "bold", color: "#11998e" }}
                    >
                      Menu
                    </Typography>
                    <IconButton onClick={toggleDrawer}>✕</IconButton>
                  </Box>
                  <List>
                    {navItems.map((text) => (
                      <ListItem key={text} disablePadding>
                        <Button
                          fullWidth
                          onClick={toggleDrawer}
                          sx={{
                            justifyContent: "flex-start",
                            textTransform: "none",
                            color: "black",
                            padding: "12px 16px",
                          }}
                        >
                          {text}
                        </Button>
                      </ListItem>
                    ))}
                  </List>
                </Box>
                <Button
                  className="gradient-button"
                  onClick={() => handeClickopenTemplate("/template")}
                  variant="contained"
                  sx={{
                    mt: 2,
                    color: "#fff",
                    fontWeight: "bold",
                    borderRadius: 3,
                    textTransform: "none",
                    px: 3,
                  }}
                >
                  Generate My Resume
                </Button>
              </Box>
            </Drawer>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default TopNav;
