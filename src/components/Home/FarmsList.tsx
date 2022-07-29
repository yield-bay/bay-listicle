import Image from "next/image";
import toDollarFormat from "@utils/toDollarFormat";
import { trackEventWithProperty } from "@utils/analytics";
import ShareFarm from "./ShareFarm";

const FarmsList = ({ farms }: any) => {
  // function formatFarmType(farmType: string): string {
  //   let formatted = farmType.slice(0, -3).toUpperCase(); // removed Amm and uppercased
  //   // formatted = formatted.slice(0, 1) + formatted.slice(1).toLowerCase();
  //   return formatted.concat(" SWAP");
  // }

  function formatFirstLetter(name: string): string {
    return name.slice(0, 1).toUpperCase() + name.slice(1);
  }

  function farmURL(protocol: string): string {
    if (protocol == "stellaswap") return "https://app.stellaswap.com/farm";
    if (protocol == "solarbeam") return "https://app.solarbeam.io/farm";
    return "";
  }

  return (
    <>
      {farms.map((farm: any) => (
        <tr key={`${farm.asset.address}-${farm.tvl}`}>
          <td className="whitespace-nowrap py-6 pl-4 pr-3 text-sm sm:pl-6 rounded-bl-lg">
            <div className="flex items-center">
              <div className="hidden md:flex flex-row items-center justify-center -space-x-2">
                <div className="z-0 flex overflow-hidden ring-2 ring-neutral-300 dark:ring-neutral-500 rounded-full bg-white dark:bg-neutral-800">
                  <Image
                    src={farm?.asset?.tokens[0]?.logo}
                    alt={farm?.asset?.tokens[0]?.symbol}
                    width={36}
                    height={36}
                  />
                </div>
                <div className="z-10 flex overflow-hidden ring-2 ring-neutral-300 dark:ring-neutral-500 rounded-full bg-white dark:bg-neutral-800">
                  <Image
                    src={farm?.asset?.tokens[1]?.logo}
                    alt={farm?.asset?.tokens[1]?.symbol}
                    width={36}
                    height={36}
                  />
                </div>
              </div>
              <div className="ml-2 flex flex-col gap-y-0.5">
                <div className="flex flex-row items-center">
                  <div className="font-semibold tracking-wide">
                    <span>{farm?.asset?.tokens[0]?.symbol}</span>
                    {" • "}
                    <span>{farm?.asset?.tokens[1]?.symbol}</span>
                  </div>
                  <div className="ml-2">
                    {/* <span className="tracking-wider items-center rounded bg-primary-50 dark:bg-primary-300 px-2 py-0.5 text-xs font-semibold text-primary-500 dark:text-neutral-900">
                      {formatFarmType(farm?.farm_type)}
                    </span> */}
                  </div>
                </div>
                <div className="text-neutral-500 dark:text-neutral-400 font-medium">
                  {formatFirstLetter(farm?.protocol)} on{" "}
                  {formatFirstLetter(farm?.chain)}
                </div>
              </div>
            </div>
          </td>
          <td className="whitespace-nowrap px-3 py-4 text-sm text-neutral-900 dark:text-neutral-100 font-semibold">
            {toDollarFormat(farm?.tvl)}
          </td>
          <td className="whitespace-nowrap px-3 py-4 text-sm text-neutral-900 dark:text-neutral-100 font-semibold">
            {(farm?.apr?.farm + farm?.apr?.trading).toFixed(2)}%
          </td>
          <td className="whitespace-nowrap py-4 pl-14 pr-4 sm:pl-4 sm:pr-6 text-right text-sm font-medium">
            <div className="relative flex items-center justify-start lg:justify-center">
              {/* Share Icon */}
              {/* {typeof window !== "undefined" &&
                window.location.search.length == 0 && ( // not showing share-icon in specific-farm view */}
              <div className="absolute -left-11 md:right-0 lg:right-1">
                <ShareFarm
                  farm={farm}
                  apr={(farm?.apr?.farm + farm?.apr?.trading).toFixed(2)}
                />
              </div>
              {/* )} */}
              <a
                href={farmURL(farm?.protocol)}
                target="_blank"
                rel="noreferrer"
              >
                <button
                  className="inline-flex items-center duration-50 rounded bg-primary-50 dark:bg-primary-300 px-5 py-2 transition-all duration-200 hover:shadow-lg font-semibold text-primary-500 dark:text-primary-800 active:bg-primary-200 hover:ring-2 ring-primary-400 dark:hover:bg-primary-200 dark:active:bg-primary-300"
                  onClick={() =>
                    trackEventWithProperty("go-to-farm", {
                      protocol: farm?.protocol,
                    })
                  }
                >
                  <p>Go to farm</p>
                </button>
              </a>
            </div>
          </td>
        </tr>
      ))}
    </>
  );
};

export default FarmsList;
