import styles from './Stats.module.css'

export function Stats() {
  return (
    <section className={styles.stats}>
      <div className={styles.container}>
        <h2 className={styles.title}>Our impact in numbers</h2>
        <div className={styles.grid}>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>100+</div>
            <p className={styles.statLabel}>Supported currencies globally.</p>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>99.9%</div>
            <p className={styles.statLabel}>Uptime for payment processing.</p>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>10,000+</div>
            <p className={styles.statLabel}>Transactions processed daily.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
