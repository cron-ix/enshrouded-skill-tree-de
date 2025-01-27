export const BasicStats = {
  CONS: {
    //name: "Constitution",
    name: "Konstitution",
  },
  STR: {
    //name: "Strength",
    name: "Stärke",
  },
  ENDURANCE: {
    //name: "Endurance",
    name: "Kondition",
  },
  DEX: {
    //name: "Dexterity",
    name: "Geschick",
  },
  SPIRIT: {
    //name: "Spirit",
    name: "Willenskraft",
  },
  INT: {
    //name: "Intelligence",
    name: "Intelligenz",
  },
};

export type StatsType = keyof typeof BasicStats;
export type NodeStatsType = {
  [key in StatsType]?: number;
};
