export default function useFilteredFarms(
  farms: any[],
  search: string
): [any[], boolean] {
  if (!farms) return [[], true];
  if (search === "") return [farms, false];
  const searchTerm = search.trim().toUpperCase();
  const filtered = farms.filter((farm: any) => {
    const matchTerm =
      `${farm.asset.tokens[0]?.symbol}_${farm.asset.tokens[1].symbol}_${farm.protocol}_${farm.chain}`.toUpperCase();
    if (matchTerm.indexOf(searchTerm) >= 0) return true;
    return false;
  });
  const noResult = filtered.length === 0;
  return [filtered, noResult];
}
