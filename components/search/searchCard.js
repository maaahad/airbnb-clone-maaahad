// react

// next

// react-jss
import { createUseStyles, useTheme } from "react-jss";

// css
const useStyles = createUseStyles((theme) => ({
  searchCard: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexFlow: "column wrap",
    alignItems: "flex-start",
    justityContent: "center",
    padding: {
      top: 14,
      bottom: 14,
      right: 24,
      left: 24,
    },
    border: theme.border.transparent,
    borderRadius: 32,
    "&:focus": {
      backgroundColor: theme.palette.common.white,
    },
    "&:hover": {
      backgroundColor: theme.background.color.secondary,
      cursor: "pointer",
    },
  },
  searchLabel: {
    color: theme.typography.color.primary,
    paddingBottom: 2,
    ...theme.typography.searchCardLavel,
  },
  searchPlaceholder: {
    color: theme.typography.color.secondary,
    ...theme.typography.searchCardPlaceholder,
  },
}));

export default function SearchCard({
  label,
  placeholder,
  dividerVisibilityOnMouseEnter = (f) => f,
  dividerVisibilityOnMouseLeave = (f) => f,
  setDividerBg = (f) => f,
}) {
  const theme = useTheme();
  const classes = useStyles();
  const handleMouseEnter = (event) => {
    // dividerVisibilityOnMouseEnter(label);
    // pass the label and background color
    // theme.background.color.transparent
    setDividerBg(label, theme.background.color.transparent);
  };

  const handleMouseLeave = (event) => {
    // dividerVisibilityOnMouseLeave(label);
    // pass the label and background color
    // theme.background.color.secondary
    setDividerBg(label, theme.background.color.secondary);
  };

  return (
    <div
      className={classes.searchCard}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={classes.searchLabel}>{label}</div>
      <div className={classes.searchPlaceholder}>{placeholder}</div>
    </div>
  );
}
