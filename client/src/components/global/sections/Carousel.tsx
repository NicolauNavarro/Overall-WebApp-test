import React from 'react'
import styles from './Carousel.module.css'
import Card from './Card'

export default function CarouselSection() {
  return (
    <section className={styles.section}>
        <Card title='hello' description='me' iconName='Hello'/>
        <div className='text-red'>Hello</div>
    </section>
  )
}
