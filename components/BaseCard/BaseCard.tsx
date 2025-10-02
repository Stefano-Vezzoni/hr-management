import { Card, Box, Typography } from "@mui/material";
import { ReactNode } from "react";

interface IBaseCardProps {
  title: string;
  children?: ReactNode;
}

export default function BaseCard({ title, children }: IBaseCardProps) {
  return (
    <Card
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
          {title}
        </Typography>
      </Box>

      {children}
    </Card>
  );
}
