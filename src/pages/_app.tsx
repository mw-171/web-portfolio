import React from "react";
import { AppProps } from "next/app";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "../styles/global.css";
import Layout from "../components/layout";

// font awesome's runtime css injection doesn't fire on every page, which left
// icons sized 0x0 (invisible) on portfolio; load its stylesheet ourselves
config.autoAddCss = false;

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
