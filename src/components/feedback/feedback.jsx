import React, { useState } from 'react';
import css from './feedback.module.css';
import FeedbackOptions from './feedback-options';
import Statistics from 'components/statistics/statistic';
import NoFeedbackMessage from 'components/message/no-feedback-message';

//.......................................................................................................................
function FeedbackCounter() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const goodFeedbackClick = () => {
    setGood(good => good + 1);
  };

  const neutralFeedbackClick = () => {
    setNeutral(neutral => neutral + 1);
  };

  const badFeedbackClick = () => {
    setBad(bad => bad + 1);
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return Math.round((good / total) * 100) || 0;
  };

  const totalFeedbacks = countTotalFeedback();
  const goodPercentage = countPositiveFeedbackPercentage();
  return (
    <div className={css.feedbackContainer}>
      <h3 className={css.feedbackTitle}>Please leave feedback</h3>

      <FeedbackOptions
        onGood={goodFeedbackClick}
        onNeutral={neutralFeedbackClick}
        onBad={badFeedbackClick}
      />
      {totalFeedbacks !== 0 ? (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={totalFeedbacks}
          positivePercentage={goodPercentage}
        />
      ) : (
        <NoFeedbackMessage message={'There is no feedback yet...'} />
      )}
    </div>
  );
}

export default FeedbackCounter;
