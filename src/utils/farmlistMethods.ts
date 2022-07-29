export function formatFirstLetter(name: string): string {
  return name.slice(0, 1).toUpperCase() + name.slice(1);
}

export function farmURL(protocol: string): string {
  if (protocol == "stellaswap") return "https://app.stellaswap.com/farm";
  if (protocol == "solarbeam") return "https://app.solarbeam.io/farm";
  return "";
}

export function formatFarmType(farmType: string): string {
  let formatted = farmType.slice(0, -3).toUpperCase(); // removed Amm and uppercased
  // formatted = formatted.slice(0, 1) + formatted.slice(1).toLowerCase();
  return formatted.concat(" SWAP");
}
