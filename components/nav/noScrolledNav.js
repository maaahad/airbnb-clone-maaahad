// react

// next

// react-jss
import { createUseStyles } from "react-jss";

// components
import NoScrolledTopNav from "./noScrolledTopNav";
import FullFeaturedSearch from "../search/fullFeaturedSearch";

// css

const useStyles = createUseStyles((theme) => ({
  noScrolledNav: {
    display: "flex",
    flexFlow: "column wrap",
    alignItems: "stretch",
    justifyContent: "flex-start",
  },
  fullFeaturedSearch: {
    display: "none",
  },
  // implement a method to create breakpoint : createMinWidthBreakPoints in theme ...
  [`@media screen and (min-width: ${theme.breakpoints.navBp1})`]: {
    fullFeaturedSearch: {
      display: "block",
    },
  },
  // "@media screen and (min-width: 743px)": {
  //   fullFeaturedSearch: {
  //     display: "block",
  //   },
  // },
}));

export default function NoScrolledNav() {
  const classes = useStyles();
  return (
    <div className={classes.noScrolledNav}>
      <NoScrolledTopNav />
      <div className={classes.fullFeaturedSearch}>
        <FullFeaturedSearch />
      </div>
    </div>
  );
}
