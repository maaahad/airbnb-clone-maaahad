// react

// next

// react-jss
import { createUseStyles } from "react-jss";

// components
import NoScrolledTopNav from "./noScrolledTopNav";
import FullFeaturedSearch from "./fullFeaturedSearch";

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
  "@media screen and (min-width: 743px)": {
    fullFeaturedSearch: {
      display: "block",
    },
  },
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
