// react

// next
import Image from "next/image";
import Link from "next/link";
// react-icons
import { BiGlobe } from "react-icons/bi";
import { FaBars, FaUserCircle } from "react-icons/fa";

// react-jss
import { createUseStyles } from "react-jss";
// css
const useStyles = createUseStyles((theme) => ({
  rightNavRoot: {
    display: "flex",
    flexFlow: "row nowrap",
    alignItems: "center",
    justifyConent: "space-between",
    "& > * + *": {
      marginLeft: 5,
    },
  },
  host: {
    display: "none",
    "& > a": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: 42,
      width: "auto",
      padding: 12,
      borderRadius: 21,
      ...theme.typography.navText,
    },
    "& > a:hover": {
      backgroundColor: theme.background.color.transparent,
    },
  },
  translate: {
    "& > a": {
      width: 42,
      height: 42,
      borderRadius: theme.shapes.round,
      padding: 12,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    "& > a:hover": {
      backgroundColor: theme.background.color.transparent,
    },
    "& > a > svg": {
      width: 16,
      height: 16,
    },
  },
  rightNavUser: {
    position: "relative",
    backgroundColor: theme.palette.common.white,
    width: 77,
    height: 42,
    borderRadius: 21,
    display: "flex",
    flexFlow: "row nowrap",
    alignItems: "center",
    justifyContent: "space-between",
    border: theme.border.primary,
    borderRadius: 21,
    boxShadow: theme.shadows.hover,
    padding: {
      left: 12,
      right: 6,
    },
    "& > a": {
      display: "flex",
      color: theme.palette.common.black,
    },
    "&:hover": {
      cursor: "pointer",
    },
    "& > a:nth-of-type(1) > svg": {
      width: 16,
      height: 16,
      color: theme.typography.color.primary,
    },
    "& > a:nth-of-type(2) > svg": {
      width: 30,
      height: 30,
      color: theme.typography.color.secondary,
    },
  },
  redDot: {
    width: 14,
    height: 14,
    border: `1.5px solid ${theme.palette.common.white}`,
    borderRadius: theme.shapes.round,
    backgroundColor: theme.palette.signature,
    position: "absolute",
    top: 1,
    right: 2,
  },
  //   media condition to hide host or translate on different screen size
  "@media screen and (min-width: 700px)": {
    host: {
      display: "block",
    },
  },
}));

export default function RightNav() {
  const classes = useStyles();
  return (
    <div className={classes.rightNavRoot}>
      <div className={classes.host}>
        <Link href="#" passHref>
          <a>Become a host</a>
        </Link>
      </div>

      <div className={classes.translate}>
        <Link href="#" passHref>
          <a>
            <BiGlobe />
          </a>
        </Link>
      </div>
      <div className={classes.rightNavUser}>
        <a>
          <FaBars />
        </a>
        <a>
          <FaUserCircle />
        </a>
        <div className={classes.redDot}></div>
      </div>
    </div>
  );
}
