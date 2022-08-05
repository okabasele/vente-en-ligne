import styles from "../../styles/Footer.module.css";
import Link from "next/link";

export default function Footer() {
  return <>
        <footer className={styles.footer}>
        <p className="text-center">©2022 MyShop Tous droits réservés</p>
        <ul className="navbar-nav justify-content-center flex-row">
          <li className="nav-item">
            <Link href="#">
              <a className="nav-link">Accueil</a>
            </Link>
          </li>
          <li className="nav-item vr mx-2">
          </li>
          <li className="nav-item">
            <Link href="#">
              <a className="nav-link">Contact</a>
            </Link>
          </li>
        </ul>
      </footer>
  </>;
}
