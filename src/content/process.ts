export interface ProcessStage {
  step: string;
  title: string;
  summary: string;
}

export const processData: ProcessStage[] = [
  {
    step: "01",
    title: "Discover",
    summary:
      "Understand the need, the people affected by it and the constraints surrounding it.",
  },
  {
    step: "02",
    title: "Shape",
    summary:
      "Define the product direction, experience and smallest useful release.",
  },
  {
    step: "03",
    title: "Build",
    summary:
      "Design and engineer the product with care, speed and clear standards.",
  },
  {
    step: "04",
    title: "Evolve",
    summary: "Learn from real use and improve the product over time.",
  },
];
