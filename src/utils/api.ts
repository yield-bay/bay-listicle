import { createClient, defaultExchanges, gql } from "@urql/core";

const client = createClient({
  url: process.env.NEXT_PUBLIC_API_URL as string,
  exchanges: defaultExchanges,
});

export const fetchListicleFarms = async () => {
  const farmObj = await client
    .query(
      gql`
        query {
          farms {
            chain
            protocol
            farmType
            farmImplementation
            asset {
              name
              address
              tokens {
                name
                address
                symbol
                decimals
                price
                logo
              }
            }
            id
            tvl
            apr {
              farm
              trading
            }
            rewards {
              amount
              token {
                name
                address
                symbol
                decimals
                price
                logo
              }
              valueUsd
              freq
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
