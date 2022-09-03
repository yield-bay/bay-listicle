import { createClient, defaultExchanges, gql } from "@urql/core";

const client = createClient({
  url: process.env.NEXT_PUBLIC_API_URL as string,
  exchanges: defaultExchanges,
});

export const fetchListicleFarms = async () => {
  const farmObj = await client
    .query(
      gql`
        query Farms {
          farms {
            id
            chef
            chain
            protocol
            farmType
            farmImpl
            asset {
              symbol
              address
              price
              logos
            }
            tvl
            rewards {
              amount
              asset
              valueUSD
              freq
            }
            apr {
              reward
              base
            }
            allocPoint
          }
        }
      `
    )
    .toPromise();

  const farms = farmObj?.data?.farms;
  const filteredFarms = farms.filter((f: any) => {
    // Filter out inactive farms.
    const solarbeamIds = [13];
    const beamswapIds = [15, 18, 19];
    const stellaswapIds = [11, 12, 13];
    if (f.protocol === "solarbeam") {
      if (solarbeamIds.includes(f.id)) return false;
    }
    if (f.protocol === "beamswap") {
      if (beamswapIds.includes(f.id)) return false;
    }
    if (f.protocol === "stellaswap") {
      if (
        stellaswapIds.includes(f.id) &&
        f.chef === "0xF3a5454496E26ac57da879bf3285Fa85DEBF0388"
      )
        return false;
    }
    return true;
  });

  return {
    farms: filteredFarms,
  };
};
