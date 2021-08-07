// react

// react-icons

import { BiGlobe } from "react-icons/bi";
import { FaBars, FaUserCircle } from "react-icons/fa";

// next
import Image from "next/image";
import Link from "next/link";
// react-jss
import { createUseStyles } from "react-jss";

// components
import RightNav from "./rightNav";
import NoScrolledNav from "./noScrolledNav";

// css

const useStyles = createUseStyles((theme) => ({
  headersContainer: {
    padding: {
      left: 40,
      right: 40,
    },
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    backgroundColor: "transparent",
    zIndex: theme.zIndex.nav,
    color: theme.palette.common.white,
  },
}));

// TODO: push to remove origin dev

export default function Headers() {
  const classes = useStyles();
  return (
    <header className={classes.headersContainer}>
      <NoScrolledNav />
    </header>
  );
}
