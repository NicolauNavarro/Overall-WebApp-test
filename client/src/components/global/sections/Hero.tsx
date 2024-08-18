import React from 'react'
import Image from 'next/image'
import styles from './Hero.module.css'


export default function HeroSection() {
  return (
        <section className={styles.section}>
          <div className={styles.title}>
            <h4>Overall <span>for students</span></h4>
            <h1>The Notion manager<br></br>for student&apos;s lives</h1>
            <h2>Built for success in any discipline</h2>
          </div>
          <Image src="/dashWindow.png" alt='Dahsobard' width="1366" height="768" className={styles.window} ></Image>
        </section>
  )
}
