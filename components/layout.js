// react

// next

// react-jss
import { createUseStyles } from "react-jss";

// components

// css
const useStyles = createUseStyles((theme) => ({
  layoutContainer: {
    backgroundColor: theme.background.color.primary,
  },
}));

export default function Layout({ children }) {
  const classes = useStyles();
  return (
    <div className={classes.layoutContainer}>
      <header>This is header</header>
      <main>{children}</main>
      <footer>This is footer</footer>
    </div>
  );
}
