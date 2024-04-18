import { useParams } from "react-router-dom";

import Footer from "./components/helpers/footer/Footer";
import Router from "./routes/Router";
import Nav from "./components/helpers/nav/Nav";

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

export function Movies() {
  const { id } = useParams()
  return <div>
    number - {id}
  </div>
}