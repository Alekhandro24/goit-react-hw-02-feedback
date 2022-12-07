import PropTypes from 'prop-types';
import { FeedbackBtn } from 'components/FeedbackOptions/FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div>
    {options.map((option, index) => (
      <FeedbackBtn key={index} onClick={() => onLeaveFeedback(option)}>
        {option}
      </FeedbackBtn>
    ))}
  </div>
);

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
