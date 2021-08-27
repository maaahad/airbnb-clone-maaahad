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
  searchSublabel: {
    color: theme.typography.color.secondary,
    ...theme.typography.searchCardPlaceholder,
  },
}));

export default function SearchCard({ card }) {
  const classes = useStyles();

  return (
    <div className={classes.searchCard} style={{ ...card.style }}>
      <div className={classes.searchLabel}>{card.label}</div>
      <div className={classes.searchSublabel}>{card.sublabel}</div>
    </div>
  );
}
