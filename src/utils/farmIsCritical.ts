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

export function isCritical(id: number, protocol: string) {
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
