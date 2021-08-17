// react
import React, { useRef } from "react";
// next

// react-jss
import { createUseStyles, useTheme } from "react-jss";

// component
import SearchCard from "./searchCard";

// css
const useStyles = createUseStyles((theme) => ({
  check: {
    flex: 1,
    minWidth: 320,
    display: "flex",
    flexFlow: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  card: {
    flex: 1,
  },
  divider: {
    // top and bottom padding for SearchCard will be 14px
    // 66 - 14 - 14 = 38
    height: 38,
    width: 1,
    backgroundColor: theme.background.color.secondary,
  },
}));

export default function Check({
  dividerVisibilityOnMouseEnter = (f) => f,
  dividerVisibilityOnMouseLeave = (f) => f,
  setDividerBg = (f) => f,
}) {
  const theme = useTheme();
  const classes = useStyles();
  const checkDivierRef = useRef();

  // need another useDividerWithDynamicBg hooks
  const handleMouseEnter = (label) => {
    checkDivierRef.current.style.backgroundColor = "transparent";
    dividerVisibilityOnMouseEnter(label);
  };
  const handleMouseLeave = (label) => {
    checkDivierRef.current.style.backgroundColor =
      theme.background.color.secondary;
    dividerVisibilityOnMouseLeave(label);
  };

  return (
    <div className={classes.check}>
      <div className={classes.card}>
        <SearchCard
          label="Check in"
          placeholder="Add dates"
          dividerVisibilityOnMouseEnter={handleMouseEnter}
          dividerVisibilityOnMouseLeave={handleMouseLeave}
        />
      </div>
      <div ref={checkDivierRef} className={classes.divider}></div>
      <div className={classes.card}>
        <SearchCard
          label="Check out"
          placeholder="Add dates"
          dividerVisibilityOnMouseEnter={handleMouseEnter}
          dividerVisibilityOnMouseLeave={handleMouseLeave}
          setDividerBg={setDividerBg}
        />
      </div>
    </div>
  );
}
