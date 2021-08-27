// react
import React, { useState, useRef, useLayoutEffect } from "react";
// next

// react-jss
import { createUseStyles, useTheme } from "react-jss";

// component
import SearchCard from "./searchCard";

// css
const useStyles = createUseStyles((theme) => ({
  location: {
    flex: 1,
    maxWidth: "calc(100% - 520px)",
  },
}));

// custom hook to use dynamic placeholder
const useDynamicSublabel = (ref, text) => {
  const [placeholder, setPlaceholder] = useState("");

  const resizePlaceholder = () => {
    const totalWidth = window.getComputedStyle(ref.current).width.slice(0, -2);

    const charsToAccomodate = Math.floor((parseInt(totalWidth) - 24 * 2) / 8);

    setPlaceholder(
      charsToAccomodate >= text.length
        ? text
        : text.slice(0, charsToAccomodate - 3) + "..."
    );
  };

  useLayoutEffect(() => {
    window.addEventListener("resize", resizePlaceholder);
    resizePlaceholder();
    return () => window.removeEventListener("resize", resizePlaceholder);
  }, []);

  return placeholder;
};

export default function Location({
  searchCard,
  setDividerBg = (f) => f,
  cardStyle = {},
  cardState = "default",
  updateElStates = (f) => f,
}) {
  const theme = useTheme();
  const classes = useStyles();
  const locationRef = useRef();
  const _sublabel = useDynamicSublabel(locationRef, searchCard.sublabel);

  const update = (state, bgColor) => {
    if (cardState === "active") return;
    setDividerBg(label, bgColor);
    updateElStates(label, state);
  };

  const handleMouseEnter = (event) => {
    // NOTE: need to check whether this card is a neighbouring card
    // in that case bgColor should be theme.background.color.secondary
    update("hover", theme.background.color.transparent);
  };

  const handleMouseLeave = (event) => {
    update("default", theme.background.color.secondary);
  };

  const handleOnClick = (event) => {
    update("active", theme.background.color.transparent);
  };

  return (
    <div
      ref={locationRef}
      className={classes.location}
      // onMouseEnter={handleMouseEnter}
      // onMouseLeave={handleMouseLeave}
      // onClick={handleOnClick}
    >
      <SearchCard
        label={searchCard.label}
        sublabel={_sublabel}
        cardStyle={cardStyle}
      />
    </div>
  );
}
