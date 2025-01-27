import React from "react";
import Head from "next/head";

const title = "Enshrouded F&auml;higkeitenplaner";
const description = "Ein Planer für den F&auml;higkeitenbaum im Spiel Enshrouded.";

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
