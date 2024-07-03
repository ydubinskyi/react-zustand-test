import { LotCard } from "./LotCard";

const LOT_IDS = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  "13",
];

export function LotsGrid() {
  return (
    <div className="grid grid-cols-3 gap-4">
      {LOT_IDS.map((id) => (
        <LotCard key={id} id={id} />
      ))}
    </div>
  );
}
