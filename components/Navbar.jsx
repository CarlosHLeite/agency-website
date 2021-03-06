import Link from 'next/link'
import styles from '../styles/Navbar.module.css'

const Navbar = () => {
  return (
    <div className={styles.container}>
        <Link href={'/'}>Avocado</Link>
        <ul className={styles.list}>
            <li className={styles.listItem}>
                <Link href={'/products/design'}>Design</Link>
            </li>
            <li className={styles.listItem}>
                <Link href={'/products/development'}>Development</Link>
            </li>
            <li className={styles.listItem}>
                <Link href={'/products/production'}>Production</Link>
            </li>
            <li className={styles.listItem}>
                <Link href={'/products/photography'}>Photography</Link>
            </li>
            <li className={styles.listItem}>
                <Link href={'/products/contact'}>Contact</Link>
            </li>
        </ul>
    </div>
  )
}

export default Navbar