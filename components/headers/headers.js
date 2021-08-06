// react

// react-icons

// import { BiMenu, BiUserCircle } from "react-icons/bi";
import { FaBars, FaUserCircle } from "react-icons/fa";

// next
import Image from "next/image";
// react-jss
import { createUseStyles } from "react-jss";
// css

const useStyles = createUseStyles((theme) => ({
  headersContainer: {
    padding: {
      left: 40,
      right: 40,
    },
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    backgroundColor: "transparent",
    zIndex: theme.zIndex.nav,
    color: theme.palette.common.white,
    display: "flex",
    flexFlow: "column wrap",
    alignItems: "stretch",
    justifyContent: "flex-start",
  },
  nav: {
    height: 80,
    display: "flex",
    flexFlow: "row nowrap",
    alignItems: "center",
    justifyContent: "space-between",
    // backgroundColor: "rgba(255, 0, 0, .3)",
  },
  rightNav: {
    position: "relative",
    backgroundColor: theme.palette.common.white,
    width: 77,
    height: 42,
    borderRadius: 21,
    display: "flex",
    flexFlow: "row nowrap",
    alignItems: "center",
    justifyContent: "space-between",
    padding: {
      left: 12,
      right: 6,
    },
    "& > a": {
      display: "flex",
      color: theme.palette.common.black,
    },
    "& > a:hover": {
      cursor: "pointer",
    },
    "& > a:nth-of-type(1) > svg": {
      width: 16,
      height: 16,
      color: theme.typography.color.primary,
    },
    "& > a:nth-of-type(2) > svg": {
      width: 30,
      height: 30,
      color: theme.typography.color.secondary,
    },
  },
  redDot: {
    width: 14,
    height: 14,
    border: `1.5px solid ${theme.palette.common.white}`,
    borderRadius: theme.shapes.round,
    backgroundColor: theme.palette.signature,
    position: "absolute",
    top: 2,
    right: 4,
  },
  mobileSearchInput: {
    display: "block",
  },
  searchOptions: {
    display: "none",
  },
  searchOptions_950: {
    display: "none",
  },
  search: {
    backgroundColor: "green",
  },
  "@media screen and (min-width: 745px)": {
    searchOptions: {
      display: "block",
    },
    mobileSearchInput: {
      display: "none",
    },
  },
  "@media screen and (min-width: 950px)": {
    searchOptions: {
      display: "none",
    },
    searchOptions_950: {
      display: "block",
    },
  },
}));

// TODO: push to remove origin dev

export default function Headers() {
  const classes = useStyles();
  return (
    <header className={classes.headersContainer}>
      {/* nav */}
      <div className={classes.nav}>
        {/* logo */}
        <div className={classes.logo}>
          <Image src="/logo.png" width={30} height={30} />
        </div>
        {/* mobile search input */}
        <div className={classes.mobileSearchInput}>Mobile Search Input</div>
        {/* searchOption will move to first line on >950px */}
        <div className={classes.searchOptions_950}>
          Search Options first line
        </div>
        <div className={classes.rightNav}>
          <a>
            <FaBars />
          </a>
          <a>
            <FaUserCircle />
          </a>
          <div className={classes.redDot}></div>
        </div>
      </div>
      {/* search  */}
      <div className={classes.search}>
        {/* searchOption will move to first line on >950px */}
        <div className={classes.searchOptions}>Search Options Second line</div>
        {/* desktop search input */}
        <div className={classes.desktopSearchInput}>Search</div>
      </div>
    </header>
  );
}
