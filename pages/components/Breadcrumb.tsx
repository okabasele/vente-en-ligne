import styles from "../../styles/Breadcrumb.module.css";
import Link from "next/link";
import Image from "next/image";

export type BreadcrumbProps = {
  links:Array<{link:string,name:string}>
  activePage:string
}

export default function Breadcrumb({links,activePage}:BreadcrumbProps) {
  return (
    <>
      <div className={styles.banner}>
        <nav aria-label="breadcrumb" className={styles.breadcrumbContent}>
          <ol className="breadcrumb">
        { (links || []).map((value,id)=> (<li key={id} className="breadcrumb-item">
              <Link href={value.link}>
                <a className={styles.breadcrumbLink}>{value.name}</a>
              </Link>
            </li>))}
            <li className="breadcrumb-item active" aria-current="page">
              {activePage}
            </li>
          </ol>
        </nav>
        <div className={styles.bannerImage}>
            
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
