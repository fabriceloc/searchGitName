import "./styles.css";
import Button from "./Button";
import Title from "./Title";
import Search from "./Search";

export default function App() {
  const values = [
    "Afghanistan",
    "Åland Islands",
    "Albania",
    "Algeria",
    "American Samoa",
    "AndorrA",
    "Angola"
  ];

  return (
    <div className="App">
      <Title field="Titre" color="green" /*height="400px"*/ />
      <Search placeholder="Recherche ... . . " list={values} />
      <Button title="filtrer" backgroudColor="pink" /*height="400px"*/ />
    </div>
  );
}
