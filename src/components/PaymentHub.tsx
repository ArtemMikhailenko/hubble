import styles from './PaymentHub.module.css'

const stats = [
  { value: '100+', label: 'Provider' },
  { value: '30+', label: 'Countries' },
  { value: '10+', label: 'Currencies' },
]

const topRowCountries = [
  { name: 'Azerbaijan', image: '/images/country/azerbayjan.png' },
  { name: 'Turkey', image: '/images/country/turkey.png' },
  { name: 'Mexico', image: '/images/country/mexico.png' },
]

const bottomRowCountries = [
  { name: 'India', image: '/images/country/india.png' },
  { name: 'Philippines', image: '/images/country/philippines.png' },
  { name: 'Ivory Coast', image: '/images/country/ivory-coast.png' },
  { name: 'Bangladesh', image: '/images/country/bangladesh.png' },
]

const comingSoon = [
  { name: 'Nigeria', image: '/images/country/nigeria.png' },
  { name: 'Europe', image: '/images/country/europe.png' },
  { name: 'Brazil', image: '/images/country/brazil.png' },
  { name: 'Your request', isCustom: true },
]

export function PaymentHub() {
  return (
    <section className={styles.paymentHub}>
      <div className={styles.container}>
        {/* Header with title and stats */}
        <div className={styles.header}>
          <h2 className={styles.title}>Payment Hub</h2>
          <div className={styles.stats}>
            {stats.map((stat) => (
              <div key={stat.label} className={styles.stat}>
                <div className={styles.statValue}>{stat.value}</div>
                <div className={styles.statLabel}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Available countries */}
        <div className={styles.countriesWrapper}>
          {/* Top row - 3 countries */}
          <div className={styles.countriesRow}>
            {topRowCountries.map((country) => (
              <div key={country.name} className={styles.countryItem}>
                <div className={styles.flagImage}>
                  <img src={country.image} alt={country.name} />
                </div>
                <div className={styles.countryName}>{country.name}</div>
              </div>
            ))}
          </div>
          {/* Bottom row - 4 countries */}
          <div className={styles.countriesRow}>
            {bottomRowCountries.map((country) => (
              <div key={country.name} className={styles.countryItem}>
                <div className={styles.flagImage}>
                  <img src={country.image} alt={country.name} />
                </div>
                <div className={styles.countryName}>{country.name}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Content columns */}
        <div className={styles.contentColumns}>
          {/* Left column */}
          <div className={styles.leftColumn}>
            <h3 className={styles.subtitle}>
              We connect 20-30
              <br />
              payment providers
              <br />
              every month
            </h3>
            <p className={styles.description}>
              If you need a specific provider, please
              <br />
              contact us and we will consider its integration.
            </p>
            <a href="#contact" className={styles.cta}>
              Contact us
            </a>
          </div>

          {/* Right column */}
          <div className={styles.rightColumn}>
            <h3 className={styles.comingSoonTitle}>Soon will be available</h3>
            <div className={styles.comingSoonGrid}>
              {comingSoon.map((item) => (
                <div key={item.name} className={styles.comingSoonItem}>
                  {item.isCustom ? (
                    <div className={styles.customFlag}>H</div>
                  ) : (
                    <div className={styles.flagImage}>
                      <img src={item.image} alt={item.name} />
                    </div>
                  )}
                  <div className={styles.countryName}>{item.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
