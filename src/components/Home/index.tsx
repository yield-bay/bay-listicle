import { useState, useEffect } from "react";
import Head from "next/head";
import { fetchListicleFarms } from "@utils/api";
import ListicleTable from "./ListicleTable";

const Home = () => {
  const [farms, setFarms] = useState([]);

  useEffect(() => {
    fetchListicleFarms().then((res: any) => {
      setFarms(res?.farms);
    });
  }, []);

  return (
    <div>
      <Head>
        <title>YieldBay Farms</title>
        <meta
          name="description"
          content="YieldBay List | Discover Yield Farms in DotSama"
        />
      </Head>

      <main>
        <div className="flex flex-col flex-1">
          <div className="flex-1">
            <div className="py-16">
              <div className="px-4 mx-auto max-w-6xl sm:px-6 md:px-8 mb-4">
                <h1 className="font-heading font-semibold text-2xl">
                  List of Farms in Dotsama Ecosystem
                </h1>
                <p className="text-base font-normal text-neutral-600 dark:text-neutral-200 mt-0.5">
                  Checkout all the available farms in dotsama ecosystem
                </p>
              </div>
              {/* Listicle Table */}
              <div className="px-4 mx-auto max-w-6xl sm:px-6 md:px-8">
                <ListicleTable farms={farms} />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
