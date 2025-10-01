import { Grid, Stack, Typography } from "@mui/material";
import NavBar from "../../components/Navbar/Navbar";
import PayrollStatus from "./components/PayrollStatus";

export default function Dashboard() {
  return (
    <Grid container spacing={2} sx={{ height: "100vh" }}>
      <Grid size={2} sx={{ borderRight: "1px solid", borderColor: "divider" }}>
        <NavBar />
      </Grid>

      <Grid size={7} sx={{ p: 4 }}>
        <Stack spacing={3}>
          <h1>Título Principal</h1>
          <p>Seu conteúdo...</p>
        </Stack>
      </Grid>

      <Grid
        size={3}
        sx={{ borderLeft: "1px solid", borderColor: "divider", p: 3 }}
      >
        <Grid>
          <PayrollStatus />
        </Grid>

        <Grid>
          <Stack spacing={2}>
            <Typography variant="body1">Card de Perfil</Typography>
            <Typography variant="body1">Notificações</Typography>
          </Stack>
        </Grid>

        <Grid>
          <Stack spacing={2}>
            <Typography variant="body1">Card de Perfil</Typography>
            <Typography variant="body1">Notificações</Typography>
          </Stack>
        </Grid>
      </Grid>
    </Grid>
  );
}
