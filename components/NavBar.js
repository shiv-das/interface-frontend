import styles from "../styles/Home.module.css";
export default function NavBar() {
  return (
    <div className={styles.navbar}>
      <img src="/logo.png" className={styles.navbarlogo} />
    </div>
  );
}
