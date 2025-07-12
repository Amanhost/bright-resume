'"use client";';
import { useResume } from "@/context/ResumeContext";
import { Box, TextField, Typography } from "@mui/material";

export default function HeadingStep() {
  const { formData, updateForm } = useResume();

  return (
    <Box
      display="grid"
      gap={3}
      gridTemplateColumns={{ xs: "1fr", md: "1fr 1fr 1fr" }}
    >
      <TextField
        label="First Name"
        value={formData.firstName}
        onChange={(e) => updateForm({ firstName: e.target.value })}
      />
      <TextField
        label="Surname"
        value={formData.lastName}
        onChange={(e) => updateForm({ lastName: e.target.value })}
      />
      <Box />
      <TextField
        label="City"
        value={formData.city}
        onChange={(e) => updateForm({ city: e.target.value })}
      />
      <TextField
        label="Country"
        value={formData.country}
        onChange={(e) => updateForm({ country: e.target.value })}
      />
      <TextField
        label="Pin Code"
        value={formData.pin}
        onChange={(e) => updateForm({ pin: e.target.value })}
      />
      <TextField
        label="Phone"
        value={formData.phone}
        onChange={(e) => updateForm({ phone: e.target.value })}
      />
      <TextField
        label="Email *"
        value={formData.email}
        onChange={(e) => updateForm({ email: e.target.value })}
      />
    </Box>
  );
}
