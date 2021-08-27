// react
import React, { useRef, useState } from "react";
// next

// react-jss
import { createUseStyles, useTheme } from "react-jss";

// component
import Location from "./location";
import Guests from "./guests";
import Check from "./check";
import Checkin from "./checkin";
import Checkout from "./checkout";
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
  check: {
    flex: 1,
    minWidth: 320,
    display: "flex",
    flexFlow: "row nowrap",
    alignItems: "center",
    justifyContent: "space-between",
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
      ref.current.style.backgroundColor = bgColor;
    }
  };

  return [ref, setBgColor];
};

export default function FullFeaturedSearchInput() {
  const classes = useStyles();
  const theme = useTheme();

  const [locCheckDivRef, setLocCheckDivBg] = useDividerWithDynamicBg();
  const [checkDivRef, setCheckDivBg] = useDividerWithDynamicBg();
  const [checkGuestsDivRef, setCheckGuestsDivBg] = useDividerWithDynamicBg();

  const labels = ["Location", "Check in", "Check out", "Guests"];
  const defaultStates = {
    [labels[0]]: "default",
    [labels[1]]: "default",
    [labels[2]]: "default",
    [labels[3]]: "default",
  };
  // defining card's inline styles
  const styles = {
    default: {
      // default style is handled by css directly
    },
    hover: {
      // background color for hover is handled by css directly
    },
    active: {
      backgroundColor: theme.palette.common.white,
      boxShadow: theme.shadows.fullFeaturedSearch,
    },
  };

  const [elStates, setElStates] = useState(defaultStates);
  const [activeElAdjacents, setActiveElAdjacents] = useState([]);

  // a single function to control visibility
  const setDividerBg = (label, bg) => {
    if (["Location", "Check in"].includes(label)) {
      setLocCheckDivBg(bg);
    }
    if (["Check in", "Check out"].includes(label)) {
      setCheckDivBg(bg);
    }
    if (["Guests", "Check out"].includes(label)) {
      setCheckGuestsDivBg(bg);
    }
  };

  const updateElStates = (label, state) => {
    // this needs to be refactor
    if (
      elStates[label] === "active" &&
      (state === "hover" || state === "default")
    ) {
      return;
    }

    if (state === "active") {
      const labelIndex = labels.findIndex((lb) => lb === label);
      if (labelIndex === 0) {
        setActiveElAdjacents(labels.slice(labelIndex, labelIndex + 2));
      } else if (labelIndex === labels.length - 1) {
        setActiveElAdjacents(labels.slice(labelIndex - 1));
      } else {
        setActiveElAdjacents(labels.slice(labelIndex - 1, labelIndex + 2));
      }
      setElStates({ ...defaultStates, [label]: state });
    }

    (state === "hover" || state === "default") &&
      setElStates({ ...elStates, [label]: state });
  };

  console.log("activeElAdjacent", activeElAdjacents);

  return (
    <div className={classes.searchInput}>
      <Location
        label={labels[0]}
        activeElAdjacents={activeElAdjacents}
        setDividerBg={setDividerBg}
        cardStyle={styles[elStates[labels[0]]]}
        cardState={elStates[labels[0]]}
        updateElStates={updateElStates}
      />
      {/* hide this div on hover over location  + Check in */}
      <div ref={locCheckDivRef} className={classes.divider}></div>
      <div className={classes.check}>
        <Checkin
          label={labels[1]}
          activeElAdjacents={activeElAdjacents}
          setDividerBg={setDividerBg}
          cardStyle={styles[elStates[labels[1]]]}
          cardState={elStates[labels[1]]}
          updateElStates={updateElStates}
        />
        {/* hide this div on hover over Checkin  + Check out */}
        <div ref={checkDivRef} className={classes.divider}></div>
        <Checkout
          label={labels[2]}
          activeElAdjacents={activeElAdjacents}
          setDividerBg={setDividerBg}
          cardStyle={styles[elStates[labels[2]]]}
          cardState={elStates[labels[2]]}
          updateElStates={updateElStates}
        />
      </div>
      {/* hide this div on hover over Guests  + Check out */}
      <div ref={checkGuestsDivRef} className={classes.divider}></div>
      <Guests
        label={labels[3]}
        activeElAdjacents={activeElAdjacents}
        setDividerBg={setDividerBg}
        cardStyle={styles[elStates[labels[3]]]}
        cardState={elStates[labels[3]]}
        updateElStates={updateElStates}
      />
    </div>
  );
}
