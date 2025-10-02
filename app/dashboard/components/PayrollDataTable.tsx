"use client";

import { IEmployeeTableData } from "@/app/api/payroll-data/route";
import DataTableCard, { TableCellType } from "@/components/DataTableCard/DataTableCard";
import { useState, useEffect } from "react";

export default function PayrollDataTable() {
  const [tableHeadRows, setTableHeadRows] = useState<string[]>([]);
  const [tableBodyRows, setTableBodyRows] = useState<Record<string, TableCellType>[]>([]);

  useEffect(() => {
    async function fetchEmployees() {
      const res = await fetch("/api/payroll-data");
      const data: IEmployeeTableData = await res.json();

      setTableHeadRows(data.tableHeadRows);
      setTableBodyRows(data.tableBodyRows);
    }
    fetchEmployees();
  }, []);

  return (
    <DataTableCard
      tableTitle="Payroll Status"
      tableHeadRows={tableHeadRows}
      tableBodyRows={tableBodyRows}
    />
  );
}
