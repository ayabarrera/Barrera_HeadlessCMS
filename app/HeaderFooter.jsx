import Link from 'next/link';
import styles from './HeaderFooter.module.css'; 

export default function HeaderFooter({ children }) {
  return (
    <div>
      <header className={styles.header}> 
        <nav className={styles.nav}> 
          <Link href="/" className={styles.link}>Home</Link>
          <Link href="/about">About Me</Link>
        </nav>
      </header>
      <main>{children}</main>
      <footer className={styles.footer}>
        <p>&copy; Aya's Trinket Collection</p>
      </footer>
    </div>
  );
}