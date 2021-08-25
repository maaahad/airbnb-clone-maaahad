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

// const { styles, resetStyles, updateStyles } = useActiveStyles(
//   {
//     Location: "default",
//     "Cheek in": "default",
//     "Check out": "default",
//     Guests: "default",
//   },
//   {
//     backgroundColor: "red",
//   },
//   {
//     backgroundColor: "green",
//   }
// );

export default function FullFeaturedSearchInput() {
  const classes = useStyles();
  const theme = useTheme();
  const [locCheckDivRef, setLocCheckDivBg] = useDividerWithDynamicBg();
  const [checkGuestsDivRef, setCheckGuestsDivBg] = useDividerWithDynamicBg();

  const defaultStates = {
    Location: "default",
    Guests: "default",
    "Check in": "default",
    "Check out": "default",
  };
  const [elStates, setElStates] = useState(defaultStates);

  // a single function to control visibility
  const setDividerBg = (label, bg) => {
    if (["Location", "Check in"].includes(label)) {
      setLocCheckDivBg(bg);
    } else if (["Guests", "Check out"].includes(label)) {
      setCheckGuestsDivBg(bg);
    }
  };

  // determining card's inline styles
  const styles = {
    default: {
      // backgroundColor: theme.background.color.transparent,
    },
    hover: {
      // backgroundColor: theme.background.color.secondary,
    },
    active: {
      backgroundColor: theme.palette.common.white,
      boxShadow: theme.shadows.fullFeaturedSearch,
    },
  };

  const updateElStates = (label, state) => {
    // this needs to be rafactor
    if (
      elStates[label] === "active" &&
      (state === "hover" || state === "default")
    ) {
      return;
    }

    state === "active" && setElStates({ ...defaultStates, [label]: state });
    (state === "hover" || state === "default") &&
      setElStates({ ...elStates, [label]: state });
  };

  return (
    <div className={classes.searchInput}>
      <Location
        setDividerBg={setDividerBg}
        cardStyle={styles[elStates["Location"]]}
        cardState={elStates["Location"]}
        updateElStates={updateElStates}
      />
      {/* hide this div on hover over location  + Check in */}
      <div ref={locCheckDivRef} className={classes.divider}></div>
      <Check
        setDividerBg={setDividerBg}
        checkStyles={{
          "Check in": styles[elStates["Check in"]],
          "Check out": styles[elStates["Check out"]],
        }}
        checkStates={{
          "Check in": elStates["Check in"],
          "Check out": elStates["Check out"],
        }}
        updateElStates={updateElStates}
      />
      {/* hide this div on hover over Guests  + Check out */}
      <div ref={checkGuestsDivRef} className={classes.divider}></div>
      <Guests
        setDividerBg={setDividerBg}
        cardStyle={styles[elStates["Guests"]]}
        cardState={elStates["Guests"]}
        updateElStates={updateElStates}
      />
    </div>
  );
}
