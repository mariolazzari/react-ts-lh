import { useState } from "react";
import "./App.css";

interface IPerson {
  name: string;
  age: number;
  url: string;
  note?: string;
}

interface IState {
  people: IPerson[];
}

function App() {
  const [people, setPeople] = useState<IState["people"]>([
    { name: "Lebron James", age: 36, url: "" },
  ]);

  return (
    <div className="App">
      <h1>People invited to our party</h1>
      {people.map(person => (
        <h2>{person.name}</h2>
      ))}
    </div>
  );
}

export default App;
