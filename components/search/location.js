// react

// next

// react-jss
import { createUseStyles } from "react-jss";

// component
import SearchCard from "./searchCard";

// css
const useStyles = createUseStyles((theme) => ({
  location: {
    flex: 1,
  },
}));

export default function Location() {
  const classes = useStyles();
  return (
    <div className={classes.location}>
      <SearchCard label="Location" placeholder="Where are you going?" />
    </div>
  );
}
