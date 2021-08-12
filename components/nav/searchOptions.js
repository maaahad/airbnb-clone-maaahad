// react
import React, { useRef, useState } from "react";
// next
// clsx
import clsx from "clsx";

// react-jss
import { createUseStyles, useTheme } from "react-jss";

// css
const useStyles = createUseStyles((theme) => ({
  searchOptions: {
    height: 80,
    display: "flex",
    flexFlow: "row nowrap",
    alignItems: "center",
    justifyContent: "center",
  },
  offline: {
    display: "flex",
    flexFlow: "row nowrap",
    alignItems: "center",
    justifyContent: "center",
  },
  searchOption: {
    position: "relative",
    height: 40,
    "& > button": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "100%",
      transition: theme.transition.all,
      padding: {
        top: 10,
        right: 12,
        bottom: 10,
        left: 12,
      },
      backgroundColor: "transparent",
      border: "none",
      ...theme.typography.linkText,
      color: "inherit",
    },
    "& > button:focus": {
      color: theme.palette.common.white,
    },
    "& > button:hover": {
      // color is set on hover in React component to be consistent with animated border
      // color: theme.background.color.secondary,
      cursor: "pointer",
    },
  },
  animatedBorderContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  animatedBorder: {
    backgroundColor: theme.palette.common.white,
    transition: theme.transition.all,
    height: 2,
  },
}));

const options = [
  { label: "Places to stay", tag: "places" },
  { label: "Experiences", tag: "experiences" },
  { label: "Online Experiences", tag: "online" },
];

function Option({
  tag,
  label,
  borderStyle,
  setHoverStyle = (f) => f,
  unsetHoverStyle = (f) => f,
  activateOption = (f) => f,
}) {
  const classes = useStyles();
  return (
    <div
      className={classes.searchOption}
      onMouseEnter={(event) => setHoverStyle(tag)}
      onMouseLeave={(event) => unsetHoverStyle(tag)}
      onClick={(event) => activateOption(tag)}
    >
      <button style={{ color: borderStyle.backgroundColor }}>{label}</button>
      <div className={classes.animatedBorderContainer}>
        <div
          className={classes.animatedBorder}
          style={{ ...borderStyle }}
        ></div>
      </div>
    </div>
  );
}

export default function SearchOptions({ setSearchInput }) {
  const theme = useTheme();
  const optionStyles = {
    default: {
      width: 0,
      backgroundColor: theme.palette.common.white,
    },
    hover: {
      width: 5,
      backgroundColor: theme.background.color.secondary,
    },
    active: {
      width: 20,
      backgroundColor: theme.palette.common.white,
    },
  };
  const classes = useStyles();
  const [styles, setStyles] = useState({
    places: optionStyles.active,
    experiences: optionStyles.default,
    online: optionStyles.default,
  });

  // TODO : hover does not seem to be working properly
  // quick mouse remove to other option, not affecting unsetHoverStyle
  const setHoverStyle = (tag) => {
    if (styles[tag].width === 20) return;
    const newStyles = { ...styles, [tag]: optionStyles.hover };
    setStyles(newStyles);
  };
  const unsetHoverStyle = (tag) => {
    if (styles[tag].width === 20) return;
    const newStyles = { ...styles, [tag]: optionStyles.default };
    setStyles(newStyles);
  };

  const activateOption = (tag) => {
    if (styles[tag].width === 20) return;
    const newStyles = {
      ...{
        places: optionStyles.default,
        experiences: optionStyles.default,
        online: optionStyles.default,
      },
      [tag]: optionStyles.active,
    };
    setStyles(newStyles);
    // specify searchInput
  };

  return (
    <div className={classes.searchOptions}>
      <div className={classes.offline}>
        <Option
          label="Places to stay"
          tag="places"
          borderStyle={styles.places}
          setHoverStyle={setHoverStyle}
          unsetHoverStyle={unsetHoverStyle}
          activateOption={activateOption}
        />
        <Option
          label="Experiences"
          tag="experiences"
          borderStyle={styles.experiences}
          setHoverStyle={setHoverStyle}
          unsetHoverStyle={unsetHoverStyle}
          activateOption={activateOption}
        />
      </div>
      <Option
        label="Online Experiences"
        tag="online"
        borderStyle={styles.online}
        setHoverStyle={setHoverStyle}
        unsetHoverStyle={unsetHoverStyle}
        activateOption={activateOption}
      />
    </div>
  );
}
