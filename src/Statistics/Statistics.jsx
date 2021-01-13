import propTypes from "prop-types";
import Notification from "../Notification/Notification";

export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return (
    <>
      <h2>Statistics</h2>
      {total !== 0 ? (
        <div>
          <ul>
            <li>Good: {good}</li>
            <li>Neutral: {neutral}</li>
            <li>Bad: {bad}</li>
            <li>Total: {total}</li>
            <li>Positive feedback: {positivePercentage}</li>
          </ul>
        </div>
      ) : (
        <Notification message={"No feedback given"} />
      )}
    </>
  );
}

Statistics.propTypes = {
  good: propTypes.number,
  neutral: propTypes.number,
  bad: propTypes.number,
  total: propTypes.number,
  positivePercentage: propTypes.string,
};
