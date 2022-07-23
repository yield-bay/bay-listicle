export default function useSpecificFarm(
  farms: any[],
  farmQuery: string | string[] | undefined,
  idQuery: string | string[] | undefined
) {
  if (!farms) return [[], true];
  if (!farmQuery || !idQuery) return [farms];
  const farmsInAddress = farms.filter((farm: any) => {
    if (farm.asset?.address == farmQuery) return true;
    return false;
  });

  const specificFarm = farmsInAddress.filter((farm: any) => {
    if (farm.id === idQuery) return true;
    return false;
  });

  const noSpecificFarm = specificFarm.length === 0;

  return [specificFarm, noSpecificFarm];
}
