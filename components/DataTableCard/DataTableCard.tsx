import {
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import ThemedChip, { ChipValue, ChipVariant } from "../ThemedChip/ThemedChip";
import BaseCard from "../BaseCard/BaseCard";

export interface ITableBodyRows {
  [key: string]: TableCellType;
}

interface IDataTableCardProps {
  tableTitle: string;
  tableHeadRows: string[];
  tableBodyRows: ITableBodyRows[];
  tableSize?: "small" | "medium";
}

export type TableCellType = string | { variant: ChipVariant; value: ChipValue };

export default function DataTableCard({
  tableTitle,
  tableHeadRows,
  tableBodyRows,
  tableSize = "small",
}: IDataTableCardProps) {
  return (
    <BaseCard title={tableTitle}>
      <Table
        size={tableSize}
        sx={{
          border: "1px solid",
          borderColor: "divider",
          borderRadius: "1px",
          overflow: "hidden",
        }}
      >
        <TableHead>
          <TableRow>
            {tableHeadRows.map((column, index) => (
              <TableCell key={index}>
                <Typography variant="h5">{column}</Typography>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>

        <TableBody>
          {tableBodyRows.map((row, rowIndex) => (
            <TableRow key={rowIndex}>
              {tableHeadRows.map((column, colIndex) => {
                const cell = row[column];
                return (
                  <TableCell key={colIndex}>
                    {typeof cell === "object" ? (
                      <ThemedChip variant={cell.variant} value={cell.value} />
                    ) : (
                      cell
                    )}
                  </TableCell>
                );
              })}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </BaseCard>
  );
}
