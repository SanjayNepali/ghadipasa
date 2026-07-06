"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./HeroSlideshow.module.css";
import { APP_NAME, APP_TAGLINE } from "@/constants";

const FALLBACK_SLIDES = [
  { url: "/images/image.png",  label: "Precision, worn daily",         sub: "Genuine watches and sunglasses, chosen for quality first." },
  { url: "/images/image1.png", label: "Iconic names, real stock",      sub: "From everyday classics to standout pieces like G-Shock." },
  { url: "/images/image2.png", label: "Every detail matters",          sub: "Premium materials. Finishes built to last." },
  { url: "/images/image3.png", label: "Luxury watches all over Nepal", sub: "Shop online or visit us in Gongabu, Kathmandu." },
];

interface Props {
  heroImages: string[];
}

export default function HeroSlideshow({ heroImages }: Props) {
  const slides = FALLBACK_SLIDES.map((slide, i) => ({
    ...slide,
    url: heroImages[i] ?? slide.url,
  }));

  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const clearTimer = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  useEffect(() => {
    if (paused) {
      clearTimer();
      return;
    }
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5500);
    return clearTimer;
  }, [paused, slides.length]);

  return (
    <section
      className={styles.section}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-label="Hero slideshow"
    >
      <div className={styles.frame}>
        <div className={styles.imageBox}>
          {slides.map((slide, i) => (
            <div
              key={i}
              className={`${styles.slide} ${i === current ? styles.slideActive : ""}`}
            >
              <Image
                src={slide.url}
                alt={slide.label}
                fill
                sizes="(max-width: 900px) 100vw, 1440px"
                className={styles.slideImg}
                priority={i === 0}
              />
            </div>
          ))}

          <div className={styles.scrim} />

          <div className={styles.panel}>
            <p className={styles.eyebrow}>{APP_NAME}</p>
            <h1 className={styles.heading}>{slides[current].label}</h1>
            <p className={styles.sub}>{slides[current].sub}</p>

            <div className={styles.actions}>
              <Link href="/shop" className={styles.cta}>
                <i className="bx bx-shopping-bag" />
                Shop Now
              </Link>
              <span className={styles.tagline}>{APP_TAGLINE}</span>
            </div>
          </div>

          <div className={styles.controls}>
            {slides.map((_, i) => (
              <button
                key={i}
                className={`${styles.dot} ${i === current ? styles.dotActive : ""}`}
                onClick={() => setCurrent(i)}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}