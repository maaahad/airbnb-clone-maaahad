// react

// next
import Image from "next/image";

// react-jss
import { createUseStyles } from "react-jss";

// css
const useStyles = createUseStyles((theme) => ({
  heroContainer: {
    display: "relative",
    height: 500,
  },
}));

export default function Hero() {
  const classes = useStyles();
  return (
    <div className={classes.heroContainer}>
      <Image src="/images/home_hero.jpg" alt="Home Hero" layout="fill" />
    </div>
  );
}
