import AboutUs from "@/components/containers/AboutUs";
import FindUs from "@/components/containers/FindUs";
import Footer from "@/components/containers/Footer";
import Header from "@/components/containers/Header";
import Pics from "@/components/containers/Pics";
import SpecialMenu from "@/components/containers/SpecialMenu";
import Layout from "@/components/Layout";

const App = () => (
  <div>
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
