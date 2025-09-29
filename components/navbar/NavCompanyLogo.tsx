import { Business } from "@mui/icons-material";
import { Stack, Typography } from "@mui/material";

export default function NavCompanyLogo() {
  return (
    <Stack direction="row" spacing={1} alignItems="center" sx={{ p: 4 }}>
      <Business fontSize="large" />
      <Typography variant="h6">HR Management</Typography>
    </Stack>
  );
}
