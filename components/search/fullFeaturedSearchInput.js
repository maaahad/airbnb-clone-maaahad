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

// create a custom library for custom hook
const useDividerWithDynamicBg = () => {
  const ref = useRef();
  const setBgColor = (bgColor) => {
    if (ref) {
      // console.log(ref.current.style);
      ref.current.style.backgroundColor = bgColor;
      // we need the following to make the hook general ... NOT WORKING
      //  we need to create Style class ... TODO : check book ===
      // ref.current.style = { ...ref.current.style, backgroundColor: bgColor };
    }
  };

  return [ref, setBgColor];
};

export default function FullFeaturedSearchInput() {
  const classes = useStyles();
  const theme = useTheme();

  const [locCheckDivRef, setLocCheckDivBg] = useDividerWithDynamicBg();
  const [checkGuestsDivRef, setCheckGuestsDivBg] = useDividerWithDynamicBg();

  // each search card should have a state from [default, hover, focus]
  // not sure how to handle it.
  // may be the root parent should have state...
  // because other SearchCard's state depends on each other
  // we have four card... location, CheckIn, checkOut, Guests

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
