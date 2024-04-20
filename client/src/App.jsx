import Nav from "./components/helpers/nav/Nav";
import Footer from "./components/helpers/footer/Footer";

import Router from "./routes/Router";

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Router />
      </main>
      <Footer />
    </>
  )
}