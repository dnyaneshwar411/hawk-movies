import { Toaster } from "react-hot-toast";

import Nav from "./components/nav/Nav";
import Footer from "./components/footer/Footer";

import Router from "./routes/Router";
import Ad from "./components/helpers/Ad";

export default function App() {
  return (
    <>
      <Nav />
      <Toaster position="bottom-right" toastOptions={{ duration: 2000 }} />
      <main>
        <Router />
        <div className="padding-inline">
          <Ad />
        </div>
      </main>
      <Footer />
    </>
  )
}