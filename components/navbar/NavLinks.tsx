import { Dashboard, People, Work } from "@mui/icons-material";
import { Link, Stack, Typography } from "@mui/material";
import EventIcon from "@mui/icons-material/Event";
import NextLink from "next/link";

export default function NavLinks() {
  return (
    <Stack spacing={3} sx={{ flexGrow: 1, p: 4 }}>
      <Stack direction="row" spacing={1} alignItems="center">
        <Dashboard fontSize="small" />
        <Link component={NextLink} href="/dashboard">
          <Typography variant="body1">Dashboard</Typography>
        </Link>
      </Stack>

      <Stack direction="row" spacing={1} alignItems="center">
        <People fontSize="small" />
        <Link component={NextLink} href="/employees">
          <Typography variant="body1">Employees</Typography>
        </Link>
      </Stack>

      <Stack direction="row" spacing={1} alignItems="center">
        <Work fontSize="small" />
        <Link component={NextLink} href="/job-applications">
          <Typography variant="body1">Job Applications</Typography>
        </Link>
      </Stack>

      <Stack direction="row" spacing={1} alignItems="center">
        <EventIcon fontSize="small" />
        <Link component={NextLink} href="/leave-management">
          <Typography variant="body1">Leave Management</Typography>
        </Link>
      </Stack>
    </Stack>
  );
}
