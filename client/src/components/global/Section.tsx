import React, { ReactNode } from "react";
import styles from "./Section.module.css";

type SectionProps = {
  title?: string;       
  children: ReactNode; 
};

export default function Section({ title, children }: SectionProps) {
  return (
    <section className={styles.section}>
      {title && <h2>{title}</h2>}
      {children}
    </section>
  );
}