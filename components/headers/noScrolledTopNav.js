// react

// next

// react-jss
import { createUseStyles } from "react-jss";

// components
import RightNav from "./rightNav";

// css

const useStyles = createUseStyles((theme) => ({
  noScrolledTopNav: {
    height: 80,
    // TODO: we will replace flex with Grid
    display: "flex",
    flexFlow: "row nowrap",
    alignItems: "center",
    justifyContent: "space-between",
  },
  mobileSearchInput: {
    display: "block",
  },
  "@media screen and (min-width: 743px)": {
    mobileSearchInput: {
      display: "none",
    },
  },
}));

export default function NoScrolledTopNav() {
  const classes = useStyles();
  return (
    <div className={classes.noScrolledTopNav}>
      <div>Left Nav</div>
      {/* input options when vw < 743 */}
      <div className={classes.mobileSearchInput}>
        Search Input on vw less than 743
      </div>
      <RightNav />
    </div>
  );
}
