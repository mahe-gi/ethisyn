export interface PrincipleItem {
  index: string;
  title: string;
  statement: string;
}

export const principlesData: PrincipleItem[] = [
  {
    index: "01",
    title: "Useful from day one",
    statement:
      "Every product should create understandable value, not novelty for its own sake.",
  },
  {
    index: "02",
    title: "Designed to grow",
    statement:
      "Products should be able to expand without losing clarity, usability or reliability.",
  },
  {
    index: "03",
    title: "Responsible by design",
    statement:
      "Trust, privacy and human agency should be considered from the beginning.",
  },
  {
    index: "04",
    title: "Built to endure",
    statement:
      "We prefer thoughtful decisions and dependable engineering over temporary shortcuts.",
  },
];
