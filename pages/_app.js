// Reference for JSS issue on NextJS fast refresh
// https://medium.com/wesionary-team/implementing-react-jss-on-next-js-projects-7ceaee985cad
// https://github.com/mui-org/material-ui/tree/next/examples/nextjs

import React from "react";

// react-jss
import { ThemeProvider } from "react-jss";

// components
import Layout from "../components/layout";

// theme
import lightTheme from "../themes/light";

// css
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }) {
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#server-side-styles");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  return (
    <>
      <Head>
        <title>Airbnb - Clone - maaahad</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <ThemeProvider theme={lightTheme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
