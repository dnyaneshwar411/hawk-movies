import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import Nav from "./components/nav/Nav";
import Footer from "./components/footer/Footer";

import Router from "./routes/Router";
import Ad from "./components/helpers/Ad";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000
    }
  }
})

export default function App() {
  return (<>
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={true} />
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