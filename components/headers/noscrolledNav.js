// react

// next

// react-jss
import { createUseStyles } from "react-jss";

// components
import NoScrolledTopNav from "./noScrolledTopNav";

// css

const useStyles = createUseStyles((theme) => ({
  noScrolledNav: {
    display: "flex",
    flexFlow: "column wrap",
    alignItems: "stretch",
    justifyContent: "flex-start",
  },
}));

export default function NoScrolledNav() {
  const classes = useStyles();
  return (
    <div className={classes.noScrolledNav}>
      <NoScrolledTopNav />
      <div>This is seacrh options and search</div>
    </div>
  );
}
