import "mapbox-gl/dist/mapbox-gl.css";

import Head from "next/head";
import React from "react";
import ErrorBoundary from "../components/Error";

function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
        />
      </Head>
      <ErrorBoundary>
        <Component {...pageProps} />
      </ErrorBoundary>
    </React.Fragment>
  );
}

export default MyApp;
