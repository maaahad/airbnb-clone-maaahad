// react

// next

// react-jss
import { createUseStyles } from "react-jss";

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
    "&:hover": {
      backgroundColor: theme.background.color.secondary,
    },
  },
  searchLabel: {
    color: theme.typography.color.primary,
  },
  searchPlaceholder: {
    color: theme.typography.color.tertiary,
  },
}));

export default function SearchCard({ label, placeholder }) {
  const classes = useStyles();
  return (
    <div className={classes.searchCard}>
      <div className={classes.searchLabel}>{label}</div>
      <div className={classes.searchPlaceholder}>{placeholder}</div>
    </div>
  );
}
