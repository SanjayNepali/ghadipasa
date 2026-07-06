import Link from "next/link";
import Image from "next/image";
import styles from "./AboutTeaser.module.css";

export default function AboutTeaser() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        {/* Images side (now first / left) */}
        <div className={styles.imageCol}>
          <div className={styles.imageGrid}>
            <div className={`${styles.imgWrap} ${styles.imgBack}`}>
              <Image
                src="/images/prod2.jpg"
                alt="Ghadi Pasa watch"
                fill
                sizes="(max-width: 768px) 60vw, 260px"
                className={styles.img}
              />
            </div>
            <div className={`${styles.imgWrap} ${styles.imgFront}`}>
              <Image
                src="/images/prod1.png"
                alt="Ghadi Pasa watch"
                fill
                sizes="(max-width: 768px) 70vw, 320px"
                className={styles.img}
              />
            </div>
          </div>
        </div>

        {/* Text side */}
        <div className={styles.textCol}>
          <p className={styles.eyebrow}>Our Story</p>
          <h2 className={styles.heading}>
            Timeless pieces,<br />built to last a lifetime
          </h2>
          <p className={styles.body}>
            Ghadi Pasa brings genuine, quality timepieces and eyewear to
            customers across Nepal. From everyday classics to standout pieces
            like G-Shock, every watch and pair of sunglasses in our collection
            is chosen for the same thing — something you can rely on and be
            proud to wear.
          </p>
          <Link href="/about" className={styles.link}>
            Read our story
            <i className="bx bx-right-arrow-alt" />
          </Link>
        </div>
      </div>
    </section>
  );
}