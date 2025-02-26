import styles from './Header.module.css'
import igniteLogo from '../assets/logo-app.svg'

export function Header() {
  return (
    <header className={styles.header}>
        <img 
          src={igniteLogo} 
          alt="logo" 
        />
        <strong>Social Midia</strong>
    </header>
  )
}