const PersonForm = ({
  persons,
  setPersons,
  newName,
  setNewName,
  newPhone,
  setNewPhone,
}) => {
  const handleSubmitAddName = (event) => {
    event.preventDefault();
    persons.find((person) => person.name === newName)
      ? alert(`${newName} is already added to phonebook`)
      : setPersons([
          ...persons,
          { name: newName, number: newPhone, id: persons.length + 1 },
        ]);
    setNewName("");
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setNewPhone(event.target.value);
  };

  return (
    <form onSubmit={handleSubmitAddName}>
      <div>
        Nombre:{" "}
        <input
          value={newName}
          onChange={handleNameChange}
        />
      </div>
      <div>
        Number:{" "}
        <input
          value={newPhone}
          onChange={handlePhoneChange}
        />
      </div>
      <div>
        <button type="submit">Agregar</button>
      </div>
    </form>
  );
};

export default PersonForm;
