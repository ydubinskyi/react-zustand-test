import { createContext, useRef } from "react";
import { StoreApi, create } from "zustand";

export type LotData = {
  id: string;
  name: string;
  price: number;
};

export type LotsDataStore = {
  lots: Record<string, LotData>;
  updateLot: (id: string, payload: LotData) => void;
};

export const LotsDataZustandStoreContext =
  createContext<StoreApi<LotsDataStore> | null>(null);

export const LotsDataZustandStoreProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const storeRef = useRef<StoreApi<LotsDataStore>>();
  if (!storeRef.current) {
    storeRef.current = create<LotsDataStore>((set) => ({
      lots: {
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
      },
      updateLot: (id, payload) =>
        set((state) => ({
          lots: {
            ...state.lots,
            [id]: {
              ...state.lots[id],
              ...payload,
            },
          },
        })),
    }));
  }

  return (
    <LotsDataZustandStoreContext.Provider value={storeRef.current}>
      {children}
    </LotsDataZustandStoreContext.Provider>
  );
};
