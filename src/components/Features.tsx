import styles from './Features.module.css'

export function Features() {
  return (
    <section className={styles.features}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            Powerful features tailored
            <br />
            to your business needs
          </h2>
          <p className={styles.subtitle}>
            Unlock seamless payment management and optimize your global transactions with our comprehensive platform.
          </p>
        </div>

        <div className={styles.grid}>
          <div className={styles.card}>
            <div className={styles.icon} aria-hidden="true" />
            <h3 className={styles.cardTitle}>
              Find your ideal
              <br />
              payment gateway:
            </h3>
            <p className={styles.cardDescription}>
              Easily integrate with global and local payment gateways, ensuring your customers can pay using their preferred methods.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.icon} aria-hidden="true" />
            <h3 className={styles.cardTitle}>
              Simplify your
              <br />
              payment workflow:
            </h3>
            <p className={styles.cardDescription}>
              Automate repetitive tasks and streamline your payment processes, reducing manual errors and boosting efficiency.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.icon} aria-hidden="true" />
            <h3 className={styles.cardTitle}>
              Make data-driven
              <br />
              financial decisions:
            </h3>
            <p className={styles.cardDescription}>
              Leverage in-depth analytics and reporting to monitor payment performance and optimize your financial operations.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.icon} aria-hidden="true" />
            <h3 className={styles.cardTitle}>
              Make data-driven
              <br />
              financial decisions:
            </h3>
            <p className={styles.cardDescription}>
              Leverage in-depth analytics and reporting to monitor payment performance and optimize your financial operations.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
