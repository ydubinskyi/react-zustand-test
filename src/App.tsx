import { LotsGridV2 } from "./components/use-state/LotsGridV2";
import { ToolbarV2 } from "./components/use-state/ToolbarV2";
import { LotsGrid } from "./components/zustand/LotsGrid";
import { Toolbar } from "./components/zustand/Toolbar";
import { LotsDataUseStateStoreProvider } from "./contexts/use-state/LotDataUseStateContext";
import { LotsDataZustandStoreProvider } from "./contexts/zustand/LotDataZustandContext";

function App() {
  return (
    <div>
      <LotsDataZustandStoreProvider>
        <div className="w-auto max-w-screen-md mx-auto my-8">
          <p className="text-3xl font-bold">Zustand with context</p>

          <Toolbar />

          <p className="text-xl mb-4">Lots:</p>

          <LotsGrid />
        </div>
      </LotsDataZustandStoreProvider>
      <LotsDataUseStateStoreProvider>
        <div className="w-auto max-w-screen-md mx-auto my-8">
          <p className="text-3xl font-bold">Use state with context</p>

          <ToolbarV2 />

          <p className="text-xl mb-4">Lots:</p>

          <LotsGridV2 />
        </div>
      </LotsDataUseStateStoreProvider>
    </div>
  );
}

export default App;
