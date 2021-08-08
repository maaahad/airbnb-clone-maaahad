// react

// next

// react-jss
import { createUseStyles } from "react-jss";

// components
import RightNav from "./rightNav";
import MobileSearchInput from "./mobileSearchInput";
import Logo from "./logo";

// css

const useStyles = createUseStyles((theme) => ({
  noScrolledTopNav: {
    height: 80,
    // TODO: we will replace flex with Grid
    display: "flex",
    flexFlow: "row nowrap",
    alignItems: "center",
    justifyContent: "space-between",
    "& > * + *": {
      marginLeft: 10,
    },
  },
  mobileSearchInput: {
    flex: 1,
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
      <Logo />
      {/* input options when vw < 743 */}
      <div className={classes.mobileSearchInput}>
        <MobileSearchInput />
      </div>
      <RightNav />
    </div>
  );
}
