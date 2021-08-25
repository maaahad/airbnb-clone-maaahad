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
    minWidth: 180,
    display: "flex",
    flexFlow: "row nowrap",
    alignItems: "center",
    justifyContent: "space-between",
    border: theme.border.transparent,
    borderRadius: 32,
    backgroundColor: theme.background.color.transparent,
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

export default function Guests({
  setDividerBg = (f) => f,
  cardStyle = {},
  cardState = "default",
  updateElStates = (f) => f,
}) {
  const classes = useStyles();
  return (
    <div className={classes.guests} style={{ ...cardStyle }}>
      <div className={classes.card}>
        <SearchCard
          label="Guests"
          placeholder="Add guests"
          setDividerBg={setDividerBg}
          cardStyle={
            cardState === "active"
              ? { backgroundColor: cardStyle.backgroundColor }
              : {}
          }
          cardState={cardState}
          updateElStates={updateElStates}
        />
      </div>
      <div className={classes.searchIcon}>
        <BiSearch />
      </div>
    </div>
  );
}
