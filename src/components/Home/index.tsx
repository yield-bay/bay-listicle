import { useState, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import ListicleTable from "./ListicleTable";
import SearchInputGroup from "./SearchInputGroup";
import useFilteredFarms from "@hooks/useFilteredFarms";
import useSpecificFarm from "@hooks/useSpecificFarm";
import { fetchListicleFarms } from "@utils/api";
import { trackPageView } from "@utils/analytics";
import Notification from "@components/common/Notification";

const Home = () => {
  const router = useRouter();
  const [farms, setFarms] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredFarms, noFilteredFarms] = useFilteredFarms(farms, searchTerm);
  // Specific Farm state: Have the farm returened from the useSpecificFarm Hook
  const [farmQuery, setFarmQuery] = useState<string | string[] | undefined>("");
  const [idQuery, setIdQuery] = useState<string | string[] | undefined>();
  const specificFarm = useSpecificFarm(farms, farmQuery, idQuery);

  useEffect(() => {
    setFarmQuery(router.query.farm);
    setIdQuery(router.query.id);
  }, [router]);

  useEffect(() => {
    fetchListicleFarms().then((res: any) => {
      setFarms(res?.farms);
    });

    trackPageView();
  });

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
                  Yield Farms 🌾 from the Paraverse 🌌
                </h1>
                <p className="text-base font-normal text-neutral-600 dark:text-neutral-200 mt-0.5">
                  Discover yield opportunities across multiple protocols and{" "}
                  <span className="font-semibold">
                    Parachains on{" "}
                    <span className="underline underline-offset-2 decoration-wavy decoration-pink-500">
                      Polkadot
                    </span>{" "}
                    &amp;{" "}
                    <span className="underline underline-offset-2 decoration-wavy decoration-cyan-500">
                      Kusama
                    </span>
                  </span>
                </p>
                {!idQuery && (
                  <div className="max-w-lg mt-8">
                    <SearchInputGroup
                      term={searchTerm}
                      setTerm={setSearchTerm}
                    />
                  </div>
                )}
              </div>
              {/* Listicle Table */}
              <div className="px-4 mx-auto max-w-6xl sm:px-6 md:px-8">
                {!idQuery ? (
                  <ListicleTable
                    farms={filteredFarms}
                    noResult={noFilteredFarms}
                  />
                ) : (
                  <ListicleTable
                    farms={specificFarm}
                    noResult={noSpecificFarm}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Notification />
    </div>
  );
};

export default Home;
