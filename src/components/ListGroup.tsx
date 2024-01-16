import { useState } from "react";
interface Props {
  list: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}
const ListGroup = ({ list, heading, onSelectItem }: Props) => {
  let [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h2>{heading}</h2>
      {/* {list.length===0?<h3><i>no list found :(</i> </h3>:<h3><i>item found :B</i></h3>} */}
      {list.length === 0 && (
        <h3>
          <b>no list found :B</b>
        </h3>
      )}
      <ul className="list-group">
        {list.map((item, index) => {
          return (
            <li
              className={
                selectedIndex === index
                  ? "list-group-item active"
                  : "list-group-item"
              }
              key={item}
              onClick={function () {
                setSelectedIndex(index);
                // console.log(item, "clicked");
                onSelectItem(item);
              }}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ListGroup;
