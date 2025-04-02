// src/app/services/page.js
import styles from './services.module.css'

export default function ServicesPage() {
  return (
    <div className={styles.servicesContainer}>
      <h1 className='horarios'>Horarios de Servicios</h1>
      <div className={styles.servicesGrid}>
        <div className={styles.serviceCard}>
          <h2>Domingo</h2>
          <p><strong>9:00 am</strong> - Tiempo de oración</p>
          <p><strong>10:00 am</strong> - Escuela dominical</p>
          <p><strong>11:00 am</strong> - Culto general</p>
        </div>
        <div className={styles.serviceCard}>
          <h2>Martes</h2>
          <p><strong>5:00 am</strong> - Tiempo de oración</p>
        </div>
        <div className={styles.serviceCard}>
          <h2>Miércoles</h2>
          <p><strong>8:00 pm</strong> - Estudio bíblico</p>
        </div>
        <div className={styles.serviceCard}>
          <h2>Viernes</h2>
          <p><strong>8:00 pm</strong> - Culto de jóvenes</p>
        </div>
        <div className={styles.serviceCard}>
          <h2>Sábado</h2>
          <p><strong>9:00 am - 12:00 pm</strong> - Ayuno y oración</p>
        </div>
      </div>
    </div>
  );
}
