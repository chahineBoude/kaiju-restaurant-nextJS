import MainMenu from "@/components/containers/MainMenu";
import Layout from "@/components/Layout";

const Menu = () => (
  <div>
    <Head>
      <title>Kaiju Restaurant</title>
      <meta property="og:title" content="Kaiju Restaurant" key="title" />
    </Head>
    <Layout>
      <MainMenu />
    </Layout>
  </div>
);
export default Menu;
