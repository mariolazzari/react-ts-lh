import { useState, FC, Dispatch, SetStateAction, ChangeEvent } from "react";
import { IPerson as Props } from "../App";

interface IProps {
  setPeople: Dispatch<SetStateAction<Props[]>>;
  people: Props[];
}

const AddToList: FC<IProps> = ({ setPeople, people }) => {
  const [input, setInput] = useState({
    name: "",
    age: "",
    note: "",
    img: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  };

  const handleClick = () => {
    if (!input.name || !input.age) {
      return;
    }

    setPeople([
      ...people,
      {
        name: input.name,
        age: +input.age,
        img: input.img,
        note: input.note,
      } as Props,
    ]);

    setInput({
      name: "",
      age: "",
      img: "",
      note: "",
    });
  };

  return (
    <div className="AddToList">
      <input
        type="text"
        onChange={handleChange}
        className="AddToList-input"
        name="name"
        value={input.name}
        placeholder="Name"
      />
      <input
        type="text"
        onChange={handleChange}
        className="AddToList-input"
        name="age"
        value={input.age}
        placeholder="Age"
      />
      <input
        type="text"
        onChange={handleChange}
        className="AddToList-input"
        name="img"
        value={input.img}
        placeholder="Image Url"
      />
      <textarea
        onChange={handleChange}
        className="AddToList-input"
        name="note"
        value={input.note}
        placeholder="Note"
      />
      <button onClick={handleClick} className="AddToList-btn">
        Add to List
      </button>
    </div>
  );
};

export default AddToList;
