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
            chain
            protocol
            farm_type
            farm_implementation
            asset {
              address
              name
              tokens {
                symbol
                price
                logo
              }
            }
            id
            tvl
            rewards {
              token {
                symbol
                price
              }
              amount
              value_usd
              freq
            }
            apr {
              farm
              trading
              base
              reward
            }
            url
          }
        }
      `
    )
    .toPromise();

  const farms = farmObj?.data?.farms;

  return {
    farms: farms,
  };
};
