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
    backgroundColor: theme.background.color.transparent,
    "&:focus": {},
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
  cardStyle = {},
  cardState = "default",
  updateElStates = (f) => f,
}) {
  // const theme = useTheme();
  const classes = useStyles();
  // const update = (state, bgColor) => {
  //   if (cardState === "active") return;
  //   setDividerBg(label, bgColor);
  //   updateElStates(label, state);
  // };
  // const handleMouseEnter = (event) => {
  //   // NOTE: need to check whether this card is a neighbouring card
  //   // in that case bgColor should be theme.background.color.secondary
  //   update("hover", theme.background.color.transparent);
  // };

  // const handleMouseLeave = (event) => {
  //   update("default", theme.background.color.secondary);
  // };

  // const handleOnClick = (event) => {
  //   update("active", theme.background.color.transparent);
  // };

  return (
    <div className={classes.searchCard} style={{ ...cardStyle }}>
      <div className={classes.searchLabel}>{label}</div>
      <div className={classes.searchPlaceholder}>{placeholder}</div>
    </div>
  );
}
