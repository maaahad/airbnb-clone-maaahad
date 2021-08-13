// react
import React, {
  useState,
  useRef,
  useEffect,
  useLayoutEffect,
  useMemo,
} from "react";
// next

// react-jss
import { createUseStyles } from "react-jss";

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
const useDynamicPlaceholder = (ref, text) => {
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

export default function Location() {
  const text = "Where are you going?";
  const classes = useStyles();
  const locationRef = useRef();
  const placeholder = useDynamicPlaceholder(locationRef, text);
  // const [placeholder, setPlaceholder] = useState("");
  // const resizePlaceholder = () => {
  //   const totalWidth = window
  //     .getComputedStyle(locationRef.current)
  //     .width.slice(0, -2);

  //   const charsToAccomodate = Math.floor((parseInt(totalWidth) - 24 * 2) / 8);

  //   setPlaceholder(
  //     charsToAccomodate >= text.length
  //       ? text
  //       : text.slice(0, charsToAccomodate - 3) + "..."
  //   );
  // };

  // useLayoutEffect(() => {
  //   window.addEventListener("resize", resizePlaceholder);
  //   resizePlaceholder();
  //   return () => window.removeEventListener("resize", resizePlaceholder);
  // }, []);

  return (
    <div ref={locationRef} className={classes.location}>
      <SearchCard label="Location" placeholder={placeholder} />
    </div>
  );
}
