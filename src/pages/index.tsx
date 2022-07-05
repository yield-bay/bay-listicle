import type { NextPage } from "next";
import Home from "@components/home";
import Layout from "@components/Layout";

const Index: NextPage = () => {
  return (
    <Layout>
      <Home />
    </Layout>
  );
};

export default Index;
