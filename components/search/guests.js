// react

// next

// react-jss
import { createUseStyles } from "react-jss";

// react-icons

import { BiSearch } from "react-icons/bi";

// component
import SearchCard from "./searchCard";

// css
const useStyles = createUseStyles((theme) => ({
  guests: {
    flex: 1,
    display: "flex",
    flexFlow: "row nowrap",
    alignItems: "center",
    justifyContent: "space-between",
    border: theme.border.transparent,
    borderRadius: 32,
    "&:hover": {
      backgroundColor: theme.background.color.secondary,
    },
  },
  card: {},
  searchIcon: {
    width: 48,
    height: 48,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.palette.signature,
    borderRadius: theme.shapes.round,
    padding: 16,
    margin: {
      top: 7,
      right: 7,
      bottom: 7,
    },
    "& > svg": {
      width: 16,
      height: 16,
    },
  },
}));

export default function Guests() {
  const classes = useStyles();
  return (
    <div className={classes.guests}>
      <div className={classes.card}>
        <SearchCard label="Guests" placeholder="Add guests" />
      </div>
      <div className={classes.searchIcon}>
        <BiSearch />
      </div>
    </div>
  );
}
