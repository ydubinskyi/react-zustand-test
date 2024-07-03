import { createContext, useCallback, useMemo, useState } from "react";
import { LotData, LotsDataStore } from "../zustand/LotDataZustandContext";

export const LotsDataUseStateStoreContext = createContext<LotsDataStore | null>(
  null
);

export const LotsDataUseStateStoreProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [lots, setLots] = useState<Record<string, LotData>>({
    "1": { id: "1", name: "Lot 1", price: 100 },
    "2": { id: "2", name: "Lot 2", price: 200 },
    "3": { id: "3", name: "Lot 3", price: 300 },
    "4": { id: "4", name: "Lot 4", price: 400 },
    "5": { id: "5", name: "Lot 5", price: 500 },
    "6": { id: "6", name: "Lot 6", price: 600 },
    "7": { id: "7", name: "Lot 7", price: 700 },
    "8": { id: "8", name: "Lot 8", price: 800 },
    "9": { id: "9", name: "Lot 9", price: 900 },
    "10": { id: "10", name: "Lot 10", price: 1000 },
    "11": { id: "11", name: "Lot 11", price: 1100 },
    "12": { id: "12", name: "Lot 12", price: 1200 },
    "13": { id: "13", name: "Lot 13", price: 1300 },
  });

  const updateLot = useCallback((id: string, payload: LotData) => {
    setLots((state) => ({ ...state, [id]: payload }));
  }, []);

  const value = useMemo(() => ({ lots, updateLot }), [lots, updateLot]);

  return (
    <LotsDataUseStateStoreContext.Provider value={value}>
      {children}
    </LotsDataUseStateStoreContext.Provider>
  );
};
