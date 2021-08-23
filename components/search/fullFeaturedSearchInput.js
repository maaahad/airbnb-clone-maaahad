// react
import React, { useRef, useState } from "react";
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

// this is a test on active styles
const useActiveStyles = (elStates, defaultStyles = {}, activeStyles = {}) => {
  const _defaultStyles = (function () {
    let styles = {};
    for (let prop in elStates) {
      styles[prop] = defaultStyles;
    }
    return styles;
  })();

  const initialStyles = (function () {
    let styles = {};
    for (let prop in elStates) {
      if (elStates[prop] === "active") {
        styles[prop] = activeStyles;
      } else {
        styles[prop] = defaultStyles;
      }
    }
    return styles;
  })();
  const [styles, setStyles] = useState(initialStyles);
  const resetStyles = () => {
    setStyles(initialStyles);
  };

  const updateStyles = (label) => {
    setStyles({ ..._defaultStyles, [label]: activeStyles });
  };

  return { styles, resetStyles, updateStyles };
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
  const { styles, resetStyles, updateStyles } = useActiveStyles(
    {
      Location: "default",
      "Cheek in": "default",
      "Check out": "default",
      Guests: "default",
    },
    {
      backgroundColor: "red",
    },
    {
      backgroundColor: "green",
    }
  );

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
      <Location
        setDividerBg={setDividerBg}
        cardStyles={styles["Location"]}
        updateStyles={updateStyles}
      />
      {/* hide this div on hover over location  + Check in */}
      <div ref={locCheckDivRef} className={classes.divider}></div>
      <Check setDividerBg={setDividerBg} />
      {/* hide this div on hover over Guests  + Check out */}
      <div ref={checkGuestsDivRef} className={classes.divider}></div>
      <Guests setDividerBg={setDividerBg} />
    </div>
  );
}
