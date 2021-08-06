// Reference for JSS issue on NextJS fast refresh
// https://medium.com/wesionary-team/implementing-react-jss-on-next-js-projects-7ceaee985cad
// https://github.com/mui-org/material-ui/tree/next/examples/nextjs

// react-jss
import { ThemeProvider } from "react-jss";

// components
import Layout from "../components/layout";

// theme
import lightTheme from "../themes/light";

// css
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={lightTheme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
