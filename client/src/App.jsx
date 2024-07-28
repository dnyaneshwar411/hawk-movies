import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import Nav from "./components/nav/Nav";
import Footer from "./components/common/Footer";

import Router from "./Router";
import Ad from "./components/common/Ad";
import Initialize from "./providers/Initialize";
import Search from "./components/search/Search";
import { useState } from "react";
import useKeyDown from "./hooks/useKeyDown";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000
    }
  }
})

export default function App() {
  const [toggleSearchBar, setToggleSearchBar] = useState(false);
  useKeyDown("Slash", () => setToggleSearchBar(true));
  useKeyDown("Escape", () => setToggleSearchBar(false));
  return (<>
    <Initialize />
    {toggleSearchBar && <Search />}
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initializeialIsOpen={true} />
      <Toaster position="bottom-right" toastOptions={{ duration: 2000 }} />
      <Nav />
      <main>
        <Router />
        <div className="padding-inline">
          <Ad />
        </div>
      </main>
      <Footer />
    </QueryClientProvider>
  </>
  )
}