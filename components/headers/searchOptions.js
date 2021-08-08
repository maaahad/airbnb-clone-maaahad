// react
// next

// react-jss
import { createUseStyles } from "react-jss";

// css
const useStyles = createUseStyles((theme) => ({
  searchOptions: {
    height: 80,
    display: "flex",
    flexFlow: "row nowrap",
    alignItems: "center",
    justifyContent: "center",
  },
  offline: {
    display: "flex",
    flexFlow: "row nowrap",
    alignItems: "center",
    justifyContent: "center",
  },
  searchOption: {
    position: "relative",
    height: 40,
    "& > a": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "100%",
      padding: {
        top: 10,
        right: 12,
        bottom: 10,
        left: 12,
      },
      ...theme.typography.linkText,
      color: "inherit",
    },
    "& > a:hover": {
      color: theme.typography.color.tertiary,
      cursor: "pointer",
    },
  },
  animatedBorder: {
    // This is activated on hover and onclick
    position: "absolute",
    bottom: 2,
    left: 0,
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "& > div": {
      width: 5,
      height: 2,
      backgroundColor: theme.palette.common.white,
    },
  },
}));

export default function SearchOptions() {
  const classes = useStyles();
  //  TODO : add animatedBorderHover and animatedBorderActive to simulate
  // animation
  // use css animation or transition
  return (
    <div className={classes.searchOptions}>
      <div className={classes.offline}>
        <div className={classes.searchOption}>
          <a>Places to stay</a>
          <div className={classes.animatedBorder}>
            <div></div>
          </div>
        </div>
        <div className={classes.searchOption}>
          <a>Experiences</a>
          <div className={classes.animatedBorder}>
            <div></div>
          </div>
        </div>
      </div>
      <div className={classes.searchOption}>
        <a>Online Experiences</a>
        <div className={classes.animatedBorder}>
          <div></div>
        </div>
      </div>
    </div>
  );
}
