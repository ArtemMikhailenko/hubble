import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Stats } from './components/Stats'
import { Features } from './components/Features'
import { PaymentHub } from './components/PaymentHub'
import { Integration } from './components/Integration'
import { CTA } from './components/CTA'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="min-h-dvh bg-[#000] text-[#f8f9ff]">
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:rounded-md focus:bg-black/60 focus:px-3 focus:py-2">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Stats />
        <Features />
        <PaymentHub />
        <Integration />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
