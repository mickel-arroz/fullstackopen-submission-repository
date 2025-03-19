import { useState } from "react";

const StatisticsLine = ({ text, value }) => {
  return (
    <tr>
      <th>{text}:</th>
      <td>{value}</td>
    </tr>
  );
};

const Statistics = ({ good, neutral, bad }) => {
  return (
    <div>
      <h2>Statistics</h2>
      <table>
        <tbody>
          <StatisticsLine
            text="Good"
            value={good}
          />
          <StatisticsLine
            text="Neutral"
            value={neutral}
          />
          <StatisticsLine
            text="Bad"
            value={bad}
          />
          <StatisticsLine
            text="All"
            value={good + neutral + bad}
          />
          <StatisticsLine
            text="Average"
            value={(good - bad) / (good + neutral + bad)}
          />
          <StatisticsLine
            text="Positive"
            value={(good / (good + neutral + bad)) * 100}
          />
        </tbody>
      </table>
    </div>
  );
};

const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
};

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onClickGood = () => {
    setGood(good + 1);
  };

  const onClickNeutral = () => {
    setNeutral(neutral + 1);
  };

  const onClickBad = () => {
    setBad(bad + 1);
  };

  return (
    <div>
      <h2>Give Feedback</h2>
      <Button
        onClick={onClickGood}
        text="Good"
      />
      <Button
        onClick={onClickNeutral}
        text="Neutral"
      />
      <Button
        onClick={onClickBad}
        text="Bad"
      />

      {good || neutral || bad ? (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
        />
      ) : (
        <p>No feedback given</p>
      )}
    </div>
  );
};

export default App;
