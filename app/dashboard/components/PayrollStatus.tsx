import {
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Box,
} from "@mui/material";
import StatusChip from "@/components/statusChip/StatusChip";

export default function PayrollStatus() {
  return (
    <Box
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
              <StatusChip status="COMPLETED" />
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
              <StatusChip status="PENDING" />
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
              <StatusChip status="PROCESSING" />
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
              <StatusChip status="APPROVED" />
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
              <StatusChip status="NOT_APPROVED" />
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
              <StatusChip status="PROCESSING_FAILED" />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Box>
  );
}
