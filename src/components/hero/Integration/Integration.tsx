import styles from './Integration.module.css'

const features = [
  {
    title: 'Real-time transaction monitoring:',
    description:
      'Monitor every transaction in real-time with advanced reporting tools, ensuring complete visibility and control over your payment flows.',
  },
  {
    title: 'Unified payment gateway management:',
    description:
      'Connect multiple payment providers and manage all transactions in one place, reducing complexity and improving transaction success rates.',
  },
  {
    title: 'Multi-currency and local payment options:',
    description:
      'Offer your customers the flexibility to pay in their preferred currency and through local payment methods, boosting your global reach.',
  },
]

export function Integration() {
  return (
    <section className={styles.integration}>
      {/* Moon decoration */}
      <img
        src="/images/monn.png"
        alt=""
        className={styles.moonDecoration}
        aria-hidden="true"
      />
      {/* Meteor decoration for mobile */}
      <img
        src="/images/meteor-inter.png"
        alt=""
        className={styles.meteorDecoration}
        aria-hidden="true"
      />
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <h2 className={styles.title}>
            Effortless payment integration
            <br />
            in three simple steps
          </h2>
          <p className={styles.subtitle}>
            Quick and easy integration of all your payment systems into one platform,
            <br />
            streamlining your financial operations and improving efficiency.
          </p>
        </div>

        {/* Features */}
        <div className={styles.features}>
          {/* First feature - centered */}
          <div className={styles.featureTop}>
            <h3 className={styles.featureTitle}>{features[0].title}</h3>
            <p className={styles.featureDescription}>{features[0].description}</p>
          </div>

          {/* Bottom two features - side by side */}
          <div className={styles.featuresBottom}>
            <div className={styles.featureCard}>
              <h3 className={styles.featureTitle}>{features[1].title}</h3>
              <p className={styles.featureDescription}>{features[1].description}</p>
            </div>
            <div className={styles.featureCard}>
              <h3 className={styles.featureTitle}>{features[2].title}</h3>
              <p className={styles.featureDescription}>{features[2].description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
