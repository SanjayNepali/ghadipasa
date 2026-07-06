import { APP_NAME } from "@/constants";
import styles from "./page.module.css";

export const metadata = {
  title: "About Us",
  description: `Learn the story behind ${APP_NAME} — genuine watches and sunglasses, sold with trust, across Nepal.`,
};

export default function AboutPage() {
  return (
    <main className={styles.main}>
      <div className="container container--narrow">
        <p className={styles.eyebrow}>Our Story</p>
        <h1 className={styles.title}>Genuine timepieces, trusted across Nepal</h1>
        <p className={styles.paragraph}>
          {APP_NAME} started with a straightforward goal: give customers in
          Nepal a reliable place to find genuine watches and sunglasses,
          without second guessing what they are buying. From everyday wear to
          recognizable names like G-Shock, every piece we carry is chosen for
          quality first.
        </p>
        <p className={styles.paragraph}>
          Visit us in person at our store in Gongabu, Ganesthan (opposite
          Bigmart), Kathmandu, or shop online with Cash on Delivery or eSewa.
          We&apos;re just getting started, thank you for being part of it.
        </p>
      </div>
    </main>
  );
}