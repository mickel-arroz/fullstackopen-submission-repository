import { useEffect, useState } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import contact from "../src/services/contact";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    contact
      .getAll()
      .then((initialData) => {
        setPersons(initialData);
      })
      .catch((error) => {
        alert("Error fetching data:", error);
      });
  }, []);

  let findSearch =
    search != ""
      ? persons.filter((person) => {
          return person.name.toLowerCase().includes(search.toLowerCase());
        })
      : persons;

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter
        search={search}
        setSearch={setSearch}
      ></Filter>
      <h2>Add a new Contact</h2>
      <PersonForm
        persons={persons}
        setPersons={setPersons}
        newName={newName}
        setNewName={setNewName}
        newPhone={newPhone}
        setNewPhone={setNewPhone}
      ></PersonForm>
      <h2>Numbers</h2>
      <Persons
        findSearch={findSearch}
        persons={persons}
        setPersons={setPersons}
      ></Persons>
    </div>
  );
};

export default App;
