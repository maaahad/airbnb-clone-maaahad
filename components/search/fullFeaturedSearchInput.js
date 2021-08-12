// react

// next

// react-jss
import { createUseStyles } from "react-jss";

// component
import SearchCard from "./searchCard";
// css
const useStyles = createUseStyles((theme) => ({
  searchInput: {
    position: "relative",
    height: 66,
    width: "100%",
    display: "flex",
    flexFlow: "row nowrap",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: theme.background.color.primary,
    "& > *": {
      flex: 1,
    },
    border: theme.border.primary,
    borderRadius: 32,
    boxShadows: theme.shadows.fullFeaturedSearch,
  },
  checkinCheckout: {
    display: "flex",
    flexFlow: "row nowrap",
    alignItems: "center",
    justifyContent: "space -between",
  },
  guestsNSeachIcon: {
    display: "flex",
    flexFlow: "row nowrap",
    alignItems: "center",
    justifyContent: "space -between",
  },
}));

export default function FullFeaturedSearchInput() {
  const classes = useStyles();
  return (
    <div className={classes.searchInput}>
      <div>
        <SearchCard label="Location" placeholder="Where are you going?" />
      </div>
      <div className={classes.checkinCheckout}>
        <SearchCard label="Checkin" placeholder="Add dates" />
        <SearchCard label="Checkout" placeholder="Add dates" />
      </div>
      <div className={classes.guestsNSeachIcon}>
        <SearchCard label="Checkout" placeholder="Add dates" />
        <div>Search Icons</div>
      </div>
    </div>
  );
}
