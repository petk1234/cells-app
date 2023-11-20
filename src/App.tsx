import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { AppContextProvider } from "./context/context";
import ControlPanel from "./components/ControlPanel/ControlPanel";
import HoverInfo from "./components/HoverInfo/HoverInfo";
import { AppWrapper } from "./styles";

function App() {
  return (
    <AppContextProvider>
      <AppWrapper>
        <ControlPanel />
        <HoverInfo />
      </AppWrapper>
      <ReactQueryDevtools initialIsOpen={false} />
    </AppContextProvider>
  );
}

export default App;
