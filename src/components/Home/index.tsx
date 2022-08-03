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
import { XIcon } from "@heroicons/react/solid";
import Tooltip from "@components/common/Tooltip";
import SpecificFarm from "./SpecificFarm";

const Home = () => {
  const router = useRouter();
  const [farms, setFarms] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredFarms, noFilteredFarms] = useFilteredFarms(farms, searchTerm);
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
                {!idQuery ? (
                  <div className="max-w-lg mt-8">
                    <SearchInputGroup
                      term={searchTerm}
                      setTerm={setSearchTerm}
                    />
                  </div>
                ) : (
                  <div className="inline-flex items-center space-x-2 mt-8">
                    <Tooltip content="back to all farms" position="top">
                      <button
                        className="w-max h-max rounded-full bg-black text-neutral-600 hover:text-neutral-900 dark:text-neutral-200 hover:dark:text-white dark:bg-white bg-opacity-5 dark:bg-opacity-20 active:bg-opacity-10 dark:active:bg-opacity-[0.15] hover:scale-105 active:scale-100 cursor-default p-1.5 transition-all duration-150"
                        onClick={() => router.push("/")}
                      >
                        <XIcon className="w-5 h-5" />
                      </button>
                    </Tooltip>
                    <p className="text-neutral-900 dark:text-neutral-100 text-xs md:text-base font-medium">
                      Showing Yield Farm with address {farmQuery} and pool ID:{" "}
                      {idQuery}
                    </p>
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
                  <SpecificFarm farms={specificFarm} noResult={false} />
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
