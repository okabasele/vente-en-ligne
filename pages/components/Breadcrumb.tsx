import styles from "../../styles/Breadcrumb.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Breadcrumb() {
  return (
    <>
      <div className={styles.banner}>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link href="/">
                <a className={styles.breadcrumbLink}>Accueil</a>
              </Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Home
            </li>
          </ol>
        </nav>
        <div className={styles.bannerImage}>
            <div className={styles.overlay}></div>
          <Image
            src="https://images.unsplash.com/photo-1606941025150-4a3212f9bb11?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            objectFit="cover"
            layout="fill"
          />
        </div>
      </div>
    </>
  );
}
