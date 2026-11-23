import { About } from './components/About'
import { Contact } from './components/Contact'
import { CtaBanner } from './components/CtaBanner'
import { Faq } from './components/Faq'
import { Footer } from './components/Footer'
import { Gallery } from './components/Gallery'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Process } from './components/Process'
import { Services } from './components/Services'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Process />
        <CtaBanner />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
