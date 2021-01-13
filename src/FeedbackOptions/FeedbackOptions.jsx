import propTypes from "prop-types";

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <>
      <button onClick={onLeaveFeedback} name={options}>
        {options}
      </button>
    </>
  );
}

FeedbackOptions.propTypes = {
  options: propTypes.string,
  onLeaveFeedback: propTypes.func,
};
