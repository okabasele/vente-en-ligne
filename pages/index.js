import Head from "next/head";
import Link from "next/link";
// import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>MyShop</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
{/* 
      <main>
        <nav className="navbar navbar-expand-lg sticky-top" id={styles.navBar}>
          <div className="container">
            <Link href="#">
              <a className="navbar-brand mb-0 h1">MySHOP</a>
            </Link>
            <div className="nav-icons order-lg-last">
              <p className="mb-0 d-flex">
                <Link href="#">
                  <a className={styles.navIcon}>
                    <span className="bi bi-search"></span>
                  </a>
                </Link>
                <Link href="#">
                  <a className={styles.navIcon}>
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
                    <a className="nav-link active">Accueil</a>
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
      </main> */}

      {/* <footer className="fixed-bottom p-2">
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
      </footer> */}
    </>
  );
}
