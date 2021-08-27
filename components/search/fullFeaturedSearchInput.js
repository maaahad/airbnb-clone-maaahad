// react
import React, { useRef, useState, useLayoutEffect } from "react";
// next

// react-icons

import { BiSearch } from "react-icons/bi";
// react-jss
import { createUseStyles, useTheme } from "react-jss";

// component
import SearchCard from "./searchCard";
import Location from "./location";
import Guests from "./guests";
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
  location: {
    flex: 1,
    maxWidth: "calc(100% - 520px)",
  },
  checkin: {
    width: "100%",
  },
  checkout: {
    width: "100%",
  },
  guests: {
    flex: 1,
    minWidth: 180,
    display: "flex",
    flexFlow: "row nowrap",
    alignItems: "center",
    justifyContent: "space-between",
    // the following is necessary to make sure both Search card and Search icon
    // have the same background
    border: theme.border.transparent,
    borderRadius: 32,
    backgroundColor: theme.background.color.transparent,
    "&:hover": {
      cursor: "pointer",
      backgroundColor: theme.background.color.secondary,
    },
  },
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
  divider: {
    // top and bottom padding for SearchCard will be 14px
    // 66 - 14 - 14 = 38
    height: 38,
    width: 1,
    backgroundColor: theme.background.color.secondary,
  },
}));

class Card {
  constructor(label, sublabel, dividers = []) {
    this.label = label;
    this.sublabel = sublabel;
    this.dividers = dividers;
    this.style = {};
  }
}

// class SearchCards {
//   constructor(cards = []) {
//     this.cards = cards;
//   }
// }

const useSearchCards = (locationRef) => {
  const [searchCards, updateSearchCards] = useState({
    location: new Card("Location", "Where are you going?", [
      "nextElementSibling",
    ]),
    checkin: new Card("Check in", "Add dates", [
      "previousElementSibling",
      "nextElementSibling",
    ]),
    checkout: new Card("Check out", "Add dates", [
      "previousElementSibling",
      "nextElementSibling",
    ]),
    guests: new Card("Guests", "Add guests", ["previousElementSibling"]),
  });

  // This will be used for location only. I will generalize it in case it is necessary
  const resizeSublabel = () => {
    const totalWidth = window
      .getComputedStyle(locationRef.current)
      .width.slice(0, -2);

    const charsToAccomodate = Math.floor((parseInt(totalWidth) - 24 * 2) / 8);
    // need to investigate why this work ... how the text go back to its original text
    // once it is reduced ???????????
    const _sublabel =
      charsToAccomodate >= searchCards["location"].sublabel.length
        ? searchCards["location"].sublabel
        : searchCards["location"].sublabel.slice(0, charsToAccomodate - 3) +
          "...";

    updateSearchCards({
      ...searchCards,
      location: { ...searchCards["location"], sublabel: _sublabel },
    });
  };

  useLayoutEffect(() => {
    window.addEventListener("resize", resizeSublabel);
    resizeSublabel();
    return () => window.removeEventListener("resize", resizeSublabel);
  }, []);

  return [searchCards];
};

export default function FullFeaturedSearchInput() {
  const classes = useStyles();
  const locationRef = useRef();
  // need a custom reducers later ..
  const [searchCards] = useSearchCards(locationRef);

  return (
    <div className={classes.searchInput}>
      <div ref={locationRef} className={classes.location}>
        <SearchCard card={searchCards.location} />
      </div>
      {/* hide this div on hover over location  + Check in */}
      <div className={classes.divider}></div>
      <div className={classes.check}>
        <div className={classes.checkin}>
          <SearchCard card={searchCards.checkin} />
        </div>
        {/* hide this div on hover over Checkin  + Check out */}
        <div className={classes.divider}></div>
        <div className={classes.checkout}>
          <SearchCard card={searchCards.checkout} />
        </div>
      </div>
      {/* hide this div on hover over Guests  + Check out */}
      <div className={classes.divider}></div>
      <div className={classes.guests}>
        <SearchCard card={searchCards.guests} />
        <div className={classes.searchIcon}>
          <BiSearch />
        </div>
      </div>
    </div>
  );
}

// // create a custom library for custom hook
// const useDividerWithDynamicBg = () => {
//   const ref = useRef();
//   const setBgColor = (bgColor) => {
//     if (ref) {
//       ref.current.style.backgroundColor = bgColor;
//     }
//   };

//   return [ref, setBgColor];
// };

// export default function FullFeaturedSearchInput() {
//   const classes = useStyles();
//   const theme = useTheme();

//   const [locCheckDivRef, setLocCheckDivBg] = useDividerWithDynamicBg();
//   const [checkDivRef, setCheckDivBg] = useDividerWithDynamicBg();
//   const [checkGuestsDivRef, setCheckGuestsDivBg] = useDividerWithDynamicBg();

//   const labels = ["Location", "Check in", "Check out", "Guests"];
//   const defaultStates = {
//     [labels[0]]: "default",
//     [labels[1]]: "default",
//     [labels[2]]: "default",
//     [labels[3]]: "default",
//   };
//   // defining card's inline styles
//   const styles = {
//     default: {
//       // default style is handled by css directly
//     },
//     hover: {
//       // background color for hover is handled by css directly
//     },
//     active: {
//       backgroundColor: theme.palette.common.white,
//       boxShadow: theme.shadows.fullFeaturedSearch,
//     },
//   };

//   const [elStates, setElStates] = useState(defaultStates);
//   const [activeElAdjacents, setActiveElAdjacents] = useState([]);

//   // a single function to control visibility
//   const setDividerBg = (label, bg) => {
//     if (["Location", "Check in"].includes(label)) {
//       setLocCheckDivBg(bg);
//     }
//     if (["Check in", "Check out"].includes(label)) {
//       setCheckDivBg(bg);
//     }
//     if (["Guests", "Check out"].includes(label)) {
//       setCheckGuestsDivBg(bg);
//     }
//   };

//   const updateElStates = (label, state) => {
//     // this needs to be refactor
//     if (
//       elStates[label] === "active" &&
//       (state === "hover" || state === "default")
//     ) {
//       return;
//     }

//     if (state === "active") {
//       const labelIndex = labels.findIndex((lb) => lb === label);
//       if (labelIndex === 0) {
//         setActiveElAdjacents(labels.slice(labelIndex, labelIndex + 2));
//       } else if (labelIndex === labels.length - 1) {
//         setActiveElAdjacents(labels.slice(labelIndex - 1));
//       } else {
//         setActiveElAdjacents(labels.slice(labelIndex - 1, labelIndex + 2));
//       }
//       setElStates({ ...defaultStates, [label]: state });
//     }

//     (state === "hover" || state === "default") &&
//       setElStates({ ...elStates, [label]: state });
//   };

//   console.log("activeElAdjacent", activeElAdjacents);

//   return (
//     <div className={classes.searchInput}>
//       <Location
//         label={labels[0]}
//         activeElAdjacents={activeElAdjacents}
//         setDividerBg={setDividerBg}
//         cardStyle={styles[elStates[labels[0]]]}
//         cardState={elStates[labels[0]]}
//         updateElStates={updateElStates}
//       />
//       {/* hide this div on hover over location  + Check in */}
//       <div ref={locCheckDivRef} className={classes.divider}></div>
//       <div className={classes.check}>
//         <Checkin
//           label={labels[1]}
//           activeElAdjacents={activeElAdjacents}
//           setDividerBg={setDividerBg}
//           cardStyle={styles[elStates[labels[1]]]}
//           cardState={elStates[labels[1]]}
//           updateElStates={updateElStates}
//         />
//         {/* hide this div on hover over Checkin  + Check out */}
//         <div ref={checkDivRef} className={classes.divider}></div>
//         <Checkout
//           label={labels[2]}
//           activeElAdjacents={activeElAdjacents}
//           setDividerBg={setDividerBg}
//           cardStyle={styles[elStates[labels[2]]]}
//           cardState={elStates[labels[2]]}
//           updateElStates={updateElStates}
//         />
//       </div>
//       {/* hide this div on hover over Guests  + Check out */}
//       <div ref={checkGuestsDivRef} className={classes.divider}></div>
//       <Guests
//         label={labels[3]}
//         activeElAdjacents={activeElAdjacents}
//         setDividerBg={setDividerBg}
//         cardStyle={styles[elStates[labels[3]]]}
//         cardState={elStates[labels[3]]}
//         updateElStates={updateElStates}
//       />
//     </div>
//   );
// }
