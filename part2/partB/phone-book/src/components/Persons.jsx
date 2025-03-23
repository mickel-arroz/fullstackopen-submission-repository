const Persons = ({ findSearch }) => {
  return (
    <ul>
      {findSearch &&
        findSearch.map((person) => (
          <li key={person.id}>
            {person.name}: {person.number}
          </li>
        ))}
    </ul>
  );
};

export default Persons;
