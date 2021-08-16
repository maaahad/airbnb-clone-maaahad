// react
import React, { useRef } from "react";
// next

// react-jss
import { createUseStyles, useTheme } from "react-jss";

// component
import Location from "./location";
import Guests from "./guests";
import Check from "./check";
// css
const useStyles = createUseStyles((theme) => ({
  searchInput: {
    position: "relative",
    width: "100%",
    height: 66,
    display: "flex",
    flexFlow: "row nowrap",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: theme.background.color.primary,
    "& > *": {
      //   flex: 1,
    },
    border: theme.border.primary,
    borderRadius: 32,
    boxShadows: theme.shadows.fullFeaturedSearch,
  },
  divider: {
    // top and bottom padding for SearchCard will be 14px
    // 66 - 14 - 14 = 38
    height: 38,
    width: 1,
    backgroundColor: theme.background.color.secondary,
  },
}));

// a custom hook to control the visibility of divider :: NEXT

export default function FullFeaturedSearchInput() {
  const classes = useStyles();
  const theme = useTheme();
  const locationCheckDividerRef = useRef();
  const checkGuestsDivicerRef = useRef();

  const setDividerVisility = (label, backgroundColor) => {
    let ref = null;
    if (["Location", "Check in"].includes(label)) ref = locationCheckDividerRef;
    if (["Guests", "Check out"].includes(label)) ref = checkGuestsDivicerRef;
    if (!ref) return;
    ref.current.style.backgroundColor = backgroundColor;
  };
  // use a custom hook to control
  // control both with single function by receiving background color from SearchCard
  const dividerVisibilityOnMouseEnter = (label) => {
    setDividerVisility(label, "transparent");
  };

  const dividerVisibilityOnMouseLeave = (label) => {
    setDividerVisility(label, theme.background.color.secondary);
  };

  return (
    <div className={classes.searchInput}>
      <Location
        dividerVisibilityOnMouseEnter={dividerVisibilityOnMouseEnter}
        dividerVisibilityOnMouseLeave={dividerVisibilityOnMouseLeave}
      />
      {/* hide this dive on hover over location  + Check in */}
      <div ref={locationCheckDividerRef} className={classes.divider}></div>
      <Check
        dividerVisibilityOnMouseEnter={dividerVisibilityOnMouseEnter}
        dividerVisibilityOnMouseLeave={dividerVisibilityOnMouseLeave}
      />
      {/* hide this dive on hover over Guests  + Check out */}
      <div ref={checkGuestsDivicerRef} className={classes.divider}></div>
      <Guests
        dividerVisibilityOnMouseEnter={dividerVisibilityOnMouseEnter}
        dividerVisibilityOnMouseLeave={dividerVisibilityOnMouseLeave}
      />
    </div>
  );
}
