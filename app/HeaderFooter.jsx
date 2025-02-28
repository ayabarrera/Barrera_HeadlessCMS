"use client";
import Link from 'next/link';
import styles from './HeaderFooter.module.css';
import { usePathname } from 'next/navigation';

export default function HeaderFooter({ children }) {
  const pathname = usePathname();

  const isActive = (href) => {
    return pathname === href;
  };

  return (
    <div>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <Link
            href="/"
            className={`${styles.link} ${isActive('/') ? styles.active : ''}`}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`${styles.link} ${isActive('/about') ? styles.active : ''}`}
          >
            About Me
          </Link>
        </nav>
      </header>
      <main>{children}</main>
      <footer className={styles.footer}>
        <p>&copy; Aya's Trinket Collection</p>
      </footer>
    </div>
  );
}