import { FC } from "react";
import { IPerson } from "../App";

interface IListProps {
  people: IPerson[];
}

const List: FC<IListProps> = ({ people }) => {
  return (
    <div>
      {people.map(person => (
        <h2>{person.name}</h2>
      ))}
    </div>
  );
};

export default List;
