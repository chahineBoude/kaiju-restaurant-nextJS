import MainMenu from "@/components/containers/MainMenu";
import Layout from "@/components/Layout";

const Menu = () => (
  <div>
    <Head>
      <title>Menu</title>
      <meta property="og:menu" content="Menu Page" key="menu" />
    </Head>
    <Layout>
      <MainMenu />
    </Layout>
  </div>
);
export default Menu;
