import { QueryClient } from "@tanstack/react-query";
import { QueryClientProvider } from "@tanstack/react-query";
import { Outlet } from "react-router-dom";
import SearchHeader from "./component/SearchHeader";
import { YoutubeApiProvider } from "./context/YoutubeApiContext";

function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <SearchHeader />
      <YoutubeApiProvider>
        <QueryClientProvider client={queryClient}>
          <Outlet />
        </QueryClientProvider>
      </YoutubeApiProvider>
    </>
  );
}

export default App;
