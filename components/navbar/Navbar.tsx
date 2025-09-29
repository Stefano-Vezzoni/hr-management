import { Stack, Divider } from "@mui/material";
import NavLinks from "./NavLinks";
import NavUserCard from "./NavUserCard";
import NavCompanyLogo from "./NavCompanyLogo";

export default function NavBar() {
  return (
    <Stack sx={{ height: "100%" }}>
      <NavCompanyLogo />

      <Divider />
      <NavLinks />
      <Divider />

      <NavUserCard />
    </Stack>
  );
}
