import contact from "../services/contact";

const Persons = ({ findSearch, persons, setPersons }) => {
  const handleDeleteButton = (id) => {
    if (window.confirm("Are you sure you want to delete this contact?")) {
      contact
        .deleteContact(id)
        .then(() => {
          setPersons(persons.filter((person) => person.id !== id));
          alert("Contact deleted successfully");
        })
        .catch((error) => {
          alert("Error deleting contact:", error);
        });
    }
  };

  return (
    <ul>
      {findSearch &&
        findSearch.map((person) => (
          <li key={person.id}>
            {person.name}: {person.number}
            <button onClick={() => handleDeleteButton(person.id)}>
              Delete
            </button>
          </li>
        ))}
    </ul>
  );
};

export default Persons;
