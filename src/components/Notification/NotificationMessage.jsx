import propTypes from 'prop-types';

export default function NotificationMessage({ message }) {
  return (
    <span>{message}</span>
  )
};

NotificationMessage.propTypes = {
  message: propTypes.string
}