import { Chip } from "@mui/material";

export const IStatusChip = {
  COMPLETED: { label: "Completed", color: "completed" },
  PENDING: { label: "Pending", color: "pending" },
  PROCESSING: { label: "Processing", color: "processing" },
  APPROVED: { label: "Approved", color: "approved" },
  NOT_APPROVED: { label: "Not Approved", color: "notApproved" },
  PROCESSING_FAILED: { label: "Processing Failed", color: "processingFailed" },
} as const;

export const ITypeChip = {
  VACATION: { label: "Vacation", color: "vacation" },
  SICK: { label: "Sick", color: "sick" },
  PERSONAL: { label: "Personal", color: "personal" },
  EMERGENCY: { label: "Emergency", color: "emergency" },
  PARENTAL: { label: "Parental", color: "parental" },
} as const;

export const IStageChip = {
  APPLICATION_REVIEW: {
    label: "Application Review",
    color: "applicationReview",
  },
  INTERVIEW: { label: "Interview", color: "interview" },
  TECHNICAL_ASSESSMENT: {
    label: "Technical Assessment",
    color: "technicalAssessment",
  },
  OFFER_EXTENDED: { label: "Offer Extended", color: "offerExtended" },
  HIRED: { label: "Hired", color: "hired" },
  REJECTED: { label: "Rejected", color: "rejected" },
} as const;

export type StatusChipType = keyof typeof IStatusChip;
export type TypeChipType = keyof typeof ITypeChip;
export type StageChipType = keyof typeof IStageChip;

export type ChipVariant = "status" | "type" | "stage";
export type ChipValue = StatusChipType | TypeChipType | StageChipType;

interface ThemedChipProps {
  variant: ChipVariant;
  value: ChipValue;
  size?: "small" | "medium";
}

export default function ThemedChip({
  variant,
  value,
  size = "small",
}: ThemedChipProps) {
  const getChipConfig = () => {
    switch (variant) {
      case "status":
        return IStatusChip[value as StatusChipType];
      case "type":
        return ITypeChip[value as TypeChipType];
      case "stage":
        return IStageChip[value as StageChipType];
    }
  };

  const config = getChipConfig();

  return <Chip label={config.label} color={config.color} size={size} />;
}
