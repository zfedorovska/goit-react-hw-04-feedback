import { useState } from 'react';
import FeedbackOptions from './Statistics/FeedbackOptions ';
import Statistics from './Statistics/Statistics';
import Section from './Statistics/Section';
import Notification from './Statistics/Notification';

export default function App() {
  const [options, setOptions] = useState({ good: 0, neutral: 0, bad: 0 });
  const handleButtonClick = key => {
    setOptions(options => ({ ...options, [key]: options[key] + 1 }));
  };

  const countTotalFeedback = () => {
    return options.good + options.bad + options.neutral;
  };

  const countPositiveFeedbackPercentage = () => {
    if (countTotalFeedback() === 0) {
      return 0;
    } else {
      return Math.round((options.good / countTotalFeedback()) * 100);
    }
  };

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(options)}
          onLeaveFeedback={handleButtonClick}
        />
      </Section>
      {countTotalFeedback() > 0 ? (
        <Section title="Statistics">
          <Statistics
            good={options.good}
            neutral={options.neutral}
            bad={options.bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        </Section>
      ) : (
        <Notification message="There is no feedback" />
      )}
    </div>
  );
}
