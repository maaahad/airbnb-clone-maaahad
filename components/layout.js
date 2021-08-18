// react

// next

// react-jss
import { createUseStyles } from "react-jss";

// components
import Navigation from "./nav/navigation";

// css
const useStyles = createUseStyles((theme) => ({
  layoutContainer: {
    // backgroundColor: theme.background.color.primary,
    display: "relative",
  },
}));

export default function Layout({ children }) {
  const classes = useStyles();
  return (
    <div className={classes.layoutContainer}>
      <Navigation />
      <main>{children}</main>
      <footer>This is footer</footer>
    </div>
  );
}
