import { memo } from "react";
import { LotCardV2 } from "./LotCardV2";

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

export const LotsGridV2 = memo(() => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {LOT_IDS.map((id) => (
        <LotCardV2 key={id} id={id} />
      ))}
    </div>
  );
});
