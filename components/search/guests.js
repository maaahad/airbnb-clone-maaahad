// react

// next

// react-jss
import { createUseStyles, useTheme } from "react-jss";

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
      cursor: "pointer",
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
  label,
  setDividerBg = (f) => f,
  cardStyle = {},
  cardState = "default",
  updateElStates = (f) => f,
}) {
  // each card will receive it's state and will update it root background and box-shadow
  // use useDividerWithDynamicBg like hoos, or make it general to control background
  const theme = useTheme();
  const classes = useStyles();

  const update = (state, bgColor) => {
    if (cardState === "active") return;
    setDividerBg(label, bgColor);
    updateElStates(label, state);
  };
  const handleMouseEnter = (event) => {
    // NOTE: need to check whether this card is a neighbouring card
    // in that case bgColor should be theme.background.color.secondary
    update("hover", theme.background.color.transparent);
  };

  const handleMouseLeave = (event) => {
    update("default", theme.background.color.secondary);
  };

  const handleOnClick = (event) => {
    update("active", theme.background.color.transparent);
  };

  return (
    <div
      className={classes.guests}
      style={{ ...cardStyle }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleOnClick}
    >
      <div className={classes.card}>
        <SearchCard
          label={label}
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
