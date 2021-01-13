import propTypes from "prop-types";

export default function Notification({ message }) {
  return <p>{message}</p>;
}

Notification.efaultProps = {
  message: "No feedback given",
};

Notification.propTypes = {
  message: propTypes.string,
};
