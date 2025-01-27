import React from "react";
import Head from "next/head";

const title = "Enshrouded Fähigkeitenplaner";
const description = "Ein Planer für den Fähigkeitenbaum im Spiel Enshrouded.";

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
