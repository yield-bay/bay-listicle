import type { NextPage } from "next";
import Home from "@components/Home";
import Layout from "@components/Layout";
import { fetchListicleFarms } from "@utils/api";
import { trackPageView } from "@utils/analytics";

const Index: NextPage = ({ farms }: any) => {
  return (
    <Layout>
      <Home farms={farms} />
    </Layout>
  );
};

export default Index;

export async function getServerSideProps() {
  const farmsObj = await fetchListicleFarms();
  const farms = farmsObj?.farms;
  trackPageView();
  return {
    props: {
      farms,
    },
  };
}
