import WatchFinderForm from "@/components/store/WatchFinderForm/WatchFinderForm";
import styles from "./page.module.css";

export default function WatchFinderPage() {
  return (
    <div className={styles.page}>
      <div className="container container--narrow">
        <div className={styles.hero}>
          <span className={styles.eyebrow}>AI Watch Finder</span>
          <h1 className={styles.title}>Find Your Perfect Watch</h1>
          <p className={styles.subtitle}>
            Tell us the occasion, budget, or style you&apos;re after, and
            we&apos;ll match you with watches and sunglasses from our
            collection.
          </p>
        </div>

        <WatchFinderForm />
      </div>
    </div>
  );
}