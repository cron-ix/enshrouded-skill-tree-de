export const BasicStats = {
  CONS: {
    name: "Konstitution",
  },
  STR: {
    name: "Stärke",
  },
  ENDURANCE: {
    name: "Kondition",
  },
  DEX: {
    name: "Geschick",
  },
  SPIRIT: {
    name: "Willenskraft",
  },
  INT: {
    name: "Intelligenz",
  },
};

export type StatsType = keyof typeof BasicStats;
export type NodeStatsType = {
  [key in StatsType]?: number;
};
