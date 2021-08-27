// react
// next

// react-jss
import { createUseStyles, useTheme } from "react-jss";

// component
import SearchCard from "./searchCard";

// css
const useStyles = createUseStyles((theme) => ({
  checkin: {
    width: "100%",
  },
}));

export default function Checkin({
  label,
  activeElAdjacents = [],
  setDividerBg = (f) => f,
  cardStyle = {},
  cardState = "default",
  updateElStates = (f) => f,
}) {
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
      className={classes.checkin}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleOnClick}
    >
      <SearchCard
        label={label}
        placeholder="Add dates"
        setDividerBg={setDividerBg}
        cardStyle={cardStyle}
        cardState={cardState}
        updateElStates={updateElStates}
      />
    </div>
  );
}
