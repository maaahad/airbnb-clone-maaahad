// react

// next

// react-jss
import { createUseStyles } from "react-jss";

// components
import SearchOptions from "./searchOptions";

// css
const useStyles = createUseStyles((theme) => ({
  fullFeaturedSearch: {
    height: 66,
    width: "100%",
    display: "flex",
    flexFlow: "column wrap",
    alignItems: "stretch",
    justifyContent: "flex-start",
  },
  searchOptions: {
    display: "block",
  },
  searchInputs: {
    backgroundColor: "red",
    display: "flex",
    flexFlow: "row nowrap",
    alignItems: "center",
    justifyContent: "space-between",
  },
  checkInCheckOut: {
    backgroundColor: "blue",
    flex: 1,
    display: "flex",
    flexFlow: "row nowrap",
    alignItems: "center",
    justifyContent: "space-between",
  },
  guestsNSearch: {
    backgroundColor: "green",
    flex: 1,
    display: "flex",
    flexFlow: "row nowrap",
    alignItems: "center",
    justifyContent: "space-between",
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
      <div className={classes.searchInputs}>
        <div>Location</div>
        <div className={classes.checkInCheckOut}>
          <div>Check in</div>
          <div>Check out</div>
        </div>
        <div className={classes.guestsNSearch}>
          <div>Guests</div>
          <div>Search Icon</div>
        </div>
      </div>
    </div>
  );
}
