import Link from "next/link";
import { useState } from "react";

export type SelectProps = {
  name: string;
  options: Array<string>;
};

export default function Filter({ name, options }: SelectProps) {
  const [value, setValue] = useState(options[0]);

  return (
    <>
    <Link href="#">
    <a className="dropdown-toggle d-flex align-items-center" type="button" data-bs-toggle="collapse" 
    data-bs-target={"#collapse"+name} 
    aria-expanded="true" 
    aria-controls={"collapse"+name}>
      <h6>{name}</h6>
    </a>
    </Link>
      <ul className="collapse show ps-2" id={"collapse"+name}>
        {(options || []).map((option, id) => (
          <li key={id} className="list-unstyled">
            <input type="checkbox" name={option} className="me-1" />
            <span>{option}</span>
          </li>
        ))}
      </ul>
    </>
  );
}
