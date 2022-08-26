import { useState } from "react";

export type SelectProps = {
  name: string,
  label:string,
  options: Array<string>;
};

export default function Select({ name,label,options }: SelectProps) {
  const [value, setValue] = useState(options[0]);

  return (
    <>
        <label className="me-1" htmlFor={name}>{label}</label>
        
        <select
          name={name}
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            console.log(value);
          }}
        >
          {(options || []).map((option,id) => (
            <option key={id} value={option}>{option}</option>
          ))}
        </select>
    </>
  );
}
