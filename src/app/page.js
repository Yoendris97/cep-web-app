// src/app/page.js
import Image from 'next/image'
import styles from './page.module.css'

export default function HomePage() {
  return (
    <div>
      {/* HERO SECTION SOLO CON EL LOGO */}
      <section className={styles.hero}>
        <Image
          src="/logo.png"
          alt="Logo Centro Evangelistico Peniel"
          width={1500}
          height={500}
          className={styles.logo}
          priority
        />
      </section>

      {/* PASTORS SECTION (opcional, si lo deseas conservar) */}
      <section className={styles.pastorsSection}>
        <div className={styles.pastorsImageContainer}>
          <Image
            src="/pastores.jpg"
            alt="Pastores Osmani Gonzales y Odalis Del Toro"
            width={300}
            height={300}
            className={styles.pastorsImage}
          />
        </div>
        <div className={styles.pastorsInfo}>
          <h2>Pastores</h2>
          <h3>Osmani Gonzales &amp; Odalis Del Toro</h3>
          <p>
            Bienvenidos a nuestra iglesia. Nuestro deseo es guiar a cada persona a
            una relación más profunda con Dios y compartir el amor de Jesús con toda
            la comunidad.
          </p>
        </div>
      </section>
    </div>
  )
}
