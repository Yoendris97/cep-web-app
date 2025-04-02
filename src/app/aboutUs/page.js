import React from 'react';
import styles from './aboutUs.module.css';


export default function AboutUsPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Conoce Nuestra Iglesia</h1>
      
      {/* Sección con video */}
      <section className={styles.section}>
        <div className={styles.mediaWindow}>
          <video className={styles.media} controls>
            <source src="/videos/churchVideo.mp4" type="video/mp4" />
            Tu navegador no soporta videos.
          </video>
          <div className={styles.overlay}>
            <h2>Nuestra Historia</h2>
            <p>Descubre el recorrido y la fe que nos une.</p>
          </div>
        </div>
      </section>

      {/* Sección con imagen */}
      <section className={styles.section}>
        <div className={styles.mediaWindow}>
          <img className={styles.media} src="cross.jpg" alt="Iglesia" />
          <div className={styles.overlay}>
            <h2>Comunidad y Fe</h2>
            <p>Momentos que reflejan nuestro compromiso.</p>
          </div>
        </div>
      </section>

      {/* Puedes agregar más secciones según necesites */}
    </div>
  );
}