import { useLotsDataStore } from "../../contexts/zustand/use-lots-data-zustand-store";

export function LotCard({ id }: { id: string }) {
  const lot = useLotsDataStore((state) => state.lots[id]);

  if (!lot) {
    return null;
  }

  console.log("Rendering LotCard", id);

  return (
    <div className="bg-gray-100 p-4 rounded-md">
      <p className="text-lg font-bold">{lot.name}</p>
      <p className="text-sm">Price: ${lot.price}</p>
    </div>
  );
}
