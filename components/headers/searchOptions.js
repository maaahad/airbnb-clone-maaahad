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
  animatedBorder: (styles) => {
    console.log(styles);
    return {
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
    };
  },
}));

const optionStyles = {
  default: {
    width: 0,
    height: 0,
  },
  hover: {
    width: 5,
    height: 2,
  },
  activated: {
    width: 20,
    height: 2,
  },
};

function Option({
  label,
  optionId,
  status = "default",
  activateOption = (f) => f,
}) {
  console.log(optionId, status);
  const theme = useTheme();
  const [styles, setStyles] = useState(
    status === "default" ? optionStyles.default : optionStyles.activated
  );
  const classes = useStyles(styles);
  const onMouseEnter = (event) => {
    setStyles(optionStyles.hover);
  };
  const onMouseLeave = (event) => {
    setStyles(optionStyles.default);
  };
  const onClick = (event) => {
    // setStyles({
    //   ...optionStyles.activated,
    //   backgroundColor: theme.palette.common.white,
    // });
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
      <div className={classes.animatedBorder}>
        <div></div>
      </div>
    </div>
  );
}

export default function SearchOptions() {
  // this component should control the styling of each option
  // by using a state
  const theme = useTheme();
  const [activeOption, setActiveOption] = useState("");
  const classes = useStyles();

  const activateOption = (optionId) => {
    setActiveOption(optionId);
  };

  return (
    <div className={classes.searchOptions}>
      <div className={classes.offline}>
        <Option
          label="Places to stay"
          activateOption={activateOption}
          optionId="places"
          status={activeOption === "places" ? "activated" : "default"}
        />
        <Option
          label="Experiences"
          activateOption={activateOption}
          optionId="experiences"
          status={activeOption === "experiences" ? "activated" : "default"}
        />
      </div>
      <Option
        label="Online Experiences"
        activateOption={activateOption}
        optionId="online"
        status={activeOption === "online" ? "activated" : "default"}
      />
    </div>
  );
}
