export function formatFirstLetter(name: string): string {
  return name.slice(0, 1).toUpperCase() + name.slice(1);
}

export function farmURL(protocol: string): string {
  if (protocol == "stellaswap") return "https://app.stellaswap.com/farm";
  else if (protocol == "solarbeam") return "https://app.solarbeam.io/farm";
  else if (protocol == "beamswap") return "https://app.beamswap.io/farm";
  else if (protocol == "sushi") return "https://app.sushi.com/farm";
  return "";
}

export function formatFarmType(farmType: string): string {
  let formatted = farmType.slice(0, -3).toUpperCase(); // removed Amm and uppercased
  // formatted = formatted.slice(0, 1) + formatted.slice(1).toLowerCase();
  return formatted.concat(" SWAP");
}

export function formatTokenSymbols(farmName: string): string[] {
  if (farmName.includes("-")) {
    let tokenNames = farmName.slice(0, -3).split("-");
    return tokenNames;
  }
  return [farmName];
}

export function isCritical(id: number, protocol: string) {
  const criticalFarms = [
    {
      protocol: "stellaswap",
      ids: [11, 12, 13],
    },
    {
      protocol: "beamswap",
      ids: [15],
    },
  ];

  function include(arr: number[], obj: number) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] == obj) return true;
    }
    return false;
  }

  const state = criticalFarms.map((farm) => {
    return farm.protocol == protocol && include(farm.ids, id);
  });
  return state.includes(true);
}
