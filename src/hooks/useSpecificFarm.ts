export default function useSpecificFarm(
  farms: any[],
  farmQuery: string | string[] | undefined,
  idQuery: string | string[] | undefined
) {
  if (!farms) return [];
  if (!farmQuery || !idQuery) return farms;
  const specificFarm = farms.filter((farm: any) => {
    if (farm.asset?.address == farmQuery && farm.id == idQuery) return true;
    return false;
  });

  return specificFarm;
}
