import { useState } from "react";

interface Props {
  items: string[];
  onClick: (selectedIndex: number) => void;
}

const ListView = ({ items, onClick }: Props) => {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <div className="CardView">
        <ul className="list-group">
          {items.map((item, index) => (
            <li
              key={item}
              className={
                index === selectedIndex
                  ? "list-group-item active"
                  : "list-group-item list-group-item-dark "
              }
              onClick={() => {
                setSelectedIndex(index);
                onClick(index);
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ListView;
