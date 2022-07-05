// import { useState, useEffect } from "react";
// import { fetchListicleFarms } from "@utils/api";

import Head from "next/head";
import ListicleTable from "./ListicleTable";

const Home = () => {
  // const [farms, setFarms] = useState([]);

  // useEffect(() => {
  //   fetchListicleFarms().then((res: any) => {
  //     setFarms(res?.farms);
  //     console.log('farms:', res);
  //   });
  // }, []);

  return (
    <div>
      <Head>
        <title>YieldBay Farms</title>
        <meta
          name="description"
          content="YieldBay App list of liquidity farms"
        />
      </Head>

      <main>
        <div className="flex flex-col flex-1">
          <div className="flex-1">
            <div className="py-6">
              {/* Title and sub-heading section */}
              <div className="px-4 mx-auto max-w-7xl sm:px-6 md:px-8 mb-4">
                <h1 className="text-xl font-heading font-semibold md:text-2xl">
                  List of Farms in Dotsama Ecosystem
                </h1>
                <p className="text-base font-normal text-neutral-600 dark:text-neutral-200 mt-0.5">
                  Checkout all the available farms in dotsama ecosystem.
                </p>
              </div>
              {/* Listicle Table Section */}
              <div className="px-4 mx-auto max-w-7xl mt-6 sm:px-6 md:px-8">
                <ListicleTable />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
