import { useState } from "react";
import "./App.css";
import List from "./components/List";

export interface IPerson {
  name: string;
  age: number;
  img: string;
  note?: string;
}

interface IState {
  people: IPerson[];
}

function App() {
  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "LeBron James",
      age: 35,
      img: "https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png",
      note: "Allegeric to staying on the same team",
    },
    {
      name: "Kobe Bryant",
      age: 42,
      img: "https://fullpresscoverage.com/wp-content/uploads/2020/01/101524695-457220551.jpg",
    },
  ]);

  return (
    <div className="App">
      <h1>People invited to our party</h1>
      <List people={people} />
    </div>
  );
}

export default App;
