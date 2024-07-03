import { useContext } from "react";
import { LotsDataUseStateStoreContext } from "./LotDataUseStateContext";

export const useLotsDataUseStateStore = () => {
  const store = useContext(LotsDataUseStateStoreContext);
  if (!store) {
    throw new Error("Missing LotsDataUseStateStoreProvider");
  }
  return store;
};
