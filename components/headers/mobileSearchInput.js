// react

// next

// react-jss
import { createUseStyles } from "react-jss";

// react-icons

import { BiSearch } from "react-icons/bi";

// components

// css

const useStyles = createUseStyles((theme) => ({
  mobileSearch: {
    display: "flex",
    flexFlow: "row nowrap",
    alignItems: "center",
    justifyContent: "space-between",
    height: 42,
    width: "auto",
    borderRadius: 21,
    backgroundColor: theme.palette.common.white,
    boxShadow: theme.shadows.search,
    "&:hover": {
      boxShadow: theme.shadows.hover,
    },
  },
  input: {
    flex: 1,
    height: "100%",
    border: "none",
    outline: "none",
    margin: {
      top: 7,
      right: 18,
      bottom: 7,
      left: 18,
    },
    ...theme.typography.navText,
    color: theme.typography.color.primary,
  },
  searchIcon: {
    width: 32,
    height: 32,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.palette.signature,
    borderRadius: theme.shapes.round,
    padding: 10,
    margin: {
      top: 7,
      right: 7,
      bottom: 7,
    },
    "& > svg": {
      width: 12,
      height: 12,
    },
  },
}));

export default function MobileSearchInput() {
  const classes = useStyles();
  return (
    <div className={classes.mobileSearch}>
      <input type="text" value="Start your search" className={classes.input} />
      <div className={classes.searchIcon}>
        <BiSearch />
      </div>
    </div>
  );
}
