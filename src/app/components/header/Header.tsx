import Image from 'next/image';
import Link from 'next/link';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <Link href="/">
          <Image 
            src="/FutureLogo.png" 
            alt="Future Racing Logo" 
            width={150} 
            height={50} 
            className={styles.logo}
          />
        </Link>
      </div>
      <nav className={styles.navigation}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link href="/" className={styles.navLink}>Home</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/team" className={styles.navLink}>Meet the team</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/sponsors" className={styles.navLink}>Sponsors</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/news" className={styles.navLink}>News</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/gallery" className={styles.navLink}>Gallery</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
