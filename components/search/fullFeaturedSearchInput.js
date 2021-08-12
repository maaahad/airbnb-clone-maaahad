// react

// next

// react-jss
import { createUseStyles } from "react-jss";

// component
import Location from "./location";
import Guests from "./guests";
import Check from "./check";
// css
const useStyles = createUseStyles((theme) => ({
  searchInput: {
    position: "relative",
    width: "100%",
    height: 66,
    display: "flex",
    flexFlow: "row nowrap",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: theme.background.color.primary,
    "& > *": {
      //   flex: 1,
    },
    border: theme.border.primary,
    borderRadius: 32,
    boxShadows: theme.shadows.fullFeaturedSearch,
  },
  divider: {
    // top and bottom padding for SearchCard will be 14px
    // 66 - 14 - 14 = 38
    height: 38,
    width: 1,
    backgroundColor: theme.background.color.secondary,
  },
  //   checkinCheckout: {
  //     display: "flex",
  //     flexFlow: "row nowrap",
  //     alignItems: "center",
  //     justifyContent: "space -between",
  //   },
  //   guestsNSeachIcon: {
  //     display: "flex",
  //     flexFlow: "row nowrap",
  //     alignItems: "center",
  //     justifyContent: "space -between",
  //   },
}));

export default function FullFeaturedSearchInput() {
  const classes = useStyles();
  return (
    <div className={classes.searchInput}>
      <Location />
      <div className={classes.divider}></div>
      <Check />
      <div className={classes.divider}></div>
      <Guests />
      {/* <div className={classes.checkinCheckout}>
        <SearchCard label="Checkin" placeholder="Add dates" />
        <SearchCard label="Checkout" placeholder="Add dates" />
      </div>
      <div className={classes.guestsNSeachIcon}>
        <SearchCard label="Checkout" placeholder="Add dates" />
        <div>Search Icons</div>
      </div> */}
    </div>
  );
}
