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
const useDividerWithDynamicBg = () => {
  const ref = useRef();
  const setBgColor = (bgColor) => {
    if (ref) ref.current.style.backgroundColor = bgColor;
  };

  return [ref, setBgColor];
};

export default function FullFeaturedSearchInput() {
  const classes = useStyles();
  const theme = useTheme();

  const [locCheckDivRef, setLocCheckDivBg] = useDividerWithDynamicBg();
  const [checkGuestsDivRef, setCheckGuestsDivBg] = useDividerWithDynamicBg();

  // a single function to control visibility
  const setDividerBg = (label, bg) => {
    if (["Location", "Check in"].includes(label)) {
      setLocCheckDivBg(bg);
    } else if (["Guests", "Check out"].includes(label)) {
      setCheckGuestsDivBg(bg);
    }
  };

  return (
    <div className={classes.searchInput}>
      <Location setDividerBg={setDividerBg} />
      {/* hide this div on hover over location  + Check in */}
      <div ref={locCheckDivRef} className={classes.divider}></div>
      <Check setDividerBg={setDividerBg} />
      {/* hide this div on hover over Guests  + Check out */}
      <div ref={checkGuestsDivRef} className={classes.divider}></div>
      <Guests setDividerBg={setDividerBg} />
    </div>
  );
}
