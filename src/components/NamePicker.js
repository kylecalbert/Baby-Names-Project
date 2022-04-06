import React, { useContext } from "react";
import { names } from "../data/index";
import { GlobalContext } from "../context/GlobalState";

function NamePicker() {
  const { search, setShortList, shortList } = useContext(GlobalContext);

  const addToShortList = (id) => {
    setShortList([...shortList, id]);
  };

  const filteredNames = names
    .filter((entry) => entry.name.toLowerCase().includes(search.toLowerCase()))

    .filter((entry) => !shortList.includes(entry.id)); //  /// //

  return (
    <div className="NamePicker">
      <ul>
        {filteredNames.map((entry) => (
          <li className={entry.sex} key={entry.id}>
            <button onClick={() => addToShortList(entry.id)}>
              {entry.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NamePicker;
