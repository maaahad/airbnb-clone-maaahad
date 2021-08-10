// react

// next
import Image from "next/image";
// react-jss
import { createUseStyles } from "react-jss";

// css
const useStyles = createUseStyles((theme) => ({
  logo: {
    height: "100%",
    width: 32,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

export default function Logo() {
  const classes = useStyles();
  return (
    <div className={classes.logo}>
      <Image src="/logo.png" width={30} height={32} />
    </div>
  );
}
