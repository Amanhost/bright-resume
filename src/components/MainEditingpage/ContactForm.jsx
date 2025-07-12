"use client";
import {
  Box,
  TextField,
  Typography,
  Button,
  Grid,
  IconButton,
  Tooltip,
} from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

export default function ContactForm() {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: {
          xs: "column",
          lg: "row",
        },
        justifyContent: "space-between",
        alignItems: "flex-start",
        px: { xs: 2, md: 6 },
        py: 4,
        gap: 4,
      }}
    >
      {/* Left Form Section */}
      <Box sx={{ flex: 1 }}>
        <Typography variant="body2" color="primary" fontWeight="bold" mb={2}>
          ← Go Back
        </Typography>

        <Typography
          variant="h4"
          fontWeight="bold"
          sx={{ mb: 1, maxWidth: 500 }}
        >
          What’s the best way for employers to contact you?
        </Typography>
        <Typography variant="body1" color="text.secondary" mb={4}>
          We suggest including an email and phone number.
        </Typography>

        <Typography
          variant="caption"
          fontWeight="bold"
          color="text.secondary"
          sx={{ display: "block", mb: 1 }}
        >
          * indicates a required field
        </Typography>

        {/* Grid for form fields */}
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <TextField label="First Name" fullWidth />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField label="Surname" fullWidth />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField label="City" fullWidth />
          </Grid>
          <Grid item xs={12} md={3}>
            <TextField label="Country" fullWidth />
          </Grid>
          <Grid item xs={12} md={3}>
            <TextField label="PIN Code" fullWidth />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField label="Phone" fullWidth placeholder="+91 22 1234 5677" />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Email *"
              fullWidth
              placeholder="saanvipatel@sample.in"
            />
          </Grid>
        </Grid>

        {/* Optional Add-ons */}
        <Box mt={4} display="flex" alignItems="center" flexWrap="wrap" gap={1}>
          <Typography variant="subtitle1" fontWeight="bold">
            Add additional information to your resume
          </Typography>
          <Typography variant="body2" color="text.secondary">
            (optional)
          </Typography>
          <Tooltip title="You can include social links or licenses to stand out.">
            <IconButton size="small">
              <InfoOutlinedIcon fontSize="small" />
            </IconButton>
          </Tooltip>
        </Box>

        <Box mt={2} display="flex" gap={2} flexWrap="wrap">
          {["LinkedIn", "Website", "Driving licence"].map((label) => (
            <Button
              key={label}
              variant="outlined"
              sx={{
                borderRadius: "30px",
                px: 2.5,
                fontWeight: "bold",
              }}
            >
              {label} +
            </Button>
          ))}
        </Box>

        {/* Bottom Buttons */}
        <Box
          mt={5}
          display="flex"
          flexDirection={{ xs: "column", sm: "row" }}
          justifyContent="space-between"
          gap={2}
        >
          <Button
            variant="contained"
            sx={{
              bgcolor: "#1b73ba",
              borderRadius: "25px",
              fontWeight: 600,
              textTransform: "none",
              px: 4,
            }}
          >
            Optional: Personal details
          </Button>

          <Box
            display="flex"
            gap={2}
            flexDirection={{ xs: "column", sm: "row" }}
          >
            <Button
              variant="outlined"
              sx={{
                borderRadius: "25px",
                px: 4,
                textTransform: "none",
                fontWeight: 600,
              }}
            >
              Preview
            </Button>
            <Button variant="contained" className="gradient-button">
              Next: Work history
            </Button>
          </Box>
        </Box>
      </Box>

      {/* Right Preview Section */}
      <Box
        sx={{
          display: { xs: "none", lg: "block" },
          width: 300,
          flexShrink: 0,
        }}
      >
        <Typography
          variant="subtitle2"
          fontWeight="bold"
          gutterBottom
          textAlign="center"
        >
          Our Resume Builder delivers results †
        </Typography>
        <Box
          sx={{
            height: 30,
            backgroundColor: "#f2f2f2",
            borderRadius: 10,
            mb: 1,
          }}
        />
        <Box
          sx={{
            border: "1px solid #ccc",
            height: 380,
            backgroundColor: "#fff",
            backgroundImage: "url('/path/to/resume-preview.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            mb: 2,
          }}
        ></Box>
        <Typography variant="body2" textAlign="center">
          <Box
            component="a"
            href="#"
            sx={{
              textDecoration: "underline",
              color: "#1a4ecb",
              fontWeight: 600,
            }}
          >
            Change template
          </Box>
        </Typography>
        <Typography variant="caption" textAlign="center" mt={1} display="block">
          † The results are based on a study with over 1000 participants, among
          whom 287 used resume tools provided on our family sites.
        </Typography>
      </Box>
    </Box>
  );
}
