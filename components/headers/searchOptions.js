// react
import React, { useRef } from "react";
// next
// clsx
import clsx from "clsx";

// react-jss
import { createUseStyles } from "react-jss";

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
    "& > a": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "100%",
      padding: {
        top: 10,
        right: 12,
        bottom: 10,
        left: 12,
      },
      ...theme.typography.linkText,
      color: "inherit",
    },
    "& > a:hover": {
      color: theme.typography.color.tertiary,
      cursor: "pointer",
    },
  },
  animatedBorder: {
    // This is activated on hover and onclick
    position: "absolute",
    bottom: 2,
    left: 0,
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "& > div": {
      width: 5,
      height: 2,
      backgroundColor: theme.palette.common.white,
      opacity: 0,
      transition: theme.transitions.all,
    },
  },
  linkHover: {},
  linkActive: {},
}));

function Option({ label }) {
  const classes = useStyles();
  const optionRef = useRef();
  const onMouseEnter = (event) => {
    const animatedDiv = optionRef.current.children[1].firstChild;
    animatedDiv.style.opacity = "1";
  };
  const onMouseLeave = (event) => {
    const animatedDiv = optionRef.current.children[1].firstChild;
    animatedDiv.style.opacity = "0";
  };
  return (
    <div
      ref={optionRef}
      className={classes.searchOption}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <a>{label}</a>
      <div className={classes.animatedBorder}>
        <div></div>
      </div>
    </div>
  );
}

export default function SearchOptions() {
  const classes = useStyles();
  //  TODO : add animatedBorderHover and animatedBorderActive to simulate
  // animation
  // use css animation or transition
  return (
    <div className={classes.searchOptions}>
      <div className={classes.offline}>
        <Option label="Places to stay" />
        <Option label="Experiences" />
      </div>
      <Option label="Online Experiences" />
    </div>
  );
}
