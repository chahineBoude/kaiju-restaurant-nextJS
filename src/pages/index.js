import AboutUs from "@/components/containers/AboutUs";
import FindUs from "@/components/containers/FindUs";
import Header from "@/components/containers/Header";
import SpecialMenu from "@/components/containers/SpecialMenu";
import Layout from "@/components/Layout";
import Head from "next/head";

const App = () => (
  <div>
    <Head>
      <title>Kaiju Restaurant</title>
      <meta property="og:title" content="Kaiju Restaurant" key="title" />
    </Head>
    <>
      <Layout>
        <Header />
        <AboutUs />
        <SpecialMenu />
        <FindUs />
      </Layout>
      {/* 
      <Intermission />
      <FindUs />
      <Footer /> */}
    </>
  </div>
);

export default App;
