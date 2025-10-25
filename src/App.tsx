import { Header } from './components/header/Header'
import { Hero } from './components/hero/Hero/Hero'
import { Stats } from './components/hero/Stats/Stats'
import { Features } from './components/hero/Features/Features'
import { PaymentHub } from './components/hero/PaymentHub/PaymentHub'
import { Integration } from './components/hero/Integration/Integration'
import { CTA } from './components/hero/CTA/CTA'
import { Footer } from './components/footer/Footer'

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
