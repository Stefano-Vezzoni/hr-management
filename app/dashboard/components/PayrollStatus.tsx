import {
  Grid,
  Box,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Chip,
} from "@mui/material";

export default function PayrollStatus() {
  return (
    <Grid
      container
      direction="column"
      spacing={3}
      justifyItems={"center"}
      sx={{ height: "100%", p: 3 }}
    >
      <Grid
        sx={{
          border: "1px solid",
          borderColor: "divider",
          borderRadius: "16px",
          paddingX: 4,
          paddingY: 2,
        }}
      >
        <Box sx={{ paddingX: 1, paddingY: 2 }}>
          <Typography variant="h4" fontWeight="bold">
            Payroll Status
          </Typography>
        </Box>
        <Table
          size="small"
          sx={{
            border: "1px solid",
            borderColor: "divider",
            borderRadius: "1px",
            overflow: "hidden",
          }}
        >
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography variant="h5">Name</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h5">Salary</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h5">Status</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>
                <Typography variant="body2" fontWeight={500}>
                  John Smith
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="body2">$85,000</Typography>
              </TableCell>
              <TableCell>
                <Chip label={"Completed"} color="completed" size="small" />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Typography variant="body2" fontWeight={500}>
                  Mary Johnson
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="body2">$92,000</Typography>
              </TableCell>
              <TableCell>
                <Chip label={"Pending"} color="pending" size="small" />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Typography variant="body2" fontWeight={500}>
                  Robert Davis
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="body2">$78,500</Typography>
              </TableCell>
              <TableCell>
                <Chip label={"Processing"} color="processing" size="small" />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Typography variant="body2" fontWeight={500}>
                  Jennifer Wilson
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="body2">$95,000</Typography>
              </TableCell>
              <TableCell>
                <Chip label={"Approved"} color="approved" size="small" />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Typography variant="body2" fontWeight={500}>
                  Liam Jones
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="body2">$65,000</Typography>
              </TableCell>
              <TableCell>
                <Chip label={"Not Approved"} color="notApproved" size="small" />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Typography variant="body2" fontWeight={500}>
                  Olivia Martinez
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="body2">$105,000</Typography>
              </TableCell>
              <TableCell>
                <Chip
                  label={"Processing Failed"}
                  color="processingFailed"
                  size="small"
                />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Grid>
    </Grid>
  );
}
