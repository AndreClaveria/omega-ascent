import "@/styles/globals.scss";
import "@/styles/variable.scss";
import Head from "next/head";

import Logo from "p/img/logo_omega_ascent_line.svg";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href={Logo.src} />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

