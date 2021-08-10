// react

// next

// react-jss
import { createUseStyles } from "react-jss";

// components
import SearchOptions from "./searchOptions";

// css
const useStyles = createUseStyles((theme) => ({
  fullFeaturedSearch: {
    display: "flex",
    flexFlow: "column wrap",
    alignItems: "stretch",
    justifyContent: "flex-start",
  },
  searchOptions: {
    display: "block",
  },
  "@media screen and (min-width: 950px)": {
    searchOptions: {
      display: "none",
    },
  },
}));

export default function FullFeaturedSearch() {
  const classes = useStyles();
  return (
    <div className={classes.FullFeaturedSearch}>
      <div className={classes.searchOptions}>
        <SearchOptions />
      </div>
      <div>Full Featured Search Input </div>
    </div>
  );
}
