// react

// next
import Image from "next/image";
// react-jss
import { createUseStyles } from "react-jss";
// css

const useStyles = createUseStyles((theme) => ({
  headersContainer: {
    padding: {
      left: 20,
      right: 20,
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
  },
  mobileSearchInput: {
    display: "block",
  },
  desktopSearchOptions: {
    display: "none",
  },
  search: {
    backgroundColor: "green",
  },
  "@media screen and (min-width: 960px)": {
    desktopSearchOptions: {
      display: "block",
    },
    mobileSearchInput: {
      display: "none",
    },
  },
}));

export default function Headers() {
  const classes = useStyles();
  return (
    <header className={classes.headersContainer}>
      <div className={classes.nav}>
        <div className={classes.logo}>
          <Image src="/logo.png" width={30} height={30} />
        </div>
        <div className={classes.mobileSearchInput}>Mobile Search Input</div>
        <div className={classes.desktopSearchOptions}>
          Desktop Search Options
        </div>
        <div>right nav</div>
      </div>
      <div className={classes.search}>Search</div>
    </header>
  );
}
