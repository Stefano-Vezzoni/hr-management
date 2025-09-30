import { Chip } from "@mui/material";

export const IStatusChip = {
  COMPLETED: { label: "Completed", color: "completed" },
  PENDING: { label: "Pending", color: "pending" },
  PROCESSING: { label: "Processing", color: "processing" },
  APPROVED: { label: "Approved", color: "approved" },
  NOT_APPROVED: { label: "Not Approved", color: "notApproved" },
  PROCESSING_FAILED: { label: "Processing Failed", color: "processingFailed" },
} as const;

export type StatusChipType = keyof typeof IStatusChip;

interface IStatusChipProps {
  status: StatusChipType;
  size?: "small" | "medium";
}

export default function StatusChip({
  status,
  size = "small",
}: IStatusChipProps) {
  const statusConfig = IStatusChip[status];

  return (
    <Chip label={statusConfig.label} color={statusConfig.color} size={size} />
  );
}
