export const diceOptions = [
  {
    type: "Grind",
    results: [
      "Your Choice",
      "Fine",
      "Medium Fine",
      "Medium",
      "Very Fine",
      "Coarse",
    ],
    grind: [
      "Your Choice",
      "Fine",
      "Medium Fine",
      "Medium",
      "Very Fine",
      "Coarse",
    ],
    temperature: null,
    weight: null,
    water: null,
    position: null,
    bloom: null,
    stir: null,
  },
  {
    type: "Water Temperature",
    results: [
      "Your Choice",
      "75°C | 167°F",
      "80°C | 176°F",
      "85°C | 185°F",
      "90°C | 194°F",
      "95°C | 203°F",
    ],
    grid: null,
    temperature: ["Your Choice", "75°C", "80°C", "85°C", "90°C", "95°C"],
    weight: null,
    water: null,
    position: null,
    bloom: null,
    stir: null,
  },
  {
    type: "Ratio",
    results: [
      "Your Choice",
      "12g Coffee to 200g Water",
      "15g Coffee to 200g Water",
      "15g Coffee to 250g Water",
      "24g Coffee to 200g Water (Dilute to share)",
      "30g Coffee to 200g Water (Dilute to share)",
    ],
    temperature: null,
    weight: ["Your Choice", "12g", "15g", "15g", "24g", "30g"],
    water: [
      {weight: "Your Choice", dilute: false},
      {weight: 200, dilute: false},
      {weight: 200, dilute: false},
      {weight: 250, dilute: false},
      {weight: 200, dilute: true},
      {weight: 200, dilute: true},
    ],
    position: null,
    bloom: null,
    stir: null,
  },
  {
    type: "Method",
    results: [
      "Upright | No Bloom",
      "Upright | 30s Bloom | 30g Water",
      "Upright | 30s Bloom | 60g Water",
      "Inverted | No Bloom",
      "Inverted | 30s Bloom | 30g Water",
      "Inverted | 30s Bloom | 60g Water",
    ],
    temperature: null,
    weight: null,
    water: null,
    grind: null,
    position: [
      "Upright",
      "Upright",
      "Upright",
      "Inverted",
      "Inverted",
      "Inverted",
    ],
    bloom: [
      {time: 0, water: "0"},
      {time: 30000, water: 30},
      {time: 30000, water: 60},
      {time: 0, water: 0},
      {time: 30000, water: 30},
      {time: 30000, water: 60},
    ],
    stir: null,
  },
  {
    type: "Stir",
    results: [
      "Your Choice",
      "No stir",
      "N-S-E-W",
      "1x, clockwise",
      "2x, clockwise",
      "1x clockwise, 1x anti-clockwise",
    ],
    grind: null,
    temperature: null,
    weight: null,
    water: null,
    position: null,
    bloom: null,
    stir: [
      "Your Choice",
      "No stir",
      "N-S-E-W",
      "1x, clockwise",
      "2x, clockwise",
      "1x clockwise, 1x anti-clockwise",
    ],
  },
];
