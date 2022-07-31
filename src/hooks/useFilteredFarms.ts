import { formatTokenSymbols } from "../utils/farmlistMethods";

export default function useFilteredFarms(
  farms: any[],
  search: string
): [any[], boolean] {
  if (!farms) return [[], true];
  if (search === "") return [farms, false];
  const searchTerm = search.trim().toUpperCase();
  const filtered = farms.filter((farm: any) => {
    const tokenNames = formatTokenSymbols(farm?.asset.symbol);
    const matchTerm =
      tokenNames.length > 1
        ? `${tokenNames[0]}_${tokenNames[1]}_${farm.protocol}_${farm.chain}`.toUpperCase()
        : `${tokenNames[0]}_${farm.protocol}_${farm.chain}`.toUpperCase();
    console.log("matchterm", matchTerm);
    if (matchTerm.indexOf(searchTerm) >= 0) return true;
    return false;
  });
  const noResult = filtered.length === 0;
  return [filtered, noResult];
}
