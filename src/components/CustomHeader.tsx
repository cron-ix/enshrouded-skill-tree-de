import React from "react";
import Head from "next/head";

const title = "Enshrouded Fähigkeiten Planer";
const description = "Ein Fähigkeiten-Baum Planer für das Spiel Enshrouded.";

const CustomHeader = () => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {/* <meta property="og:url" content={baseUrl} /> */}
    </Head>
  );
};

export default CustomHeader;
