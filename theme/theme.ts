"use client";
import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    stage: {
      applicationReview: Palette["primary"];
      interview: Palette["primary"];
      technicalAssessment: Palette["primary"];
      offerExtended: Palette["primary"];
      hired: Palette["primary"];
      rejected: Palette["primary"];
    };
    type: {
      vacation: Palette["primary"];
      sick: Palette["primary"];
      personal: Palette["primary"];
      emergency: Palette["primary"];
      parental: Palette["primary"];
    };
    status: {
      completed: Palette["primary"];
      pending: Palette["primary"];
      processing: Palette["primary"];
      approved: Palette["primary"];
      notApproved: Palette["primary"];
      processingFailed: Palette["primary"];
    };
  }

  interface PaletteOptions {
    stage?: {
      applicationReview?: PaletteOptions["primary"];
      interview?: PaletteOptions["primary"];
      technicalAssessment?: PaletteOptions["primary"];
      offerExtended?: PaletteOptions["primary"];
      hired?: PaletteOptions["primary"];
      rejected?: PaletteOptions["primary"];
    };
    type?: {
      vacation?: PaletteOptions["primary"];
      sick?: PaletteOptions["primary"];
      personal?: PaletteOptions["primary"];
      emergency?: PaletteOptions["primary"];
      parental?: PaletteOptions["primary"];
    };
    status?: {
      completed?: PaletteOptions["primary"];
      pending?: PaletteOptions["primary"];
      processing?: PaletteOptions["primary"];
      approved?: PaletteOptions["primary"];
      notApproved?: PaletteOptions["primary"];
      processingFailed?: PaletteOptions["primary"];
    };
  }
}

declare module "@mui/material/Chip" {
  interface ChipPropsColorOverrides {
    // Status
    completed: true;
    pending: true;
    processing: true;
    approved: true;
    notApproved: true;
    processingFailed: true;

    // Types
    vacation: true;
    sick: true;
    personal: true;
    emergency: true;
    parental: true;

    // Stages
    applicationReview: true;
    interview: true;
    technicalAssessment: true;
    offerExtended: true;
    hired: true;
    rejected: true;
  }
}

const theme = createTheme({
  cssVariables: true,
  components: {
    MuiChip: {
      styleOverrides: {
        root: ({ ownerState, theme }) => {
          const { color } = ownerState;

          if (!color) return {};
          const palette =
            theme.palette.status[color as keyof typeof theme.palette.status] ||
            theme.palette.type[color as keyof typeof theme.palette.type] ||
            theme.palette.stage[color as keyof typeof theme.palette.stage];

          if (!palette) return {};

          return {
            backgroundColor: palette.main,
            color: palette.contrastText,
            fontSize: "0.70rem",
          };
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: "none",
          color: "inherit",
        },
      },
    },
  },
  typography: {
    fontFamily: "var(--font-inter)",
    body1: {
      fontSize: "0.875rem",
      lineHeight: 1.43,
    },
    body2: {
      fontSize: "0.75rem",
      lineHeight: 1.5,
    },

    h1: {
      fontFamily: "var(--font-montserrat)",
      fontWeight: 700,
      fontSize: "2rem",
    },
    h2: {
      fontFamily: "var(--font-montserrat)",
      fontWeight: 600,
      fontSize: "1.6rem",
    },
    h3: {
      fontFamily: "var(--font-montserrat)",
      fontWeight: 600,
      fontSize: "1.4rem",
    },
    h4: {
      fontFamily: "var(--font-montserrat)",
      fontWeight: 500,
      fontSize: "1.2rem",
    },
    h5: {
      fontFamily: "var(--font-montserrat)",
      fontWeight: 600,
      lineHeight: 1.5,
      fontSize: "1rem",
    },
    h6: {
      fontFamily: "var(--font-montserrat)",
      fontSize: "0.875rem",
      lineHeight: 1.43,
      fontWeight: 500,
    },
  },
  palette: {
    primary: { main: "#1976d2" },
    secondary: { main: "#9c27b0" },

    stage: {
      applicationReview: { main: "#DBEAFE", contrastText: "#1E40AF" },
      interview: { main: "#FEF3C7", contrastText: "#D97706" },
      technicalAssessment: { main: "#F3E8FF", contrastText: "#7E22CE" },
      offerExtended: { main: "#FFEDD5", contrastText: "#C2410C" },
      hired: { main: "#DCFCE7", contrastText: "#166534" },
      rejected: { main: "#FECACA", contrastText: "#7F1D1D" },
    },

    type: {
      vacation: { main: "#E0F2FE", contrastText: "#0369A1" },
      sick: { main: "#FEF3C7", contrastText: "#D97706" },
      personal: { main: "#F3E8FF", contrastText: "#7E22CE" },
      emergency: { main: "#FECACA", contrastText: "#7F1D1D" },
      parental: { main: "#FCE7F3", contrastText: "#EC4899" },
    },

    status: {
      completed: { main: "#DCFCE7", contrastText: "#166534" },
      pending: { main: "#FEF3C7", contrastText: "#D97706" },
      processing: { main: "#F3E8FF", contrastText: "#7E22CE" },
      approved: { main: "#DBEAFE", contrastText: "#1E40AF" },
      notApproved: { main: "#FEE2E2", contrastText: "#DC2626" },
      processingFailed: { main: "#FECACA", contrastText: "#7F1D1D" },
    },
  },
});

export default theme;
