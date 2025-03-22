const Total = (props) => (
  <p>
    Number of exercises:{" "}
    {props.total.reduce((total, part) => total + part.exercises, 0)}
  </p>
);

export default Total;
