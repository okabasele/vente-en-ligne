import Link from "next/link";

export type SearchBarProps = {
  searchWrap:string
  searchClose:string
  handleSearchButtonClick:(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void
  formControl:string
}

export default function SearchBar({searchWrap,searchClose,handleSearchButtonClick,formControl}:SearchBarProps) {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        // Chercher l'article dans le local Storage
        // Retourner les articles qui contient le texte de la recherche
        // Renvoyer vers la page Vetements avec le filtre qui convient
    }
  return (
    <>
      <div className={searchWrap}>
        <div className="container position-relative">
          <Link href="#">
            <a
              onClick={handleSearchButtonClick}
              className={searchClose}
            >
              <i className="bi bi-x-lg"></i>
            </a>
          </Link>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              className={formControl}
              placeholder="Rechercher un mot clé et appuyer sur Entrer"
            />
          </form>
        </div>
      </div>
    </>
  );
}
