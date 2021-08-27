import "../css/index.css";
import Head from "next/head";
import Layout from "@components/layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>TAKEOFF</title>
        <meta
          name="Description"
          content="Crypto trading"
        />
      </Head>

      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
