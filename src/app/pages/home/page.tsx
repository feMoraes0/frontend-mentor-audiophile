import Header from "@components/Header";
import styles from '@pages/home/page.module.scss';

export default function HomePage() {
  return (
    <main className={styles.home}>
      <Header>
        <div className={styles.header}>
          <h2 className={styles.headerSubtitle}>New Product</h2>
          <h1 className={styles.headerTitle}>XX99 Mark II HeadphoneS</h1>
          <p className={styles.headerContent}>
            Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.
          </p>
          <button className={styles.headerButton}>See Product</button>
        </div>
      </Header>
    </main>
  );
}
