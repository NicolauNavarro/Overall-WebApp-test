import React from 'react'
import styles from './Hero.module.css'


export default function HeroSection() {
  return (
        <section className={styles.section}>
          <div className={styles.title}>
            <h4>Overall for students</h4>
            <h1>The Notion manager for students</h1>
            <h1>Built to organize your student live</h1>
          </div>
        </section>
  )
}
