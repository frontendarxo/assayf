import { Navbar } from "./components/navbar"
import { About } from "./widgets/about"
import { Advantages } from "./widgets/advantages"
import { Contact } from "./widgets/contact"
import { Footer } from "./widgets/footer"
import { Header } from "./widgets/header"
import { Reviews } from "./widgets/reviews"
import { Spheres } from "./widgets/spheres"

function App() {

  return (
    <>
      <Navbar />
      <Header />
      <main>
        <About />
        <Advantages />
        <Spheres />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
