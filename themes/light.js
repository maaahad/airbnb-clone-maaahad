export default {
  breakpoints: {
    xs: "0px",
    sm: "600px",
    md: "960px",
    lg: "1280px",
    xl: "1920px",
    // replace navBp1 by sm
    navBp1: "743px",
    // replace navBp2 by md
    navBp2: "950px",
  },
  palette: {
    common: {
      white: "#ffffff",
      black: "#000000",
      transparent: "transparent",
    },
    signature: "#ff385c",
  },
  typography: {
    fontFamily:
      "Circular, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, sans-serif",
    color: {
      primary: "#222222",
      secondary: "#717171",
      tertiary: "#7e7e7e",
    },
    // font
    fontSize: "14px",
    // fontweight
    // title, subtitle, subtitle1, subtitle2
    navText: {
      fontSize: "14px",
      lineHeight: "18px",
      fontWeight: "600",
    },
    linkText: {
      fontSize: "16px",
      lineHeight: "20px",
      fontWeight: "300",
    },
    searchCardLavel: {
      fontSize: "12px",
      lineHeight: "16px",
      fontWeight: "700",
      letterSpacing: "0.04em",
    },
    searchCardPlaceholder: {
      fontSize: "14px",
      lineHeight: "18px",
      fontWeight: "200",
    },
  },
  background: {
    color: {
      primary: "#f7f7f7",
      secondary: "#ebebeb",
      transparent: "transparent",
    },
  },
  border: {
    primary: "1px solid #dddddd",
    transparent: "1px solid transparent",
  },
  shapes: {
    round: "50%",
  },
  shadows: {
    fullFeaturedSearch:
      "rgba(0, 0, 0, 0.15) 0px 16px 32px, rgba(0, 0, 0, 0.1) 0px 3px 8px",
    search: "rgba(0, 0, 0, 0.08) 0px 1px 2px, rgba(0, 0, 0, 0.05) 0px 4px 12px",
    hover: "rgba(0,0,0,0.18) 0px 2px 4px",
  },
  transition: {
    all: "all .5s ease-out",
  },
  zIndex: {
    nav: 1000,
  },
};
