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
  bottomBorder: (styles) => ({
    // This is activated on hover and onclick
    position: "absolute",
    bottom: 2,
    left: 0,
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "& > div": {
      backgroundColor: theme.typography.color.tertiary,
      transition: theme.transition.all,
      ...styles,
    },
  }),
}));

function Option({
  label,
  optionId,
  activateOption = (f) => f,
  status,
  activeStyles,
}) {
  const theme = useTheme();
  const [styles, setStyles] = useState(activeStyles);

  console.log(optionId, status, styles, activeStyles);

  const classes = useStyles(styles);

  const onMouseEnter = (event) => {
    status === "default" &&
      setStyles({
        width: 5,
        height: 2,
      });
  };

  const onMouseLeave = (event) => {
    status === "default" &&
      setStyles({
        width: 0,
        height: 0,
      });
  };
  const onClick = (event) => {
    activateOption(optionId);
  };

  return (
    <div
      className={classes.searchOption}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
    >
      <a>{label}</a>
      <div className={classes.bottomBorder}>
        <div></div>
      </div>
    </div>
  );
}

export default function SearchOptions() {
  // this component should control the styling of each option
  // by using a state
  const optionStyles = {
    default: {
      width: 0,
      height: 0,
    },
    activated: {
      width: 20,
      height: 2,
    },
  };
  const theme = useTheme();
  const [activeOption, setActiveOption] = useState("places");
  const classes = useStyles();

  console.log("activeOption, ", activeOption);

  const activateOption = (optionId) => {
    setActiveOption(optionId);
  };

  return (
    <div className={classes.searchOptions}>
      <Option
        label="Places to stay"
        optionId="places"
        activateOption={activateOption}
        status={activeOption === "places" ? "activated" : "default"}
        activeStyles={
          activeOption === "places"
            ? optionStyles.activated
            : optionStyles.default
        }
      />
      <Option
        label="Experiences"
        optionId="experiences"
        activateOption={activateOption}
        status={activeOption === "experiences" ? "activated" : "default"}
        activeStyles={
          activeOption === "experiences"
            ? optionStyles.activated
            : optionStyles.default
        }
      />
      <Option
        label="Online Experiences"
        optionId="online"
        activateOption={activateOption}
        status={activeOption === "online" ? "activated" : "default"}
        activeStyles={
          activeOption === "online"
            ? optionStyles.activated
            : optionStyles.default
        }
      />
    </div>
  );
}
