import React from 'react';
import PropTypes from 'prop-types';
import s from './Statistics.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div className={s.buttonContainer}>
    {options.map(option => (
      <button onClick={() => onLeaveFeedback(option)} key={option}>
        {option}
      </button>
    ))}
  </div>
);

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
