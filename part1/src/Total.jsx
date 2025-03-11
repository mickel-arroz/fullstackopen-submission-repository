const Total = (props) => {
  return (
    <>
      <p>
        <b>Number of exercises</b>{" "}
        {props.parts[0].exercises +
          props.parts[1].exercises +
          props.parts[2].exercises}
      </p>
    </>
  );
};

export default Total;
