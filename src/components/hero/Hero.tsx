import React from 'react'
import styles from "./hero.module.scss"

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.video__wrapper}>
        <div>
          <div className={styles.overlay}>
          <video
            autoPlay
            muted
            loop
          >
            <source
              src="https://www.apple.com/105/media/us/apple-tv-plus/2022/755f2d0d-659f-44e2-a345-57305fabfdfa/supercut/large.mp4"
              type="video/mp4"
            />
          </video>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero