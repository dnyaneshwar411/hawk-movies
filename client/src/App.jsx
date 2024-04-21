import Nav from "./components/helpers/nav/Nav";
import Footer from "./components/helpers/footer/Footer";

import Router from "./routes/Router";
import Ad from "./components/helpers/Ad";

export default function App() {
  return (
    <>
      <Nav />
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