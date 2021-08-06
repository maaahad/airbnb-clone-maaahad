// react

// next

// react-jss
import { createUseStyles } from "react-jss";

// components
import Headers from "./headers/headers";

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
      <Headers />
      <main>{children}</main>
      <footer>This is footer</footer>
    </div>
  );
}
