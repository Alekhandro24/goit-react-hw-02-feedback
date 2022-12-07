import PropTypes from 'prop-types';
import { Message } from 'components/Notification/Notification.styled';

export const Notification = ({ message }) => <Message>{message}</Message>;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
