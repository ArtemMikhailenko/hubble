import { useState } from 'react'
import { ContactModal } from './ContactModal'
import styles from './Hero.module.css'

export function Hero() {
  const [modalOpen, setModalOpen] = useState(false)
  
  return (
    <section aria-labelledby="hero-title" className={styles.hero}>
      {/* Right-side decorative moon image; not a CSS background so it remains semantic */}
      <div aria-hidden="true" className={styles.moonContainer}>
        <img
          src="/images/hero-moon.png"
          alt=""
          className={styles.moonImage}
          decoding="async"
          loading="eager"
        />
        {/* soft gradient to blend the image into the dark bg on the left */}
        <div className={styles.moonGradient} />
      </div>

      <div className={styles.container}>
        <div className={styles.content}>
          <h1 id="hero-title" className={styles.title}>
            Unified payment
            <br />
            solutions tailored
            <br />
            for your business
          </h1>
          <p className={styles.description}>
            Easily manage all your payments and financial operations with a single, comprehensive platform designed for businesses of any scale.
          </p>
          <div className={styles.ctaWrapper}>
            <button onClick={() => setModalOpen(true)} className={styles.cta}>
              Contact us
            </button>
          </div>
        </div>
      </div>

      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  )
}