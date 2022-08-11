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
    console.log(f);

    if (f.protocol === "solarbeam") {
      if (f.id === 42) return false;
    }
    if (f.protocol === "stellaswap") {
      if (f.id === 20) return false;
    }
    return true;
  });

  return {
    farms: filteredFarms,
  };
};
