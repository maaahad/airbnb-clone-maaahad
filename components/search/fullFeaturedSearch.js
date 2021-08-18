// react

// next

// react-jss
import { createUseStyles } from "react-jss";

// components
import SearchOptions from "../nav/searchOptions";
import FullFeaturedSearchInput from "./fullFeaturedSearchInput";
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
  searchInput: {
    width: "100%",
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
    <form className={classes.FullFeaturedSearch}>
      <div className={classes.searchOptions}>
        <SearchOptions />
      </div>
      <div className={classes.searchInput}>
        <FullFeaturedSearchInput />
      </div>
    </form>
  );
}
