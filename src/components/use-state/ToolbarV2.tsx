import { useLotsDataUseStateStore } from "../../contexts/use-state/use-lots-data-use-state-store";

export function ToolbarV2() {
  const { updateLot } = useLotsDataUseStateStore();

  const modifyOneLot = () => {
    updateLot("1", {
      id: "1",
      name: "Lot 1",
      price: getRandomInt(10, 1000),
    });
  };

  const modifyManyLots = () => {
    updateLot("2", {
      id: "2",
      name: "Lot 2",
      price: getRandomInt(10, 1000),
    });
    updateLot("3", {
      id: "3",
      name: "Lot 3",
      price: getRandomInt(10, 1000),
    });
    updateLot("4", {
      id: "4",
      name: "Lot 4",
      price: getRandomInt(10, 1000),
    });
  };

  return (
    <div className="flex space-x-4">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={modifyOneLot}
      >
        Update 1 lot data
      </button>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={modifyManyLots}
      >
        Update many lots data
      </button>
    </div>
  );
}

const getRandomInt = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
