import { useContext } from "react";
import { LotsDataStore, LotsDataZustandStoreContext } from "./LotDataZustandContext";
import { useStore } from "zustand";

export const useLotsDataStore = <T>(
  selector: (store: LotsDataStore) => T
): T => {
  const store = useContext(LotsDataZustandStoreContext);
  if (!store) {
    throw new Error("Missing LotsDataStoreProvider");
  }
  return useStore(store, selector);
};
