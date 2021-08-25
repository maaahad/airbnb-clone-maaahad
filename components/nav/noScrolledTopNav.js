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
  logo: {
    display: "none",
  },
  rightNav: {
    display: "none",
  },
  mobileSearchInput: {
    flex: 1,
  },
  "@media screen and (min-width: 743px)": {
    mobileSearchInput: {
      display: "none",
    },
  },
  [`@media screen and (min-width: ${theme.breakpoints.sm})`]: {
    logo: {
      display: "block",
    },
    rightNav: {
      display: "block",
    },
  },
}));

export default function NoScrolledTopNav() {
  const classes = useStyles();
  return (
    <div className={classes.noScrolledTopNav}>
      <div className={classes.logo}>
        <Logo />
      </div>

      <div className={classes.mobileSearchInput}>
        <MobileSearchInput />
      </div>

      <div className={classes.rightNav}>
        <RightNav />
      </div>
    </div>
  );
}
