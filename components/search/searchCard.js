// react
// import React, { useState } from "react";
// next

// react-jss
import { createUseStyles, useTheme } from "react-jss";

// css
const useStyles = createUseStyles((theme) => ({
  searchCard: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexFlow: "column wrap",
    alignItems: "flex-start",
    justityContent: "center",
    padding: {
      top: 14,
      bottom: 14,
      right: 24,
      left: 24,
    },
    border: theme.border.transparent,
    borderRadius: 32,
    "&:focus": {
      // backgroundColor: theme.palette.common.white,
      // backgroundColor: "red",
    },
    "&:hover": {
      backgroundColor: theme.background.color.secondary,
      cursor: "pointer",
    },
  },
  searchLabel: {
    color: theme.typography.color.primary,
    paddingBottom: 2,
    ...theme.typography.searchCardLavel,
  },
  searchPlaceholder: {
    color: theme.typography.color.secondary,
    ...theme.typography.searchCardPlaceholder,
  },
}));

export default function SearchCard({
  label,
  placeholder,
  setDividerBg = (f) => f,
  cardStyles = {},
  updateStyles = (f) => f,
}) {
  // each card will receive it's state and will update it root background and box-shadow
  // use useDividerWithDynamicBg like hoos, or make it general to control background

  const theme = useTheme();
  const classes = useStyles();
  const handleMouseEnter = (event) => {
    setDividerBg(label, theme.background.color.transparent);
  };

  const handleMouseLeave = (event) => {
    setDividerBg(label, theme.background.color.secondary);
  };

  const handleOnClick = (event) => {
    setDividerBg(label, "red");
    // color should goes from here
    updateStyles(label);
  };

  return (
    <div
      className={classes.searchCard}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleOnClick}
      style={{ ...cardStyles }}
    >
      <div className={classes.searchLabel}>{label}</div>
      <div className={classes.searchPlaceholder}>{placeholder}</div>
    </div>
  );
}
