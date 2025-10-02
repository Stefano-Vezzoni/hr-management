import { TableCellType } from "@/components/DataTableCard/DataTableCard";
import { NextResponse } from "next/server";

export interface IEmployeeTableData {
  tableHeadRows: string[];
  tableBodyRows: Record<string, TableCellType>[];
}

export async function GET() {
  const data: IEmployeeTableData = {
    tableHeadRows: ["Name", "Salary", "Status"],
    tableBodyRows: [
      {
        Name: "John Smith",
        Salary: "$85,000",
        Status: { value: "COMPLETED", variant: "status" },
      },
      {
        Name: "Mary Johnson",
        Salary: "$92,000",
        Status: { value: "PENDING", variant: "status" },
      },
      {
        Name: "Robert Davis",
        Salary: "$78,500",
        Status: { value: "PROCESSING", variant: "status" },
      },
      {
        Name: "Jennifer Wilson",
        Salary: "$95,000",
        Status: { value: "APPROVED", variant: "status" },
      },
      {
        Name: "Liam Jones",
        Salary: "$65,000",
        Status: { value: "NOT_APPROVED", variant: "status" },
      },
      {
        Name: "Olivia Martinez",
        Salary: "$105,000",
        Status: { value: "PROCESSING_FAILED", variant: "status" },
      },
    ],
  };

  return NextResponse.json(data);
}
