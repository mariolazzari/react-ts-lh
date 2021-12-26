import { useState } from "react";
import "./App.css";
import List from "./components/List";

export interface IPerson {
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
      <List people={people} />
    </div>
  );
}

export default App;
