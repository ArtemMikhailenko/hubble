import styles from './CTA.module.css'

export function CTA() {
  return (
    <section className={styles.cta}>
         <img
          src="/images/meteor.png"
          alt=""
          className={styles.meteorTopRight}
          aria-hidden="true"
        />
        
      <div className={styles.container}>
        {/* Meteor decorations */}
       
          
        <div className={styles.card}>
          
          <div className={styles.content}>
            <h2 className={styles.title}>
              Make payment integration
              <br />
              effortless with Hubble
            </h2>
            <p className={styles.description}>
              Discover why businesses trust Hubble to streamline their payment processes, reduce
              friction, and enhance transaction success rates with our all-in-one platform.
            </p>
          </div>
          <button className={styles.button}>Contact us</button>
        </div>
      </div>
    </section>
  )
}
