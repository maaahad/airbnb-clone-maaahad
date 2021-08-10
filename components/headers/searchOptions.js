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
  searchOption: {
    position: "relative",
    height: 40,
    "& > button": {
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
      backgroundColor: "transparent",
      border: "none",
      ...theme.typography.linkText,
      color: "inherit",
    },
    "& > button:hover": {
      // color: theme.typography.color.tertiary,
      cursor: "pointer",
    },
  },
  animatedBorderContainer: {
    // This is activated on hover and onclick
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  animatedBorder: (status) => ({
    backgroundColor: theme.typography.color.tertiary,
    backgroundColor: theme.palette.common.white,
    transition: theme.transition.all,
    height: 2,
    width: status === "active" ? 20 : status === "hover" ? 5 : 0,
  }),
}));

const options = [
  { label: "Places to stay", tag: "places" },
  { label: "Experiences", tag: "experiences" },
  { label: "Online Experiences", tag: "online" },
];
// todo : refactor to use options

function Option({
  tag,
  label,
  status,
  activateOption = (f) => f,
  onMouseEnter = (f) => f,
  onMouseLeave = (f) => f,
}) {
  const classes = useStyles(status);
  return (
    <div
      className={classes.searchOption}
      onClick={() => activateOption(tag)}
      onMouseEnter={() => onMouseEnter(tag)}
      onMouseLeave={() => onMouseLeave(tag)}
    >
      <button>{label}</button>
      <div className={classes.animatedBorderContainer}>
        <div className={classes.animatedBorder}></div>
      </div>
    </div>
  );
}

export default function SearchOptions() {
  const [optionsStatus, setOptionsStatus] = useState({
    places: "active",
    experiences: "default",
    online: "default",
  });

  const theme = useTheme();
  const classes = useStyles();

  const activateOption = (tag) => {
    const newStatus = {
      places: "default",
      experiences: "default",
      online: "default",
    };
    newStatus[tag] = "active";
    setOptionsStatus(newStatus);
  };

  // another method to a
  const onMouseEnter = (tag) => {
    console.log("mouse enter: ", tag);
    if (optionsStatus[tag] === "active") return;
    const newStatus = { ...optionsStatus };
    newStatus[tag] = "hover";
    setOptionsStatus(newStatus);
  };
  const onMouseLeave = (tag) => {
    console.log("mouse leave: ", tag);
    if (optionsStatus[tag] === "active") return;
    const newStatus = { ...optionsStatus };
    newStatus[tag] = "default";
    setOptionsStatus(newStatus);
  };

  console.log(optionsStatus);

  return (
    <div className={classes.searchOptions}>
      <Option
        tag="places"
        label="Places"
        status={optionsStatus["places"]}
        activateOption={activateOption}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      />
      <Option
        tag="experiences"
        label="Experiences"
        status={optionsStatus["experiences"]}
        activateOption={activateOption}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      />
      <Option
        tag="online"
        label="Online Experiences"
        status={optionsStatus["online"]}
        activateOption={activateOption}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      />
    </div>
  );
}
