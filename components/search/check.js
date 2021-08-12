// react

// next

// react-jss
import { createUseStyles } from "react-jss";

// component
import SearchCard from "./searchCard";

// css
const useStyles = createUseStyles((theme) => ({
  check: {
    flex: 1,
    display: "flex",
    flexFlow: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  card: {
    flex: 1,
  },
  divider: {
    // top and bottom padding for SearchCard will be 14px
    // 66 - 14 - 14 = 38
    height: 38,
    width: 1,
    backgroundColor: theme.background.color.secondary,
  },
}));

export default function Check() {
  const classes = useStyles();
  return (
    <div className={classes.check}>
      <div className={classes.card}>
        <SearchCard label="Check in" placeholder="Add dates" />
      </div>
      <div className={classes.divider}></div>
      <div className={classes.card}>
        <SearchCard label="Check out" placeholder="Add dates" />
      </div>
    </div>
  );
}
