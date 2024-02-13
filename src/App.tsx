import Card from "./components/Card";

const food: [string, number, number, string][] = [
  ["🎉", 40, 10, "Happy Birthday!"],
  ["❤", 20, 40, "My Lovely Heart"],
  ["😜", 60, 90, "Happy Always"],
  ["🍐", 80, 20, "Don't Forget eat fuits"],
  ["🎂", 100, 40, "Cake For You"],
  ["🍎", 20, 25, "bla bla"],
  ["🍆", 20, 40, "vla vla"],
  ["🍇", 290, 320, "test -tes"],
];

export default function App() {
  return food.map(([emoji, hueA, hueB, greeting]) => (
    <Card emoji={emoji} hueA={hueA} hueB={hueB} key={emoji} greeting={greeting} />
  ));
}
