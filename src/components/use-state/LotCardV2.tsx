import { memo } from "react";
import { useLotsDataUseStateStore } from "../../contexts/use-state/use-lots-data-use-state-store";

export const LotCardV2 = memo(({ id }: { id: string }) => {
  const { lots } = useLotsDataUseStateStore();

  const lot = lots[id];

  if (!lot) {
    return null;
  }

  console.log("Rendering LotCardV2", id);

  return (
    <div className="bg-gray-100 p-4 rounded-md">
      <p className="text-lg font-bold">{lot.name}</p>
      <p className="text-sm">Price: ${lot.price}</p>
    </div>
  );
});
