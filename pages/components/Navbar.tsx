import styles from "../../styles/Navbar.module.css";
import Link from "next/link";
import { useState } from "react";
import SearchBar from "./SearchBar";

export type NavbarProps = {
  handleCartButtonClick: (e:React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}
export default function Navbar({handleCartButtonClick}:NavbarProps) {
  const [searchWrap, setSearchWrap] = useState(styles.searchWrap);
  const [navBar, setNavBar] = useState(styles.navWrap);

  const handleSearchButtonClick = (e:React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    if (searchWrap == styles.searchWrap) {
      setSearchWrap(styles.searchWrapActive);
      setNavBar("invisible");
    } else {
      setSearchWrap(styles.searchWrap);
      setNavBar(styles.navWrap);

    }
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg sticky-top" id={styles.navBar}>
        <SearchBar searchWrap={searchWrap} searchClose={styles.searchClose} handleSearchButtonClick={handleSearchButtonClick} formControl={styles.formControl} />
        <div className={navBar}>
          <Link href="#">
            <a className="navbar-brand mb-0 h1">MySHOP</a>
          </Link>
          <div className="nav-icons order-lg-last">
            <p className="mb-0 d-flex">
              <Link href="#" >
                <a  onClick={(e) => handleSearchButtonClick(e)} className={styles.navIcon}>
                  <span className="bi bi-search"></span>
                </a>
              </Link>
              <Link href="#">
                <a onClick={(e)=>handleCartButtonClick(e)} className={styles.navIcon}>
                  <span className="bi bi-bag"></span>
                </a>
              </Link>
              <Link href="#">
                <a className={styles.navIcon}>
                  <span className="bi bi-person"></span>
                </a>
              </Link>
            </p>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#ftco-nav"
            aria-controls="ftco-nav"
            aria-expanded="false"
          >
            <span className="bi bi-list"></span> MENU
          </button>
          <div className="collapse navbar-collapse" id="ftco-nav">
            <ul className="navbar-nav ml-auto mr-md-3">
              <li className="nav-item">
                <Link href="#">
                  <a className="nav-link">Accueil</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="#">
                  <a className="nav-link">Nouveautés</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="#">
                  <a className="nav-link">Vêtements</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="#">
                  <a className="nav-link">Contact</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
