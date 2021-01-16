import propTypes from 'prop-types';

export default function FeedbackOptions({
  onLeaveFeedback,
  good,
  neutral,
  bad,
}) {
  return (
    <>
      <button onClick={onLeaveFeedback} name={good}>
        {good}
      </button>
      <button onClick={onLeaveFeedback} name={neutral}>
        {neutral}
      </button>
      <button onClick={onLeaveFeedback} name={bad}>
        {bad}
      </button>
    </>
  );
}

FeedbackOptions.propTypes = {
  good: propTypes.string,
  neutral: propTypes.string,
  bad: propTypes.string,
  onLeaveFeedback: propTypes.func,
};
