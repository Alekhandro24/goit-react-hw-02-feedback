import PropTypes from 'prop-types';
import {
  FeedbackList,
  FeedbackListItem,
} from 'components/Statistics/Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <FeedbackList>
      <FeedbackListItem>Good: {good}</FeedbackListItem>
      <FeedbackListItem>Neutral: {neutral}</FeedbackListItem>
      <FeedbackListItem>Bad: {bad}</FeedbackListItem>
      <FeedbackListItem>TotalFeedback: {total}</FeedbackListItem>
      <FeedbackListItem>Total: {positivePercentage}%</FeedbackListItem>
    </FeedbackList>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
